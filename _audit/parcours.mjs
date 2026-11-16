/* Parcours propres à la maquette Marie Nuel : filtres des œuvres (adresse et compte), visionneuse (clavier, Échap,
   focus rendu), composeur de commande (prix de départ et date limite recalculés), demande d'achat (deux onglets,
   donnée abîmée, total), marque-page (aperçu), agenda (à venir avant les passés). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const lieu = (page, taille = '1366×768') => ({ page, taille });

  /* Filtres des œuvres : compte juste, gardé dans l'adresse, rien de vide. */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    try {
      await page.goto(BASE + '/oeuvres', { waitUntil: 'load' }); await attendrePret(page);
      await page.click('[data-filtre="oiseaux"]'); await attendre(600);
      const r = await page.evaluate(() => ({
        visibles: [...document.querySelectorAll('.grille-oeuvres .grille-item')].filter((li) => !li.classList.contains('masque')).length,
        attendus: [...document.querySelectorAll('.grille-oeuvres .grille-item[data-categorie="oiseaux"]')].length,
        url: location.search, compte: document.querySelector('[data-compte]').textContent,
      }));
      if (r.visibles !== r.attendus || !r.attendus) R.echec('filtres des œuvres', `${r.visibles} œuvres visibles pour ${r.attendus} oiseaux`, lieu('/oeuvres'));
      if (!/filtre=oiseaux/.test(r.url)) R.echec('filtres des œuvres', 'filtre absent de l’adresse', lieu('/oeuvres'));
      if (!r.compte.includes(String(r.attendus))) R.echec('filtres des œuvres', `compte affiché « ${r.compte} »`, lieu('/oeuvres'));

      /* Visionneuse : ouverture, flèche, Échap, focus rendu à la vignette. */
      await page.click('[data-filtre="tout"]'); await attendre(500);
      const premier = page.locator('[data-ouvrir]').first();
      await premier.scrollIntoViewIfNeeded(); await premier.click(); await attendre(400);
      const ouverte = await page.evaluate(() => !document.querySelector('[data-visionneuse]').hidden && !!document.querySelector('[data-visionneuse] img')?.complete);
      if (!ouverte) R.echec('visionneuse', 'ne s’ouvre pas ou image non chargée', lieu('/oeuvres'));
      const t1 = await page.textContent('[data-v-titre]');
      await page.keyboard.press('ArrowRight'); await attendre(300);
      const t2 = await page.textContent('[data-v-titre]');
      if (t1 === t2) R.echec('visionneuse', 'la flèche droite ne change pas d’œuvre', lieu('/oeuvres'));
      await page.keyboard.press('Escape'); await attendre(300);
      const apres = await page.evaluate(() => ({ cachee: document.querySelector('[data-visionneuse]').hidden, focus: !!document.activeElement?.matches('[data-ouvrir]') }));
      if (!apres.cachee) R.echec('visionneuse', 'Échap ne ferme pas', lieu('/oeuvres'));
      if (!apres.focus) R.regarder('visionneuse', 'le focus ne revient pas sur la vignette', lieu('/oeuvres'));
    } finally { await ctx.close(); }
  }

  /* Composeur : prix de départ selon l'occasion et le format, date limite trois mois avant (deux pour les armoiries). */
  {
    const { ctx, page } = await contexte({ taille: T('390×844') });
    try {
      await page.goto(BASE + '/commandes?occasion=religieux#composer', { waitUntil: 'load' }); await attendrePret(page);
      const prix = () => page.evaluate(() => parseInt(document.querySelector('[data-recap-prix]').textContent.replace(/\D/g, ''), 10));
      if ((await prix()) !== 90) R.echec('composeur', `lettrine religieuse affichée ${await prix()} € au lieu de 90 €`, lieu('/commandes', '390×844'));
      await page.check('input[name="format"][value="page"]', { force: true }); await attendre(150);
      if ((await prix()) !== 140) R.echec('composeur', `pleine page religieuse affichée ${await prix()} € au lieu de 140 €`, lieu('/commandes', '390×844'));
      await page.selectOption('#cp-occasion', 'mariage'); await attendre(150);
      if ((await prix()) !== 150) R.echec('composeur', `pleine page affichée ${await prix()} € au lieu de 150 €`, lieu('/commandes', '390×844'));
      await page.fill('#cp-date', '2027-06-20'); await page.dispatchEvent('#cp-date', 'change'); await attendre(150);
      const delai = await page.textContent('[data-recap-delai]');
      if (!/20 mars 2027/.test(delai)) R.echec('composeur', `date limite « ${delai.trim()} » au lieu du 20 mars 2027`, lieu('/commandes', '390×844'));
      const lien = await page.getAttribute('[data-recap-lien]', 'href');
      if (!/sujet=commande/.test(lien) || !/message=/.test(lien)) R.echec('composeur', 'le lien d’envoi ne préremplit pas le contact', lieu('/commandes', '390×844'));
    } finally { await ctx.close(); }
  }

  /* Demande d'achat : ajout, total, même demande dans un second onglet, donnée abîmée nettoyée. */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    try {
      await page.goto(BASE + '/boutique', { waitUntil: 'load' }); await attendrePret(page);
      await page.evaluate(() => localStorage.removeItem('marie-nuel-demande'));
      await page.reload({ waitUntil: 'load' }); await attendrePret(page);
      for (const id of ['lapins', 'arbre']) { const b = page.locator(`.ajouter[data-ajouter="${id}"]`); await b.scrollIntoViewIfNeeded(); await b.click(); await attendre(900); }
      const autre = await ctx.newPage();
      await autre.goto(BASE + '/boutique', { waitUntil: 'load' }); await attendrePret(autre);
      const nb2 = await autre.evaluate(() => document.querySelector('[data-demande-nb]').textContent.trim());
      if (nb2 !== '2') R.echec('demande d’achat', `second onglet : ${nb2} pièce(s) au lieu de 2`, lieu('/boutique'));
      await page.click('.demande-bouton'); await attendre(300);
      const total = await page.evaluate(() => parseInt(document.querySelector('[data-demande-total]').textContent.replace(/\D/g, ''), 10));
      if (total !== 93 + 35) R.echec('demande d’achat', `total ${total} € au lieu de 128 €`, lieu('/boutique'));
      await page.keyboard.press('Escape'); await attendre(200);
      await page.evaluate(() => localStorage.setItem('marie-nuel-demande', '{abîmé'));
      await page.reload({ waitUntil: 'load' });
      if ((await attendrePret(page)) === 'jamais-pret') R.echec('demande d’achat', 'une donnée abîmée bloque le site', lieu('/boutique'));
      const nb = await page.evaluate(() => document.querySelector('[data-demande-nb]').textContent.trim());
      if (nb !== '0') R.echec('demande d’achat', `donnée abîmée : ${nb} pièce(s) affichée(s)`, lieu('/boutique'));
      /* Marque-page : l'aperçu suit le prénom. */
      await page.fill('#mp-prenom', 'Gaspard'); await attendre(150);
      const signet = await page.evaluate(() => document.querySelector('[data-signet-initiale]').textContent + document.querySelector('[data-signet-nom]').textContent);
      if (signet !== 'Gaspard') R.echec('marque-page', `aperçu « ${signet} » au lieu de « Gaspard »`, lieu('/boutique'));
      await page.evaluate(() => localStorage.removeItem('marie-nuel-demande'));
    } finally { await ctx.close(); }
  }

  /* Agenda : les dates à venir avant les stages terminés. */
  {
    const { ctx, page } = await contexte({ taille: T('390×844') });
    try {
      await page.goto(BASE + '/stages', { waitUntil: 'load' }); await attendrePret(page);
      const ordre = await page.evaluate(() => [...document.querySelectorAll('.agenda-cartes > li')].map((li) => li.classList.contains('est-passe')));
      const premierPasse = ordre.indexOf(true);
      if (premierPasse >= 0 && ordre.slice(premierPasse).includes(false)) R.echec('agenda', 'un stage à venir est rangé après un stage terminé', lieu('/stages', '390×844'));
    } finally { await ctx.close(); }
  }
}

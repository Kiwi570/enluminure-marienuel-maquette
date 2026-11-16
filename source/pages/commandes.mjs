/* Commandes : ouverture « prix d'appel en très grand », occasions en onglets, composeur (prix de départ et date limite
   calculée), fêtes religieuses, exemples réalisés, questions, appel final. Choix prérempli par l'adresse (?occasion=). */
import { html, brut } from '../../outils/gabarit.mjs';
import { visuel } from '../gabarits/oeuvre.mjs';
import { monogramme } from '../gabarits/monogramme.mjs';

export const page = { cle: 'commandes', fichier: 'commandes', imagePartage: 'c-couple-800.webp' };

const EXEMPLES = [
  ['c-elephants', 'Éléphants', 'Cadeau de naissance', '1577 / 1054'],
  ['c-chevaux', 'Chevaux', 'Cadeau d’anniversaire', '1278 / 1215'],
  ['c-scout', 'Cadeau de mariage scout', 'Gothique · or et pigments sur parchemin · 30 × 30 cm', '1350 / 1218'],
  ['c-cinquante', 'Cinquante ans d’amitié', 'Fête d’anniversaire · grande lettrine dorée', '2000 / 1500'],
  ['c-pauline', 'Carte Pauline', 'Première communion · or minéral, pigments, bâtarde flamande · 7 × 11,5 cm', '2000 / 1506'],
  ['c-danseuse', 'Lettrine à la danseuse', 'Initiale D · commande', '1500 / 2000'],
  ['c-musiciens', 'Joueurs de rebab et de luth oud', 'Cadeau d’anniversaire', '1551 / 1221'],
  ['c-arbres', 'Arbres enlacés', 'Cadeau de mariage', '1596 / 1956'],
  ['c-marquepages', 'Marque-pages', 'Prénoms en gothique, encre de cassel · 18 × 5 cm', '2000 / 1333'],
];

export default (c) => {
  const occ = c.donnees.occasions;
  return html`
<section class="ouv ouv--prix" id="debut">
  <div class="ouv-texte">
    <span class="lettrine-or" data-effet="lettrine-or" data-grille="fil typo" aria-hidden="true" data-iris-centre><span>U</span></span>
    <p class="surtitre" data-anime>${c.t('commandes.tete.surtitre')}</p>
    <h1 data-anime="lignes">${c.t('commandes.tete.titre')}</h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime>${c.t('commandes.tete.texte')}</p>
    <p class="ouv-prix" data-anime><span>${c.t('commandes.tete.prix')}</span><strong data-prix>${c.t('commandes.tete.prixValeur')}</strong></p>
    <p data-anime><a class="bouton" href="#composer" data-action-principale data-survol="magnetique">${c.t('commandes.tete.action')}</a></p>
    <p class="ouv-info" data-info-cle><span class="pastille"></span>${c.t('commandes.tete.info')}</p>
  </div>
  <div class="ouv-image">
    ${visuel(c, { nom: 'grok/commandes-ouverture', alt: c.s('commandes.tete.alt'), priorite: true, classe: 'ouv-image-fond', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' }, 'table')}
    <div class="ouv-image-oeuvre oeuvre-pose" style="--r:1920 / 1896">${c.media({ nom: 'c-couple', alt: 'Couple tendre, d’après un manuscrit médiéval', ratio: '1920 / 1896', priorite: true, sizes: '(max-width: 760px) 50vw, 22vw' })}</div>
  </div>
</section>

<section class="occasions-onglets" id="occasions">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('commandes.occasions.surtitre')}</p>
    <h2 data-anime="lignes">${c.tb('commandes.occasions.titre')}</h2>
    <div class="onglets" role="tablist" aria-label="${c.s('commandes.occasions.surtitre')}" data-onglets>
      ${occ.map((x, i) => html`<button type="button" role="tab" id="onglet-${x.id}" class="onglet" aria-selected="${i === 0 ? 'true' : 'false'}" aria-controls="panneau-${x.id}" tabindex="${i === 0 ? '0' : '-1'}">${x.titre}</button>`)}
    </div>
    ${occ.map((x, i) => html`<div class="panneau" role="tabpanel" id="panneau-${x.id}" aria-labelledby="onglet-${x.id}"${i === 0 ? '' : ' hidden'}>
      <div class="panneau-visuel oeuvre-pose" style="--r:${x.ratio}">${c.media({ nom: x.image, alt: x.titre, ratio: x.ratio, sizes: '(max-width: 760px) 80vw, 30vw' })}</div>
      <div class="panneau-texte">
        <h3>${x.titre}</h3>
        <p>${x.texte}</p>
        <p class="panneau-prix" data-prix>${x.prix}</p>
        <p><a class="bouton bouton--contour" href="${c.url('commandes', 'composer', 'occasion=' + x.id)}" data-choisir="${x.id}" data-sans-transition>${c.t('commandes.occasions.choisir')}</a></p>
      </div>
    </div>`)}
  </div>
</section>

<section class="composer" id="composer">
  <div class="conteneur composer-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('commandes.composer.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('commandes.composer.titre')}</h2>
      <p class="composer-intro" data-anime>${c.t('commandes.composer.texte')}</p>
      <form class="composeur" data-composeur action="#" novalidate>
        <div class="champ"><label for="cp-occasion">${c.t('commandes.composer.occasion')}</label>
          <select id="cp-occasion" name="occasion">${occ.map((x) => html`<option value="${x.id}">${x.titre}</option>`)}</select></div>
        <fieldset class="choix"><legend>${c.t('commandes.composer.format')}</legend>
          <label><input type="radio" name="format" value="lettrine" checked><span>${c.t('commandes.composer.fLettrine')}</span></label>
          <label><input type="radio" name="format" value="page"><span>${c.t('commandes.composer.fPage')}</span></label>
          <label><input type="radio" name="format" value="armoiries"><span>${c.t('commandes.composer.fArmoiries')}</span></label>
        </fieldset>
        <fieldset class="choix"><legend>${c.t('commandes.composer.support')}</legend>
          <label><input type="radio" name="support" value="papier" checked><span>${c.t('commandes.composer.sPapier')}</span></label>
          <label><input type="radio" name="support" value="parchemin"><span>${c.t('commandes.composer.sParchemin')}</span></label>
        </fieldset>
        <fieldset class="choix"><legend>${c.t('commandes.composer.or')}</legend>
          <label><input type="radio" name="or" value="avec" checked><span>${c.t('commandes.composer.orAvec')}</span></label>
          <label><input type="radio" name="or" value="sans"><span>${c.t('commandes.composer.orSans')}</span></label>
        </fieldset>
        <div class="champ"><label for="cp-date">${c.t('commandes.composer.date')}</label><input id="cp-date" name="date" type="date"><p class="aide">${c.t('commandes.composer.dateAide')}</p></div>
      </form>
    </div>
    <aside class="recap" aria-live="polite" data-recap>
      <div class="recap-feuille" data-effet="feuille" data-visuel>
        <span class="recap-lettrine" data-recap-lettrine aria-hidden="true">N</span>
        <p class="recap-occasion" data-recap-occasion>${occ[0].titre}</p>
        <p class="recap-choix" data-recap-choix></p>
      </div>
      <p class="recap-prix"><span>${c.t('commandes.composer.resultat')}</span> <strong data-prix data-recap-prix>120 €</strong></p>
      <p class="recap-delai" data-recap-delai data-delai-sans="${c.s('commandes.composer.delaiSans')}" data-delai-ok="${c.s('commandes.composer.delaiOk')}" data-delai-court="${c.s('commandes.composer.delaiCourt')}">${c.t('commandes.composer.delaiSans')}</p>
      <p><a class="bouton" href="${c.url('contact', 'ecrire', 'sujet=commande')}" data-libelle="${c.libelle('contact')}" data-recap-lien>${c.t('commandes.composer.envoyer')}</a></p>
      <p class="recap-note">${c.t('commandes.composer.note')}</p>
    </aside>
  </div>
</section>

<section class="gestes" id="gestes">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('commandes.gestes.surtitre')}</p>
    <h2 class="etapes-titre" data-anime="lignes">${c.t('accueil.metier.etapesTitre')}</h2>
    <ol class="etapes" data-anime="cascade">
      <li class="etape"><span class="etape-visuel etape-reglure" data-visuel role="img" aria-label="${c.s('accueil.metier.e1t')}"><svg viewBox="0 0 300 380" aria-hidden="true"><rect x="10" y="10" width="280" height="360" rx="4"/><path d="M46 10 V370 M254 10 V370"/>${brut(Array.from({ length: 12 }, (_, i) => `<path d="M46 ${118 + i * 20} H254"/>`).join(''))}<rect class="etape-lettrine" x="46" y="48" width="58" height="58"/></svg></span><span class="etape-n">1</span><strong>${c.t('accueil.metier.e1t')}</strong><span>${c.t('accueil.metier.e1')}</span></li>
      <li class="etape">${visuel(c, { nom: 'grok/plume-encre', alt: c.s('accueil.metier.altPlume'), classe: 'etape-visuel', ratio: '3 / 4', sizes: '(max-width: 760px) 50vw, 22vw' }, 'plume')}<span class="etape-n">2</span><strong>${c.t('accueil.metier.e2t')}</strong><span>${c.t('accueil.metier.e2')}</span></li>
      <li class="etape">${c.media({ nom: 'atelier-pinceau', alt: c.s('accueil.metier.altPinceau'), classe: 'etape-visuel', ratio: '3 / 4', cadrage: '58% 55%', sizes: '(max-width: 760px) 50vw, 22vw' })}<span class="etape-n">3</span><strong>${c.t('accueil.metier.e3t')}</strong><span>${c.t('accueil.metier.e3')}</span></li>
      <li class="etape">${visuel(c, { nom: 'grok/or-dorure', alt: c.s('accueil.metier.altOr'), classe: 'etape-visuel', ratio: '3 / 4', sizes: '(max-width: 760px) 50vw, 22vw' }, 'or')}<span class="etape-n">4</span><strong>${c.t('accueil.metier.e4t')}</strong><span>${c.t('accueil.metier.e4')}</span></li>
    </ol>
  </div>
</section>

<section class="religions" id="religions">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('commandes.religions.surtitre')}</p>
    <h2 data-anime="lignes">${c.tb('commandes.religions.titre')}</h2>
    <div class="religions-grille">
      ${c.media({ nom: 'c-esprit', alt: 'Esprit-Saint en colombe, style roman, or et pigments sur parchemin', classe: 'religions-image', ratio: '1225 / 1636', sizes: '(max-width: 760px) 70vw, 26vw', attrs: 'data-anime="rideau"' })}
      <dl class="religions-liste" data-anime="cascade">
        <div><dt>${c.t('commandes.religions.chretiens')}</dt><dd>${c.t('commandes.religions.chretiensT')}</dd></div>
        <div><dt>${c.t('commandes.religions.juifs')}</dt><dd>${c.t('commandes.religions.juifsT')}</dd></div>
        <div><dt>${c.t('commandes.religions.musulmans')}</dt><dd>${c.t('commandes.religions.musulmansT')}</dd></div>
        <div><dt>${c.t('commandes.religions.autres')}</dt><dd>${c.t('commandes.religions.autresT')}</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="exemples" id="exemples">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('commandes.exemples.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('commandes.exemples.titre')}</h2>
    <ul class="exemples-grille" data-anime="cascade">
      ${EXEMPLES.map(([nom, titre, ligne, ratio]) => html`<li class="oeuvre-carte"><div class="oeuvre-pose" style="--r:${ratio}">${c.media({ nom, alt: titre, ratio, sizes: '(max-width: 760px) 46vw, 20vw' })}</div><span class="cartel"><span class="cartel-titre">${titre}</span><span class="cartel-ligne">${ligne}</span></span></li>`)}
    </ul>
  </div>
</section>

<section class="questions" id="questions">
  <div class="conteneur questions-grille">
    <h2 data-anime="lignes">${c.t('commandes.questions.titre')}</h2>
    <div class="questions-liste" data-anime="cascade" data-visuel>
      ${[1, 2, 3, 4].map((i) => html`<details class="question"><summary>${c.t('commandes.questions.q' + i)}</summary><p>${c.t('commandes.questions.r' + i)}</p></details>`)}
    </div>
  </div>
</section>

<section class="fin fin--court" id="fin">
  <div class="conteneur fin-court">
    <div class="fin-mono fin-mono--petit" data-effet="monogramme">${monogramme('fin')}</div>
    <h2 data-anime="lignes">${c.t('commandes.fin.titre')}</h2>
    <p data-anime>${c.t('commandes.fin.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('contact', { ancre: 'ecrire', params: 'sujet=commande', classe: 'bouton bouton--or', texte: c.t('commandes.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};

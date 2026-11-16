/* Accueil : direction « Lapis et feuille d'or ». Une vraie œuvre en ouverture, dont l'or accroche la lumière
   (or-vivant), le métier (pigments, manuscrit), les commandes, les stages, Marie, la boutique, l'appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { monogramme } from '../gabarits/monogramme.mjs';
import { visuel, carteOeuvre, oeuvrePosee, reflet, estPasse, prochain, ordreAgenda } from '../gabarits/oeuvre.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'heros-amitie-1000.webp' };

const MUR = [['kiwi', 'dame'], ['manchot', 'enlumineur'], ['kookaburra', 'annonciation']];
const PIGMENTS = [['lapis', '#2a4fa8'], ['cinabre', '#c8321e'], ['orpiment', '#e7b425'], ['garance', '#a8343c'], ['pastel', '#4f78a8'], ['ocre', '#c48a3a'], ['kermes', '#9e1f3d'], ['ivoire', '#2b2622']];
const OFFRIR = ['benis3', 'lapins', 'psaume61', 'petitprince'];

export default (c) => {
  const O = Object.fromEntries(c.donnees.oeuvres.map((o) => [o.id, o]));
  const B = Object.fromEntries(c.donnees.boutique.map((b) => [b.id, b]));
  const p = prochain(c.donnees.agenda);
  return html`
<section class="heros" id="debut">
  <svg class="heros-reglure" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path data-fx-trait d="M0 150 H1440" /><path data-fx-trait d="M0 760 H1440" /><path data-fx-trait d="M96 0 V900" /></svg>
  <div class="heros-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.heros.surtitre')}</p>
    <h1 class="heros-titre" data-anime="gsap" data-grille="typo"><span class="ligne-masque"><span class="heros-ligne">${c.t('accueil.heros.titre1')}</span></span><span class="ligne-masque"><span class="heros-ligne">${c.tb('accueil.heros.titre2')}</span></span><span class="ligne-masque"><span class="heros-ligne">${c.t('accueil.heros.titre3')}</span></span></h1>
    <p class="heros-chapo masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.heros.texte')}</p>
    <p class="heros-actions" data-anime="gsap">
      ${c.lien('commandes', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.heros.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('oeuvres', { classe: 'bouton bouton--contour', texte: c.t('accueil.heros.action2') })}
    </p>
    <p class="heros-info" data-anime="gsap" data-info-cle data-prochain>${p ? html`<span class="pastille"></span>${c.t('accueil.heros.infoPrefixe')} · <a href="${c.url('stages', 'agenda')}" data-libelle="${c.libelle('stages')}">${p.dates} · ${p.titre.toLowerCase()}</a>` : ''}</p>
  </div>
  <div class="heros-oeuvre" data-iris-centre>
    <div class="or-cadre" data-effet="or-vivant" data-souris data-grille="manipuler fil">
      ${c.media({ nom: 'heros-amitie', alt: c.s('accueil.heros.cartel'), priorite: true, ratio: '1908 / 1866', sizes: '(max-width: 760px) 86vw, 44vw' })}
      ${reflet('masque-amitie.png')}
    </div>
    <p class="cartel heros-cartel masque-ecran-bas" data-anime="gsap">${c.t('accueil.heros.cartel')}</p>
  </div>
</section>

<section class="illuminare" id="illuminare">
  <div class="conteneur illuminare-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.illuminare.surtitre')}</p>
      <p class="manifeste" data-anime="mots">${c.t('accueil.illuminare.texte')}</p>
      <ul class="reperes" data-anime="cascade">
        <li><strong>2012</strong><span>${c.t('accueil.illuminare.c1')}</span></li>
        <li><strong><span data-compteur="100">100</span> h</strong><span>${c.t('accueil.illuminare.c2')}</span></li>
        <li><strong data-compteur="23">23</strong><span>${c.t('accueil.illuminare.c3')}</span></li>
        <li><strong data-compteur="10">10</strong><span>${c.t('accueil.illuminare.c4')}</span></li>
      </ul>
    </div>
    <figure class="illuminare-or">
      <div class="or-cadre" data-effet="or-vivant" data-souris>
        ${c.media({ nom: 'or-sterne', alt: c.s('accueil.illuminare.legende'), ratio: '1500 / 2000', sizes: '(max-width: 760px) 80vw, 34vw' })}
        ${reflet('masque-sterne.png')}
      </div>
      <figcaption class="cartel">${c.t('accueil.illuminare.legende')}</figcaption>
    </figure>
  </div>
</section>

<section class="mur" id="oeuvres-choisies">
  <div class="conteneur mur-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.mur.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.mur.titre')}</h2>
    </div>
    <p class="mur-texte" data-anime>${c.t('accueil.mur.texte')}</p>
  </div>
  <div class="conteneur mur-colonnes">
    ${MUR.map((col, i) => html`<div class="mur-col" data-effet="colonnes" data-vitesse="${[0.06, -0.05, 0.1][i]}">${col.map((id) => carteOeuvre(c, O[id], { sizes: '(max-width: 760px) 46vw, 30vw', attrs: 'data-survol="incline" data-survol-force="4"' }))}</div>`)}
  </div>
  <p class="conteneur mur-action" data-anime>${c.lien('oeuvres', { classe: 'bouton', texte: c.t('accueil.mur.action'), attrs: 'data-survol="magnetique"' })}</p>
</section>

<section class="commander" id="commander">
  <div class="conteneur">
    <div class="commander-tete">
      <div>
        <p class="surtitre" data-anime>${c.t('accueil.commander.surtitre')}</p>
        <h2 data-anime="lignes">${c.tb('accueil.commander.titre')}</h2>
      </div>
      <div>
        <p data-anime>${c.t('accueil.commander.texte')}</p>
        <p class="delai" data-anime><span class="pastille"></span>${c.t('accueil.commander.delai')}</p>
      </div>
    </div>
    <ul class="occasions" data-anime="cascade">
      ${c.donnees.occasions.map((x) => html`<li><a class="occasion" href="${c.url('commandes', 'composer', 'occasion=' + x.id)}" data-libelle="${c.libelle('commandes')}" data-survol="incline" data-survol-force="5">
        <span class="occasion-visuel">${c.media({ nom: x.image, alt: x.titre, ratio: x.ratio, sizes: '(max-width: 760px) 44vw, 22vw' })}</span>
        <span class="occasion-titre">${x.titre}</span>
        <span class="occasion-texte">${x.texte}</span>
        <span class="occasion-prix" data-prix>${x.prix}</span>
      </a></li>`)}
    </ul>
    <p class="commander-actions" data-anime>
      ${c.lien('commandes', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.commander.action'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('commandes', { ancre: 'exemples', classe: 'bouton bouton--contour', texte: c.t('accueil.commander.voir') })}
    </p>
  </div>
</section>

<section class="metier" id="metier" data-fx="plein-ecran" style="--fx-longueur:170svh" data-fx-depart="inset(22% 26% 22% 26% round 18px)">
  <div data-collant>
    ${visuel(c, { nom: 'grok/accueil-ouverture', alt: c.s('accueil.metier.alt'), sizes: '100vw', classe: 'metier-media' }, 'table')}
    <div class="metier-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.metier.gauche')}</span><span data-fx-ecarte="d">${c.t('accueil.metier.droite')}</span></div>
    <div class="metier-legende" data-fx-apres>
      <h2>${c.t('accueil.metier.titre')}</h2>
      <p>${c.t('accueil.metier.texte')}</p>
    </div>
  </div>
</section>

<section class="pigments" id="pigments">
  <div class="conteneur">
    <h2 class="pigments-titre" data-anime="lignes">${c.t('accueil.metier.pigmentsTitre')}</h2>
    <div class="pigments-grille">
    ${c.media({ nom: 'grok/pigments', alt: c.s('accueil.metier.altPigments'), classe: 'pigments-photo', ratio: '3 / 2', cadrage: '62% 60%', sizes: '(max-width: 900px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div>
    <ul class="pigments-liste" data-visuel>
      ${PIGMENTS.map(([k, col], i) => html`<li class="pigment" style="--pig:${col};--i:${i}"><span class="pigment-pastille" aria-hidden="true"><span class="pigment-poudre"></span><span class="pigment-aplat" data-effet="pigments"></span></span><span class="pigment-nom">${c.t('pigments.' + k)}</span><span class="pigment-origine">${c.t('pigments.' + k + 'O')}</span></li>`)}
    </ul>
    <p class="pigments-note" data-anime>${c.t('accueil.metier.toxique')}</p>
    </div>
    </div>
  </div>
</section>

<section class="manuscrit" id="manuscrit" data-scene>
  <div class="manuscrit-cadre" data-collant>
    <div class="conteneur manuscrit-grille">
      <div class="livre">
        <div class="livre-page">${c.media({ nom: 'manuscrit-incipit', alt: 'La Veillée pascale, page d’ouverture du manuscrit', ratio: '3 / 4', sizes: '(max-width: 760px) 70vw, 32vw' })}</div>
        <div class="livre-couverture" data-effet="manuscrit">
          <div class="livre-face">${c.media({ nom: 'manuscrit-plat', alt: 'Plat de la reliure en cuir de chèvre, avec ses cabochons', ratio: '3 / 4', sizes: '(max-width: 760px) 70vw, 32vw' })}</div>
          <div class="livre-dos" data-face="dos"></div>
        </div>
      </div>
      <div class="manuscrit-texte">
        <p class="surtitre">${c.t('accueil.manuscrit.surtitre')}</p>
        <h2 data-anime="lignes">${c.tb('accueil.manuscrit.titre')}</h2>
        <p class="masque-ecran-bas" data-anime>${c.t('accueil.manuscrit.texte')}</p>
        <dl class="fiche" data-anime="cascade">
          <div><dt>${c.t('accueil.manuscrit.f1t')}</dt><dd>${c.t('accueil.manuscrit.f1')}</dd></div>
          <div><dt>${c.t('accueil.manuscrit.f2t')}</dt><dd>${c.t('accueil.manuscrit.f2')}</dd></div>
          <div><dt>${c.t('accueil.manuscrit.f3t')}</dt><dd>${c.t('accueil.manuscrit.f3')}</dd></div>
          <div><dt>${c.t('accueil.manuscrit.f4t')}</dt><dd>${c.t('accueil.manuscrit.f4')}</dd></div>
        </dl>
        <p class="indice masque-ecran-bas">${c.t('accueil.manuscrit.indice')}</p>
      </div>
    </div>
  </div>
</section>

<section class="apprendre" id="apprendre">
  <div class="conteneur apprendre-grille">
    <div class="apprendre-texte">
      <p class="surtitre" data-anime>${c.t('accueil.apprendre.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.apprendre.titre')}</h2>
      <p data-anime>${c.t('accueil.apprendre.texte')}</p>
      <h3 class="petit-titre" data-anime>${c.t('accueil.apprendre.prochains')}</h3>
      <ul class="agenda-court" data-anime="cascade">
        ${ordreAgenda(c.donnees.agenda).map((a) => html`<li class="agenda-ligne${estPasse(a) ? ' est-passe' : ''}" data-debut="${a.debut}" data-fin="${a.fin}"><span class="agenda-date">${a.dates}</span><span class="agenda-titre">${a.titre}</span><span class="agenda-etat">${c.t('accueil.apprendre.passe')}</span></li>`)}
      </ul>
      <p data-anime>${c.lien('stages', { classe: 'bouton', texte: c.t('accueil.apprendre.voir'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="apprendre-visuels">
      ${c.media({ nom: 'atelier-pinceau', alt: 'En atelier, un pinceau fin pose la couleur sur une enluminure', classe: 'apprendre-grand', cadrage: '58% 55%', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe"' })}
      <ul class="formules" data-anime="cascade">
        <li><strong>${c.t('accueil.apprendre.s1t')}</strong><span>${c.t('accueil.apprendre.s1')}</span></li>
        <li><strong>${c.t('accueil.apprendre.s2t')}</strong><span>${c.t('accueil.apprendre.s2')}</span></li>
        <li><strong>${c.t('accueil.apprendre.s3t')}</strong><span>${c.t('accueil.apprendre.s3')}</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="marie" id="marie">
  <div class="conteneur marie-grille">
    <div class="marie-photo">
      ${c.media({ nom: 'marie-archives', alt: c.s('accueil.marie.alt'), cadrage: '30% 40%', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
      <svg class="lapin" viewBox="0 0 160 120" aria-hidden="true" data-effet="lapin"><g class="lapin-corps"><path class="lapin-oreille lapin-oreille-g" d="M62 58 C52 22 56 6 64 4 C74 8 74 34 70 58"/><path class="lapin-oreille lapin-oreille-d" d="M78 58 C84 24 94 10 102 12 C108 20 96 42 86 60"/><path d="M40 120 C36 84 52 56 78 56 C104 56 122 82 120 120 Z"/><circle class="lapin-oeil" cx="92" cy="80" r="3.4"/><path class="lapin-nez" d="M112 92 l5 -2 l-1 5 z"/></g></svg>
    </div>
    <div class="marie-texte">
      <p class="surtitre" data-anime>${c.t('accueil.marie.surtitre')}</p>
      <h2 data-anime="lettres">${c.t('accueil.marie.titre')}</h2>
      <p data-anime>${c.t('accueil.marie.texte1')}</p>
      <p data-anime>${c.t('accueil.marie.texte2')}</p>
      <blockquote class="citation" data-anime="mots"><p>« ${c.t('accueil.marie.citation')} »</p></blockquote>
      <dl class="echos" data-anime="cascade">
        <div><dt>${c.t('accueil.marie.presseTitre')}</dt><dd>${c.t('accueil.marie.presse')}</dd></div>
        <div><dt>${c.t('accueil.marie.lieuxTitre')}</dt><dd>${c.t('accueil.marie.lieux')}</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="offrir" id="offrir">
  <div class="conteneur">
    <div class="offrir-tete">
      <div><p class="surtitre" data-anime>${c.t('accueil.offrir.surtitre')}</p><h2 data-anime="lignes">${c.tb('accueil.offrir.titre')}</h2></div>
      <p data-anime>${c.t('accueil.offrir.texte')}</p>
    </div>
    <ul class="offrir-liste" data-anime="cascade">
      ${OFFRIR.map((id) => { const b = B[id]; return html`<li><a class="produit" href="${c.url('boutique', 'b-' + b.id)}" data-libelle="${c.libelle('boutique')}">${oeuvrePosee(c, { ...b, detail: false }, { sizes: '(max-width: 760px) 46vw, 22vw' })}<span class="produit-titre">${b.titre}</span><span class="produit-prix" data-prix>${b.prix} €</span></a></li>`; })}
      <li class="offrir-plus">
        <a class="mini" href="${c.url('boutique', 'tirages')}" data-libelle="${c.libelle('boutique')}">${c.media({ nom: 'tirages', alt: 'Tirage d’art d’une enluminure', ratio: '4 / 5', sizes: '120px' })}<span><strong>${c.t('accueil.offrir.tirages')}</strong><span data-prix>${c.t('accueil.offrir.tiragesPrix')}</span></span></a>
        <a class="mini" href="${c.url('boutique', 'marque-pages')}" data-libelle="${c.libelle('boutique')}">${c.media({ nom: 'marque-pages-bleus', alt: 'Marque-pages calligraphiés', ratio: '1 / 1', cadrage: '55% 50%', sizes: '120px' })}<span><strong>${c.t('accueil.offrir.marque')}</strong><span data-prix>${c.t('accueil.offrir.marquePrix')}</span></span></a>
      </li>
    </ul>
    <p data-anime>${c.lien('boutique', { classe: 'bouton bouton--contour', texte: c.t('accueil.offrir.action') })}</p>
  </div>
</section>

<section class="fin" id="fin">
  <div class="conteneur fin-grille">
    <div class="fin-mono" data-effet="monogramme">${monogramme('fin')}</div>
    <div>
      <h2 data-anime="lignes">${c.tb('accueil.fin.titre')}</h2>
      <p data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('commandes', { ancre: 'composer', classe: 'bouton bouton--or', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('contact', { ancre: 'ecrire', classe: 'bouton bouton--contour', texte: c.t('accueil.fin.ecrire') })}
      </p>
      <p class="fin-coord">${c.site.contact.email} · ${c.site.contact.adresse}</p>
    </div>
  </div>
</section>
`;
};

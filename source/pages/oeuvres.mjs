/* Œuvres : ouverture « une œuvre au mur », filtres gardés dans l'adresse, mur d'œuvres jamais recadrées,
   visionneuse avec loupe sur l'or (lien direct par œuvre : #o-<id>), série des oiseaux, œuvre à sa taille réelle. */
import { html, brut } from '../../outils/gabarit.mjs';
import { visuel, carteOeuvre, cartel } from '../gabarits/oeuvre.mjs';
import { monogramme } from '../gabarits/monogramme.mjs';

export const page = { cle: 'oeuvres', fichier: 'oeuvres', imagePartage: 'o-kiwi-800.webp' };

const OISEAUX = ['sterne', 'manchot', 'kookaburra', 'kakariki'];
/* Œuvres entières dont les dimensions sont connues : elles seules se posent au mur. */
const MUR = ['dame', 'moise', 'raphael', 'famille', 'enlumineur', 'francois', 'annonciation', 'armoiries', 'jerusalem', 'cats', 'onlybird', 'parade'];
const cm = (d) => { const m = String(d || '').replace(/environ /, '').match(/([\d,]+)\s*×\s*([\d,]+)/); return m ? [parseFloat(m[1].replace(',', '.')), parseFloat(m[2].replace(',', '.'))] : null; };

export default (c) => {
  const O = c.donnees.oeuvres;
  const parId = Object.fromEntries(O.map((o) => [o.id, o]));
  const cats = ['enluminure', 'calligraphie', 'oiseaux', 'autre'];
  const nb = (k) => O.filter((o) => o.categorie === k).length;
  const premiere = parId.sterne;
  return html`
<section class="ouv ouv--mur" id="debut">
  <div class="ouv-texte">
    <span class="lettrine-or" data-effet="lettrine-or" data-grille="fil" aria-hidden="true"><span>Œ</span></span>
    <p class="surtitre" data-anime>${c.t('oeuvres.tete.surtitre')}</p>
    <h1 data-anime="lignes">${c.t('oeuvres.tete.titre')}</h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime>${c.t('oeuvres.tete.texte')}</p>
    <p data-anime><a class="bouton" href="#galerie" data-action-principale data-survol="magnetique">${c.t('oeuvres.tete.action')}</a></p>
    <p class="ouv-info" data-info-cle><span class="pastille"></span>${O.length} œuvres · ${nb('oiseaux')} oiseaux de Nouvelle-Zélande</p>
  </div>
  <div class="ouv-mur">
    ${visuel(c, { nom: 'grok/oeuvres-mur', alt: c.s('oeuvres.tete.alt'), priorite: true, classe: 'ouv-mur-fond', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' }, 'mur')}
    <div class="ouv-mur-oeuvre" data-iris-centre>
      <div class="or-cadre" data-effet="or-vivant" data-souris>
        ${c.media({ nom: 'or-sterne', alt: 'Sterne arctique, détail : le disque d’or posé à la feuille', ratio: '1500 / 2000', priorite: true, sizes: '(max-width: 760px) 50vw, 22vw' })}
        <span class="or-reflet" aria-hidden="true" style="--masque:url('/assets/images/masque-sterne.png')"><span class="or-bande"></span></span>
      </div>
    </div>
  </div>
</section>

<section class="galerie-oeuvres" id="galerie">
  <div class="conteneur">
    <div class="filtres" data-anime="cascade" role="group" aria-label="${c.s('oeuvres.filtres.titre')}" data-filtres>
      <button type="button" class="filtre" data-filtre="tout" aria-pressed="true">${c.t('oeuvres.filtres.tout')} <span>${O.length}</span></button>
      ${cats.map((k) => html`<button type="button" class="filtre" data-filtre="${k}" aria-pressed="false">${c.t('oeuvres.filtres.' + k)} <span>${nb(k)}</span></button>`)}
    </div>
    <p class="filtres-compte" data-compte aria-live="polite">${c.t('oeuvres.filtres.compte', { n: O.length })}</p>
    <ul class="grille-oeuvres" data-grille-oeuvres>
      ${O.map((o) => html`<li id="o-${o.id}" class="grille-item" data-categorie="${o.categorie}"><button type="button" class="oeuvre-bouton" data-ouvrir="${o.id}" aria-label="${c.s('commun.agrandir')} : ${o.titre}">${carteOeuvre(c, o, { lien: false, sizes: '(max-width: 760px) 46vw, (max-width: 1100px) 30vw, 24vw' })}</button></li>`)}
    </ul>
  </div>
  <script type="application/json" data-oeuvres-json>${brut(JSON.stringify(O.map((o) => ({ id: o.id, titre: o.titre, detail: o.detail, cartel: cartel(o), image: o.image, largeur: Math.max(...((c.donnees.images[o.image] || {}).largeurs || [800])), ratio: o.ratio, dims: cm(o.dimensions) }))).replace(/</g, '\\u003c'))}</script>
</section>

<div class="visionneuse" data-visionneuse data-recouvrement role="dialog" aria-modal="true" aria-label="${c.s('commun.agrandir')}" hidden>
  <div class="visionneuse-image" data-loupe-zone><span class="loupe" data-loupe aria-hidden="true"></span></div>
  <div class="visionneuse-texte">
    <p class="cartel-titre" data-v-titre></p>
    <p class="cartel" data-v-cartel></p>
    <p class="visionneuse-aide"><span class="aide-souris">${c.t('commun.loupe')}</span><span class="aide-tactile">${c.t('commun.loupeTactile')}</span></p>
    <p><a class="bouton bouton--contour" href="#echelle" data-v-mur data-sans-transition>${c.t('oeuvres.echelle.surtitre')}</a></p>
  </div>
  <button type="button" class="v-btn v-fermer" data-v-fermer aria-label="${c.s('commun.fermerVisionneuse')}">×</button>
  <button type="button" class="v-btn v-prec" data-v-prec aria-label="${c.s('commun.precedente')}">‹</button>
  <button type="button" class="v-btn v-suiv" data-v-suiv aria-label="${c.s('commun.suivante')}">›</button>
</div>

<section class="oiseaux" id="oiseaux">
  <div class="conteneur oiseaux-grille">
    <div class="oiseaux-texte">
      <p class="surtitre" data-anime>${c.t('oeuvres.oiseaux.surtitre')}</p>
      <blockquote class="oiseaux-citation" data-anime="mots"><p>« ${c.t('oeuvres.oiseaux.citation')} »</p></blockquote>
      <p data-anime>${c.t('oeuvres.oiseaux.texte')}</p>
      <p data-anime>${c.lien('boutique', { ancre: 'catalogue', params: 'filtre=oiseaux', classe: 'bouton', texte: c.t('oeuvres.oiseaux.action') })}</p>
    </div>
    <ul class="oiseaux-vol" data-anime="cascade">
      ${OISEAUX.map((id, i) => html`<li style="--i:${i}" data-effet="envol" data-envol="${[-40, 30, -20, 50][i]}">${carteOeuvre(c, parId[id], { lien: false, sizes: '(max-width: 760px) 44vw, 20vw' })}</li>`)}
    </ul>
  </div>
</section>

<section class="echelle" id="echelle">
  <div class="conteneur">
    <div class="echelle-tete">
      <div><p class="surtitre" data-anime>${c.t('oeuvres.echelle.surtitre')}</p><h2 data-anime="lignes">${c.tb('oeuvres.echelle.titre')}</h2></div>
      <p data-anime>${c.t('oeuvres.echelle.texte')}</p>
    </div>
    <div class="echelle-corps">
      <div class="echelle-choix" role="radiogroup" aria-label="${c.s('oeuvres.echelle.choisir')}">
        ${MUR.map((id, i) => { const o = parId[id]; const d = cm(o.dimensions); return html`<button type="button" class="echelle-oeuvre" role="radio" aria-checked="${i === 0 ? 'true' : 'false'}" data-mur="${id}" data-l="${d[0]}" data-h="${d[1]}" data-ratio="${o.ratio}" data-src="/assets/images/${o.image}-800.webp">${o.titre}<span>${o.dimensions}</span></button>`; })}
      </div>
      <div class="echelle-scene" data-echelle data-visuel role="img" aria-label="${c.s('oeuvres.echelle.texte')}">
        <div class="echelle-mur" data-effet="voir-au-mur"></div>
        <svg class="echelle-silhouette" viewBox="0 0 60 170" aria-hidden="true"><circle cx="30" cy="12" r="10"/><path d="M14 30 Q30 22 46 30 L50 95 L42 96 L40 168 L32 168 L30 104 L28 168 L20 168 L18 96 L10 95 Z"/></svg>
        <span class="echelle-cote-silhouette">${c.t('oeuvres.echelle.silhouette')}</span>
        <div class="echelle-buffet"><span>${c.t('oeuvres.echelle.buffet')}</span></div>
        <figure class="echelle-oeuvre-posee" data-posee><img src="/assets/images/${parId[MUR[0]].image}-800.webp" alt="${parId[MUR[0]].titre}" data-posee-img><figcaption data-posee-cote>${parId[MUR[0]].dimensions}</figcaption></figure>
      </div>
    </div>
  </div>
</section>

<section class="fin fin--court" id="fin">
  <div class="conteneur fin-court">
    <div class="fin-mono fin-mono--petit" data-effet="monogramme">${monogramme('fin')}</div>
    <h2 data-anime="lignes">${c.t('oeuvres.fin.titre')}</h2>
    <p data-anime>${c.t('oeuvres.fin.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('boutique', { classe: 'bouton bouton--or', texte: c.t('oeuvres.fin.boutique'), attrs: 'data-survol="magnetique"' })} ${c.lien('commandes', { ancre: 'composer', classe: 'bouton bouton--contour', texte: c.t('oeuvres.fin.commander') })}</p>
  </div>
</section>
`;
};

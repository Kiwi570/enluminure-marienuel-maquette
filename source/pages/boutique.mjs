/* Boutique : ouverture « prix en très grand », œuvres en stock filtrables (filtre gardé dans l'adresse), demande d'achat
   en tiroir (une seule source dans le navigateur, suivie entre onglets), tirages d'art, marque-pages à composer. */
import { html } from '../../outils/gabarit.mjs';
import { visuel, oeuvrePosee } from '../gabarits/oeuvre.mjs';
import { monogramme } from '../gabarits/monogramme.mjs';

export const page = { cle: 'boutique', fichier: 'boutique', imagePartage: 'b-lapins-800.webp' };

export default (c) => {
  const B = c.donnees.boutique;
  const cats = ['enluminure', 'calligraphie', 'religieux', 'oiseaux'];
  return html`
<section class="ouv ouv--boutique" id="debut">
  <div class="ouv-texte">
    <span class="lettrine-or" data-effet="lettrine-or" data-grille="fil typo" aria-hidden="true"><span>D</span></span>
    <p class="surtitre" data-anime>${c.t('boutique.tete.surtitre')}</p>
    <h1 data-anime="lignes">${c.t('boutique.tete.titre')}</h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime>${c.t('boutique.tete.texte')}</p>
    <p class="ouv-prix" data-anime data-info-cle><span>${B.length} œuvres en stock</span><strong data-prix>${c.t('boutique.tete.prix')}</strong></p>
    <p data-anime><a class="bouton" href="#catalogue" data-action-principale data-survol="magnetique">${c.t('boutique.tete.action')}</a></p>
  </div>
  <div class="ouv-image">
    ${visuel(c, { nom: 'grok/boutique-ouverture', alt: c.s('boutique.tete.alt'), priorite: true, classe: 'ouv-image-fond', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' }, 'table')}
    <div class="ouv-image-oeuvre ouv-image-oeuvre--cadre oeuvre-pose" data-iris-centre>${c.media({ nom: 'o-lapin', alt: 'Lapin-livre, pigments et or sur papier', ratio: c.donnees.oeuvres.find((o) => o.id === 'lapin').ratio, priorite: true, sizes: '(max-width: 760px) 50vw, 20vw' })}</div>
  </div>
</section>

<section class="catalogue" id="catalogue">
  <div class="conteneur">
    <div class="catalogue-tete">
      <h2 data-anime="lignes">${c.t('boutique.liste.titre')}</h2>
      <div class="filtres" data-anime="cascade" role="group" aria-label="${c.s('boutique.liste.titre')}" data-filtres>
        <button type="button" class="filtre" data-filtre="tout" aria-pressed="true">${c.t('boutique.liste.tout')} <span>${B.length}</span></button>
        ${cats.map((k) => html`<button type="button" class="filtre" data-filtre="${k}" aria-pressed="false">${c.t('boutique.liste.' + k)} <span>${B.filter((b) => b.categorie === k).length}</span></button>`)}
      </div>
    </div>
    <ul class="produits" data-grille-oeuvres>
      ${B.map((b) => html`<li id="b-${b.id}" class="grille-item produit-carte" data-categorie="${b.categorie}">
        ${oeuvrePosee(c, { ...b, detail: false }, { sizes: '(max-width: 760px) 46vw, 24vw' })}
        <p class="produit-titre">${b.titre}</p>
        <p class="produit-ligne">${b.technique}${b.dimensions ? ' · ' + b.dimensions : ''}</p>
        <p class="produit-pied"><span class="produit-prix" data-prix>${b.prix} €</span>
          <button type="button" class="ajouter" data-grille="retour" data-ajouter="${b.id}" data-titre="${b.titre}" data-prix-valeur="${b.prix}" data-image="/assets/images/${b.image}-480.webp" aria-pressed="false"><span class="ajouter-plus" aria-hidden="true">+</span><span data-libelle-ajout="${c.s('boutique.liste.ajouter')}" data-libelle-ajoute="${c.s('boutique.liste.ajoute')}">${c.t('boutique.liste.ajouter')}</span></button></p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="tirages" id="tirages">
  <div class="conteneur bloc-deux-grille">
    ${c.media({ nom: 'tirages', alt: 'Tirage d’art d’une enluminure, posé contre un mur', ratio: '4 / 5', classe: 'bloc-deux-image tirages-image', sizes: '(max-width: 760px) 80vw, 34vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('boutique.tirages.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('boutique.tirages.titre')}</h2>
      <p data-anime>${c.t('boutique.tirages.texte')}</p>
      <p data-anime><button type="button" class="bouton" data-ajouter="tirage" data-titre="Tirage d’art A4 (titre à préciser)" data-prix-valeur="25" data-image="/assets/images/tirages-480.webp">${c.t('boutique.tirages.action')}</button></p>
    </div>
  </div>
</section>

<section class="marque" id="marque-pages">
  <div class="conteneur marque-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('boutique.marque.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('boutique.marque.titre')}</h2>
      <p data-anime>${c.t('boutique.marque.texte')}</p>
      <form class="marque-form" data-marque action="#" novalidate>
        <div class="champ"><label for="mp-prenom">${c.t('boutique.marque.prenom')}</label><input id="mp-prenom" name="prenom" maxlength="14" value="${c.s('boutique.marque.prenomDefaut')}" autocomplete="off"></div>
        <fieldset class="choix"><legend>${c.t('boutique.marque.encre')}</legend>
          <label><input type="radio" name="encre" value="bleu" checked><span>${c.t('boutique.marque.bleu')}</span></label>
          <label><input type="radio" name="encre" value="rouge"><span>${c.t('boutique.marque.rouge')}</span></label>
        </fieldset>
        <fieldset class="choix"><legend>${c.t('boutique.marque.face')}</legend>
          <label><input type="radio" name="face" value="recto" checked><span>${c.t('boutique.marque.recto')} · ${c.t('boutique.marque.prixRecto')}</span></label>
          <label><input type="radio" name="face" value="verso"><span>${c.t('boutique.marque.verso')} · ${c.t('boutique.marque.prixVerso')}</span></label>
        </fieldset>
        <p class="marque-delai" data-marque-delai data-recto="${c.s('boutique.marque.delaiRecto')}" data-verso="${c.s('boutique.marque.delaiVerso')}">Délai : ${c.t('boutique.marque.delaiRecto')}</p>
        <p><button type="button" class="bouton" data-ajouter-marque data-prix-recto="8" data-prix-verso="13">${c.t('boutique.marque.ajouter')}</button></p>
      </form>
    </div>
    <div class="marque-apercu" data-visuel>
      <div class="signet" data-signet data-encre="bleu" data-effet="signet">
        <span class="signet-initiale" data-signet-initiale>J</span><span class="signet-nom" data-signet-nom>oséphine</span>
        <span class="signet-filigrane" aria-hidden="true"></span>
      </div>
      <p class="marque-note">${c.t('boutique.marque.apercu')}</p>
      ${c.media({ nom: 'marque-pages-rouges', alt: 'Vrais marque-pages calligraphiés à l’encre rouge', ratio: '4 / 3', classe: 'marque-photo', sizes: '(max-width: 760px) 80vw, 30vw' })}
    </div>
  </div>
</section>

<section class="envoi" id="envoi">
  <div class="conteneur envoi-grille">
    <div class="fin-mono fin-mono--petit" data-effet="monogramme">${monogramme('fin')}</div>
    <div>
      <h2 data-anime="lignes">${c.t('boutique.envoi.titre')}</h2>
      <p data-anime>${c.t('boutique.envoi.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'ecrire', params: 'sujet=achat', classe: 'bouton bouton--contour', texte: c.t('commun.ecrireLong') })}</p>
    </div>
  </div>
</section>

<button type="button" class="demande-bouton" data-demande-ouvrir aria-controls="demande" aria-expanded="false"><span>${c.t('boutique.demande.bouton')}</span> <span class="demande-nb" data-demande-nb>0</span></button>
<div class="demande" id="demande" data-demande data-recouvrement role="dialog" aria-modal="true" aria-labelledby="demande-titre" hidden>
  <div class="demande-panneau">
    <div class="demande-tete"><h2 id="demande-titre">${c.t('boutique.demande.titre')}</h2><button type="button" class="v-btn" data-demande-fermer aria-label="${c.s('boutique.demande.fermer')}">×</button></div>
    <p class="demande-vide" data-demande-vide>${c.t('boutique.demande.vide')}</p>
    <ul class="demande-liste" data-demande-liste></ul>
    <p class="demande-total"><span>${c.t('boutique.demande.total')}</span> <strong data-demande-total data-prix>0 €</strong></p>
    <p><a class="bouton" href="${c.url('contact', 'ecrire', 'sujet=achat')}" data-libelle="${c.libelle('contact')}" data-demande-envoyer>${c.t('boutique.demande.envoyer')}</a></p>
    <p class="demande-note">${c.t('boutique.demande.note')}</p>
  </div>
</div>
<p class="visuellement-cache" aria-live="polite" data-demande-annonce data-modele="${c.s('boutique.demande.annonce')}"></p>
`;
};

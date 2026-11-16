/* Stages et ateliers : ouverture « grand titre puis date du prochain stage en très grand », agenda (à venir et passés,
   recalculés à la date du jour), stages, interventions, scolaires et Pass Culture, lieux, inscription simulée (?stage=). */
import { html } from '../../outils/gabarit.mjs';
import { visuel, estPasse, prochain } from '../gabarits/oeuvre.mjs';
import { monogramme } from '../gabarits/monogramme.mjs';

export const page = { cle: 'stages', fichier: 'stages', imagePartage: 'atelier-pinceau-800.webp' };

export default (c) => {
  const A = c.donnees.agenda.slice().sort((x, y) => x.debut.localeCompare(y.debut));
  const p = prochain(A);
  const jours = p ? p.dates.replace(/ décembre| novembre| juin| juillet/, '') : '';
  const mois = p ? (p.dates.match(/décembre|novembre|juin|juillet/) || [''])[0] : '';
  return html`
<section class="ouv ouv--date" id="debut">
  <div class="conteneur ouv-date-haut">
    <span class="lettrine-or" data-effet="lettrine-or" data-grille="fil" aria-hidden="true"><span>A</span></span>
    <p class="surtitre" data-anime>${c.t('stages.tete.surtitre')}</p>
    <h1 data-anime="lignes">${c.t('stages.tete.titre')}</h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime>${c.t('stages.tete.texte')}</p>
  </div>
  <div class="bandeau-date" data-iris-centre>
    ${visuel(c, { nom: 'grok/stages-ouverture', alt: c.s('stages.tete.alt'), priorite: true, classe: 'bandeau-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' }, 'table')}
    <div class="conteneur bandeau-contenu" data-prochain-bloc>
      ${p ? html`<p class="bandeau-etiquette">${c.t('stages.tete.prochain')}</p>
      <p class="bandeau-jours" data-info-cle><span>${jours}</span> <em>${mois}</em></p>
      <p class="bandeau-titre">${p.titre} · ${p.lieu}</p>
      <p><a class="bouton bouton--or" href="#inscription" data-action-principale data-sans-transition>${c.t('stages.tete.action')}</a></p>` : html`<p class="bandeau-jours" data-info-cle>${c.t('stages.tete.aucun')}</p><p><a class="bouton bouton--or" href="#inscription" data-action-principale>${c.t('stages.tete.action')}</a></p>`}
    </div>
  </div>
</section>

<section class="agenda" id="agenda">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('stages.agenda.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('stages.agenda.titre')}</h2>
    <ul class="agenda-cartes" data-anime="cascade" data-visuel>
      ${A.map((a) => html`<li class="agenda-carte${estPasse(a) ? ' est-passe' : ''}" id="stage-${a.id}" data-debut="${a.debut}" data-fin="${a.fin}">
        <p class="agenda-carte-date">${a.dates}</p>
        <h3>${a.titre}</h3>
        <p class="agenda-carte-type">${a.type}</p>
        <p>${a.texte}</p>
        <p class="agenda-carte-lieu">${a.lieu}${a.horaires ? ' · ' + a.horaires : ''}${a.places ? ' · ' + a.places : ''}</p>
        <p class="agenda-carte-pied"><span class="agenda-termine">${c.t('stages.agenda.termine')}</span><a class="lien-fleche" href="${c.url('stages', 'inscription', 'stage=' + a.id)}" data-sans-transition>${c.t('stages.agenda.inscrire')}</a></p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="bloc-deux" id="stages">
  <div class="conteneur bloc-deux-grille">
    ${c.media({ nom: 'atelier-eleve', alt: 'Une élève peint son enluminure pendant un atelier', ratio: '3 / 2', cadrage: '60% 40%', classe: 'bloc-deux-image', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('stages.stages.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('stages.stages.titre')}</h2>
      <p data-anime>${c.t('stages.stages.texte')}</p>
      <ul class="puces" data-anime="cascade"><li>${c.t('stages.stages.l1')}</li><li>${c.t('stages.stages.l2')}</li><li>${c.t('stages.stages.l3')}</li></ul>
    </div>
  </div>
</section>

<section class="bloc-deux bloc-deux--inverse" id="interventions">
  <div class="conteneur bloc-deux-grille">
    <div class="bloc-deux-images">
      ${c.media({ nom: 'atelier-louise', alt: 'Le prénom Louise calligraphié et orné pendant un atelier', ratio: '4 / 3', classe: 'bloc-deux-image', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div>
      <p class="surtitre" data-anime>${c.t('stages.interventions.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('stages.interventions.titre')}</h2>
      <p data-anime>${c.t('stages.interventions.texte')}</p>
      <p data-anime class="texte-doux">${c.t('stages.interventions.publics')}</p>
      <p data-anime class="texte-doux">${c.t('stages.interventions.frais')}</p>
      <p data-anime><a class="bouton bouton--contour" href="#inscription" data-sans-transition data-choisir-stage="autre">${c.t('stages.interventions.action')}</a></p>
    </div>
  </div>
</section>

<section class="scolaires" id="scolaires">
  <div class="conteneur scolaires-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('stages.scolaires.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('stages.scolaires.titre')}</h2>
      <p data-anime>${c.t('stages.scolaires.texte')}</p>
      <p data-anime class="texte-doux">${c.t('stages.scolaires.zone')}</p>
      <p data-anime><a class="bouton" href="#inscription" data-sans-transition data-choisir-stage="autre">${c.t('stages.scolaires.action')}</a></p>
    </div>
    <div class="pass" data-anime>
      ${c.media({ nom: 'atelier-dragon', alt: 'Un dragon enluminé par un enfant pendant un atelier scolaire', ratio: '4 / 3', classe: 'pass-image', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-fx="zoom"' })}
      <p class="pass-titre">${c.t('stages.scolaires.pass')}</p>
      <p class="pass-prix" data-prix>20 à 25 € <span>par élève</span></p>
      <p>${c.t('stages.scolaires.passT')}</p>
    </div>
  </div>
</section>

<section class="passe" id="passe">
  <div class="conteneur passe-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('stages.passe.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('stages.passe.titre')}</h2>
    </div>
    <ol class="passe-liste" data-anime="cascade" data-visuel>
      <li>${c.t('stages.passe.l1')}</li><li>${c.t('stages.passe.l2')}</li><li>${c.t('stages.passe.l3')}</li><li>${c.t('stages.passe.l4')}</li>
    </ol>
  </div>
</section>

<section class="inscription" id="inscription">
  <div class="conteneur inscription-grille">
    <div>
      <div class="fin-mono fin-mono--petit" data-effet="monogramme">${monogramme('fin')}</div>
      <p class="surtitre">${c.t('stages.inscription.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('stages.inscription.titre')}</h2>
      <p>${c.t('stages.inscription.texte')}</p>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate>
      <div class="champ"><label for="i-nom">${c.t('stages.inscription.nom')}</label><input id="i-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="i-email">${c.t('stages.inscription.email')}</label><input id="i-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="i-stage">${c.t('stages.inscription.stage')}</label>
        <select id="i-stage" name="stage">${A.filter((a) => !estPasse(a)).map((a) => html`<option value="${a.id}">${a.titre} · ${a.dates}</option>`)}<option value="autre">${c.t('stages.inscription.autre')}</option></select></div>
      <div class="champ"><label for="i-message">${c.t('stages.inscription.message')}</label><textarea id="i-message" name="message" rows="4"></textarea></div>
      <p class="mention-donnees">${c.t('stages.inscription.donnees')}</p>
      <button type="submit" class="bouton">${c.t('stages.inscription.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>
`;
};

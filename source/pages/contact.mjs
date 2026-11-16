/* Contact : ouverture « l'écritoire » (grande enveloppe et lettrine), formulaire simulé prérempli (?sujet=, demande
   d'achat ou commande composée), coordonnées et plan simplifié de Valence, dons de matériaux. */
import { html } from '../../outils/gabarit.mjs';
import { visuel } from '../gabarits/oeuvre.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'marie-archives-800.webp' };

export default (c) => html`
<section class="ouv ouv--ecritoire" id="debut">
  ${visuel(c, { nom: 'grok/contact-ouverture', alt: c.s('contact.tete.alt'), priorite: true, classe: 'ouv-plein-fond', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' }, 'table')}
  <div class="conteneur ouv-ecritoire-carte">
    <span class="lettrine-or" data-effet="lettrine-or" data-grille="fil typo" aria-hidden="true" data-iris-centre><span>É</span></span>
    <p class="surtitre" data-anime>${c.t('contact.tete.surtitre')}</p>
    <h1 data-anime="lignes">${c.t('contact.tete.titre')}</h1>
    <p class="masque-ecran-tres-bas" data-anime>${c.t('contact.tete.texte')}</p>
    <p data-anime><a class="bouton" href="#ecrire" data-action-principale data-sans-transition data-survol="magnetique">${c.t('contact.tete.action')}</a></p>
    <p class="ouv-info" data-info-cle><span class="pastille"></span>${c.site.contact.email}</p>
  </div>
</section>

<section class="ecrire" id="ecrire">
  <div class="conteneur ecrire-grille">
    <form data-formulaire class="formulaire" action="#" novalidate data-contact>
      <h2 data-anime="lignes">${c.t('contact.form.titre')}</h2>
      <p class="texte-doux">${c.t('contact.form.texte')}</p>
      <div class="champ"><label for="f-nom">${c.t('contact.form.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="f-email">${c.t('contact.form.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-sujet">${c.t('contact.form.sujet')}</label>
        <select id="f-sujet" name="sujet">
          <option value="commande">${c.t('contact.form.sCommande')}</option>
          <option value="achat">${c.t('contact.form.sAchat')}</option>
          <option value="stage">${c.t('contact.form.sStage')}</option>
          <option value="intervention">${c.t('contact.form.sIntervention')}</option>
          <option value="scolaire">${c.t('contact.form.sScolaire')}</option>
          <option value="don">${c.t('contact.form.sDon')}</option>
          <option value="autre" selected>${c.t('contact.form.sAutre')}</option>
        </select></div>
      <div class="champ"><label for="f-message">${c.t('contact.form.message')}</label><textarea id="f-message" name="message" rows="7" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.form.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
    <aside class="atelier-carte">
      <h2 class="h3">${c.t('contact.atelier.titre')}</h2>
      <dl class="coord">
        <div><dt>${c.t('contact.atelier.adresse')}</dt><dd>${c.site.contact.adresse}</dd></div>
        <div><dt>${c.t('contact.atelier.email')}</dt><dd><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></dd></div>
        <div><dt>Facebook</dt><dd><a href="${c.site.contact.facebook}" target="_blank" rel="noopener">enluminuremarienuel</a></dd></div>
      </dl>
      <p class="texte-doux">${c.t('contact.atelier.courrier')}</p>
      <figure class="plan" data-visuel role="img" aria-label="${c.s('contact.atelier.carteAlt')}">
        <svg viewBox="0 0 400 300" aria-hidden="true" data-fx="trace">
          <path class="plan-rhone" data-fx-trait d="M150 -10 C 130 60, 175 110, 150 170 S 120 260, 150 320"/>
          <path class="plan-route" data-fx-trait d="M210 0 C 220 80, 214 160, 230 300"/>
          <path class="plan-route" data-fx-trait d="M160 140 C 220 150, 300 136, 410 150"/>
          <circle class="plan-point-halo" cx="246" cy="128" r="22"/><circle class="plan-point" cx="246" cy="128" r="8"/>
          <text class="plan-texte plan-texte--rhone" x="96" y="250">Rhône</text><text class="plan-texte" x="276" y="112">L’atelier</text>
        </svg>
        <figcaption>${c.t('contact.atelier.carte')}</figcaption>
      </figure>
    </aside>
  </div>
</section>

<section class="dons" id="dons">
  <div class="conteneur bloc-deux-grille">
    ${c.media({ nom: 'pigments-pots', alt: 'Petits pots de pigments de l’atelier : ocre jaune, vert, rouge et blanc', ratio: '2000 / 954', classe: 'bloc-deux-image', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('contact.dons.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('contact.dons.titre')}</h2>
      <p data-anime>${c.t('contact.dons.texte')}</p>
      <ul class="puces" data-anime="cascade"><li>${c.t('contact.dons.l1')}</li><li>${c.t('contact.dons.l2')}</li><li>${c.t('contact.dons.l3')}</li><li>${c.t('contact.dons.l4')}</li></ul>
      <p data-anime><a class="bouton bouton--contour" href="${c.url('contact', 'ecrire', 'sujet=don')}" data-sans-transition>${c.t('contact.dons.action')}</a></p>
    </div>
  </div>
</section>
`;

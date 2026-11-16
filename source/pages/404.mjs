/* Page introuvable : une goutte d'encre sur le parchemin. Une seule version (langue par défaut). */
import { html } from '../../outils/gabarit.mjs';
import { visuel } from '../gabarits/oeuvre.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${visuel(c, { nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '100vw' }, 'encre')}
  <div class="conteneur introuvable-texte">
    <span class="lettrine-or" data-effet="lettrine-or" data-grille="fil" aria-hidden="true" data-iris-centre><span>4</span></span>
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p data-anime class="introuvable-actions">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('oeuvres', { classe: 'bouton bouton--contour', texte: c.t('introuvable.oeuvres') })}</p>
  </div>
</section>
`;

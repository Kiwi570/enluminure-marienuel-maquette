/* Composants communs aux pages : œuvre posée (jamais recadrée : ratio d'origine), cartel, image générée avec repli
   dessiné en code tant qu'elle n'est pas reçue, agenda (à venir / passés, recalculé par le JavaScript), reflet d'or. */
import { html, brut } from '../../outils/gabarit.mjs';
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const racine = join(dirname(fileURLToPath(import.meta.url)), '../..');
export const imageExiste = (nom) => {
  const d = join(racine, 'assets/images', dirname(nom));
  const b = nom.split('/').pop();
  return existsSync(d) && readdirSync(d).some((f) => f.startsWith(b + '-') && f.endsWith('.webp'));
};

/* Image : la vraie si elle existe, sinon un visuel de parchemin dessiné en code (jamais un cadre vide). */
export function visuel(c, opts, motif = 'reglure') {
  if (imageExiste(opts.nom)) return c.media(opts);
  return html`<figure class="media visuel-attente visuel-${motif} ${opts.classe || ''}" data-visuel role="img" aria-label="${opts.alt || ''}"${brut(opts.attrs ? ' ' + opts.attrs : '')}${opts.ratio ? brut(` style="aspect-ratio:${opts.ratio}"`) : ''}><span></span></figure>`;
}

export const cartel = (o) => [o.technique, o.support ? `sur ${o.support.toLowerCase()}` : '', o.dimensions].filter(Boolean).join(' · ').replace(' · sur ', ' sur ');

/* Œuvre posée sur le vélin, avec son ombre : jamais recadrée. */
export function oeuvrePosee(c, o, { sizes = '(max-width: 760px) 50vw, 25vw', classe = '', attrs = '', priorite = false } = {}) {
  return html`<div class="oeuvre-pose ${classe}" style="--r:${o.ratio}">${c.media({ nom: o.image, alt: `${o.titre}${o.detail ? ', ' + c.s('commun.detail') : ''}`, sizes, priorite, attrs, ratio: o.ratio })}</div>`;
}

export function carteOeuvre(c, o, { lien = true, sizes, attrs = '' } = {}) {
  const corps = html`${oeuvrePosee(c, o, { sizes })}
    <span class="cartel"><span class="cartel-titre">${o.titre}${o.detail ? html` <span class="cartel-detail">(${c.s('commun.detail')})</span>` : ''}</span><span class="cartel-ligne">${cartel(o)}</span></span>`;
  return lien
    ? html`<a class="oeuvre-carte" href="${c.url('oeuvres', 'o-' + o.id)}" data-libelle="${c.libelle('oeuvres')}"${brut(attrs ? ' ' + attrs : '')}>${corps}</a>`
    : html`<div class="oeuvre-carte"${brut(attrs ? ' ' + attrs : '')}>${corps}</div>`;
}

/* Agenda : le gabarit range d'après la date de génération ; le JavaScript refait le tri à la date du jour. */
const auj = new Date().toISOString().slice(0, 10);
export const estPasse = (a) => a.fin < auj;
/* À venir d'abord (par date), puis les stages passés, du plus récent au plus ancien. */
export const ordreAgenda = (A) => [...A.filter((a) => !estPasse(a)).sort((x, y) => x.debut.localeCompare(y.debut)), ...A.filter(estPasse).sort((x, y) => y.debut.localeCompare(x.debut))];
export const prochain = (agenda) => agenda.filter((a) => !estPasse(a) && !a.mois).sort((x, y) => x.debut.localeCompare(y.debut))[0];

/* Reflet d'or : calque masqué par la forme de la feuille d'or de l'œuvre (masque calculé sur la photo). */
export const reflet = (masque) => html`<span class="or-reflet" aria-hidden="true" style="--masque:url('/assets/images/${masque}')"><span class="or-bande"></span></span>`;

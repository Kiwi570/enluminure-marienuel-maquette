/* Monogramme MN de l'atelier, redessiné en vecteur d'après le logo du client (ovale lapis, lettres d'or, fleurons rouges).
   Les lettres d'or sont révélées par un masque de traits épais (.mono-trait, pathLength 1) : le JavaScript les « écrit »
   à la plume (stroke-dashoffset de 1 à 0). Sans JavaScript, les traits sont pleins : le monogramme est entier. */
import { html, brut } from '../../outils/gabarit.mjs';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ici = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(ici, '../../assets/images/logo.svg'), 'utf8');
const OR = svg.match(/<path d="([^"]+)" fill="#ffd54f"/)[1];
const FLEURONS = svg.match(/<path d="([^"]+)" fill="#9a3328"/)[1];

export const TRAITS = [
  'M197,570 L197,203',
  'M205,200 L357,352 Q380,375 362,400 Q343,418 320,400 Q302,380 318,356',
  'M356,320 L472,204 L478,214 L478,434',
  'M568,434 L568,200',
  'M577,200 L842,462 Q872,494 862,536 Q848,572 818,568 Q798,560 800,538 L800,456',
  'M805,298 L805,414',
];

export function monogramme(id, { classe = '', attrs = '' } = {}) {
  return html`<svg class="mono ${classe}" viewBox="0 0 1070 740" role="img" aria-label="Monogramme MN de l’atelier"${brut(attrs ? ' ' + attrs : '')}>
  <defs><mask id="${id}-m" maskUnits="userSpaceOnUse" x="0" y="0" width="1070" height="740">${brut(TRAITS.map((d, i) => `<path class="mono-trait" style="--i:${i}" d="${d}" pathLength="1" fill="none" stroke="#fff" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>`).join(''))}</mask>
  <linearGradient id="${id}-or" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd54f"/><stop class="mono-eclat" offset=".5" stop-color="#fff6cf"/><stop offset="1" stop-color="#f1c232"/></linearGradient></defs>
  <ellipse class="mono-bord" cx="535" cy="370" rx="518" ry="354" fill="#9a3328"/>
  <ellipse cx="535" cy="370" rx="508" ry="344" fill="#fffaf0"/>
  <ellipse class="mono-fond" cx="535" cy="370" rx="500" ry="336" fill="#1d4f9c"/>
  <path class="mono-or" d="${OR}" fill="url(#${id}-or)" mask="url(#${id}-m)"/>
  <path class="mono-fleurons" d="${FLEURONS}" fill="#9a3328"/>
</svg>`;
}

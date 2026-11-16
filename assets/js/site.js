/* Effets propres à l'atelier (le socle gère ouverture, voile, en-tête, menu, apparitions, compteurs, défilement).
   Effets du plan (data-effet) :
   - monogramme : le monogramme MN s'écrit à la plume puis se dore (intro, appel final) ;
   - or-vivant : un reflet de lumière glisse sur la feuille d'or des vraies œuvres (masque calculé sur la photo),
     au défilement et sous la souris ;
   - lettrine-or : lettrine sur feuille d'or des ouvertures de pages, posée à l'arrivée (assiette, or, lettre peinte), reflet au défilement ;
   - pigments : chaque pigment passe de la poudre à l'aplat de couleur ;
   - manuscrit : la reliure du manuscrit s'ouvre sur sa première page ;
   - voir-au-mur : une œuvre posée à sa taille réelle (page Œuvres) ;
   plus colonnes (le mur des œuvres glisse à trois vitesses), lapin (il sort de derrière la photo) et le mot « illuminer » que la lumière de l'or traverse. */
import { demarrer, versObjet, quand } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ordi = () => window.matchMedia('(min-width: 900px)').matches;
const souris = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- or-vivant : reflet sur la feuille d'or ---------- */
function orVivant() {
  $$('.or-cadre').forEach((cadre) => {
    const reflet = cadre.querySelector('.or-reflet');
    if (!reflet) return;
    let bande = reflet.querySelector('.or-bande');
    if (!bande) { bande = document.createElement('span'); bande.className = 'or-bande'; reflet.appendChild(bande); }
    const poser = gsap.quickSetter(bande, 'x', '%');
    let defil = 0, pointe = null, pos = -120, actif = false;
    /* Lissage piloté par le temps : la boucle s'ajoute au ticker pendant le mouvement et s'en retire à l'arrêt. */
    const tic = (t, dt) => {
      const cible = pointe == null ? -120 + defil * 360 : pointe;
      const k = 1 - Math.pow(0.0025, (dt || 16) / 1000);
      pos += (cible - pos) * k;
      poser(pos);
      if (Math.abs(cible - pos) < 0.05) { pos = cible; poser(pos); gsap.ticker.remove(tic); actif = false; }
    };
    const relancer = () => { if (!actif) { actif = true; gsap.ticker.add(tic); } };
    cadre._orTic = { relancer, set defil(v) { defil = v; } };
    ST().create({ trigger: cadre, start: 'top bottom', end: 'bottom top', onUpdate: (s) => { defil = s.progress; relancer(); } });
    if (souris()) {
      cadre.addEventListener('pointermove', (e) => {
        const r = cadre.getBoundingClientRect();
        pointe = -110 + ((e.clientX - r.left) / r.width) * 300;
        relancer();
      });
      cadre.addEventListener('pointerleave', () => { pointe = null; relancer(); });
    }
    poser(-120 + 0 * 360);
  });
}
/* Un reflet complet sur l'œuvre d'ouverture, à la fin de l'intro. */
function eclatOuverture(cadre, delai = 0) {
  const bande = cadre && cadre.querySelector('.or-bande');
  if (!bande) return;
  gsap.fromTo(bande, { xPercent: 0, x: '-120%' }, { x: '240%', duration: 1.4, ease: 'power2.inOut', delay: delai,
    onComplete: () => { gsap.set(bande, { x: '-120%' }); if (cadre._orTic) cadre._orTic.relancer(); } });
}

/* Invitation : tant que le visiteur n'a pas bougé, un reflet repasse sur l'or de l'œuvre d'ouverture toutes les 4 s
   (seulement quand elle est à l'écran) ; au premier geste (souris, toucher, molette, clavier), c'est fini pour de bon. */
function invitation() {
  const cadre = document.querySelector('.heros-oeuvre .or-cadre');
  if (!cadre || invitation.fait) return;
  invitation.fait = true;
  let visible = true, fini = false;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(cadre);
  const jouer = () => { if (!fini && visible && !document.hidden) eclatOuverture(cadre); };
  const premier = setTimeout(jouer, 1500);
  const minuterie = setInterval(jouer, 3600);
  const stop = () => { fini = true; clearTimeout(premier); clearInterval(minuterie); ['pointermove', 'touchstart', 'wheel', 'keydown'].forEach((t) => window.removeEventListener(t, stop)); };
  setTimeout(() => ['pointermove', 'touchstart', 'wheel', 'keydown'].forEach((t) => window.addEventListener(t, stop, { passive: true })), 600);
}

/* ---------- monogramme : écrit à la plume au défilement (appel final) ---------- */
function monogrammeFin() {
  $$('.fin-mono').forEach((bloc) => {
    const traits = $$('.mono-trait', bloc), fleurons = bloc.querySelector('.mono-fleurons');
    const tl = gsap.timeline({ scrollTrigger: { trigger: bloc, start: 'top 85%', end: 'center 45%', scrub: 0.6 } });
    tl.fromTo(bloc, { scale: 0.9, rotate: -4 }, { scale: 1, rotate: 0, duration: 1, ease: 'none' }, 0);
    traits.forEach((t, i) => tl.fromTo(t, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.32, ease: 'none' }, 0.05 + i * 0.1));
    if (fleurons) tl.fromTo(fleurons, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.25, ease: 'back.out(2)' }, 0.72);
  });
}

/* ---------- colonnes : le mur des œuvres glisse à trois vitesses ---------- */
function colonnes() {
  $$('.mur-col').forEach((col) => {
    const v = parseFloat(col.dataset.vitesse || '0');
    const amp = () => (ordi() ? 520 : 280) * v;
    gsap.fromTo(col, { y: () => -amp() }, { y: () => amp(), ease: 'none',
      scrollTrigger: { trigger: col.parentElement, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
  });
}

/* ---------- pigments : de la poudre à l'aplat ---------- */
function pigments() {
  const liste = document.querySelector('.pigments-liste');
  if (!liste) return;
  const items = $$('.pigment', liste);
  const tl = gsap.timeline({ scrollTrigger: { trigger: liste, start: 'top 88%', end: 'bottom 45%', scrub: 0.5 } });
  items.forEach((li, i) => {
    const aplat = li.querySelector('.pigment-aplat'), poudre = li.querySelector('.pigment-poudre');
    tl.fromTo(aplat, { scale: 0.35, opacity: 0, rotate: -40 }, { scale: 1, opacity: 1, rotate: 0, duration: 0.5, ease: 'power2.out' }, i * 0.12)
      .fromTo(poudre, { scale: 1, rotate: 0 }, { scale: 0.86, rotate: 50, duration: 0.5, ease: 'none' }, i * 0.12);
  });
}

/* ---------- manuscrit : la reliure s'ouvre ---------- */
function manuscrit() {
  const sec = document.querySelector('.manuscrit');
  const couv = sec && sec.querySelector('.livre-couverture');
  if (!couv) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    gsap.fromTo(couv, { rotateY: 0 }, { rotateY: -168, ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true } });
  });
  mm.add('(max-width: 899px)', () => {
    gsap.fromTo(couv, { rotateY: 0 }, { rotateY: -168, ease: 'none',
      scrollTrigger: { trigger: sec.querySelector('.livre'), start: 'top 75%', end: 'bottom 35%', scrub: 0.6 } });
  });
}

/* ---------- le métier : les deux mots s'effacent en s'écartant ---------- */
function motsMetier() {
  const sec = document.querySelector('.metier'), mots = sec && sec.querySelector('.metier-mots');
  if (!mots) return;
  gsap.fromTo(mots, { opacity: 1 }, { opacity: 0, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: '45% top', scrub: true } });
}

/* ---------- lapin : il sort de derrière la photo, les oreilles frémissent ---------- */
function lapin() {
  const l = document.querySelector('.lapin');
  if (!l) return;
  gsap.fromTo(l, { yPercent: 70, rotate: -6 }, { yPercent: 0, rotate: 0, ease: 'power2.out',
    scrollTrigger: { trigger: l.parentElement, start: 'center bottom', end: 'bottom 70%', scrub: 0.5 } });
  const oreilles = $$('.lapin-oreille', l);
  l.addEventListener('pointerenter', () => gsap.fromTo(oreilles, { rotate: 0 }, { rotate: (i) => (i ? 14 : -10), duration: 0.18, yoyo: true, repeat: 3, ease: 'sine.inOut' }));
}

/* ---------- lettrine-or : reflet au défilement ---------- */
function lettrines() {
  $$('.lettrine-or').forEach((el) => {
    gsap.fromTo(el, { '--eclat': '-140%', y: 0 }, { '--eclat': '320%', y: -14, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 95%', end: 'bottom top', scrub: 0.5 } });
  });
}

/* ---------- lettrine posée à l'arrivée (assiette, feuille d'or, lettre peinte) et mot « illuminer » ---------- */
const arriveeAnimee = () => gsap && ['intro', 'voile'].includes(document.documentElement.dataset.arrivee) && !document.documentElement.classList.contains('secours');
function preparerLettrine() {
  const L = document.querySelector('#debut .lettrine-or');
  if (!L || !arriveeAnimee()) return;
  L.classList.add('a-poser');
  setTimeout(() => finirLettrine(L), 6000);
}
function finirLettrine(L = document.querySelector('#debut .lettrine-or')) {
  if (!L || !L.classList.contains('a-poser')) return;
  L.classList.remove('a-poser'); L.style.removeProperty('--pose');
  if (gsap) gsap.set(L.firstElementChild, { clearProps: 'clipPath' });
}
function poserLettrine() {
  const L = document.querySelector('#debut .lettrine-or.a-poser');
  if (!L) return;
  gsap.timeline({ onComplete: () => finirLettrine(L) })
    .fromTo(L, { '--pose': 0 }, { '--pose': 1, duration: 0.6, ease: 'power2.inOut' }, 0)
    .fromTo(L.firstElementChild, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power2.out' }, 0.42)
    .fromTo(L, { '--eclat': '-140%' }, { '--eclat': '320%', duration: 0.8, ease: 'power2.inOut' }, 0.8);
}
function illuminer() {
  const em = document.querySelector('.heros-titre em');
  if (!em || !gsap || em.classList.contains('illumine')) return;
  em.classList.add('illumine');
  gsap.fromTo(em, { '--lumiere': '100%' }, { '--lumiere': '0%', duration: 1.5, ease: 'sine.inOut', onComplete: () => { em.classList.remove('illumine'); em.style.removeProperty('--lumiere'); } });
}

/* ---------- agenda : à venir et passés, calculés à la date du jour (heure de Valence) ---------- */
function agenda() {
  const auj = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Paris' }).format(new Date());
  $$('[data-fin]').forEach((li) => li.classList.toggle('est-passe', li.dataset.fin < auj));
  /* À venir d'abord, par date ; les stages passés ensuite. */
  $$('.agenda-cartes, .agenda-court').forEach((ul) => {
    const L = $$(':scope > [data-fin]', ul);
    const cle = (li) => (li.classList.contains('est-passe') ? '1' + (9e7 - +li.dataset.debut.replace(/-/g, '')) : '0' + li.dataset.debut);
    L.sort((a, b) => cle(a).localeCompare(cle(b))).forEach((li) => ul.appendChild(li));
  });
}


/* ===================== Pages intérieures ===================== */
const lireJSON = (cle, defaut) => { try { const v = JSON.parse(localStorage.getItem(cle) || 'null'); return v ?? defaut; } catch { try { localStorage.removeItem(cle); } catch {} return defaut; } };
const ecrireJSON = (cle, v) => { try { localStorage.setItem(cle, JSON.stringify(v)); } catch {} };
const rafraichir = () => { if (ST()) requestAnimationFrame(() => ST().refresh()); };
const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/ /g, ' ') + ' €';

/* Filtres (Œuvres, Boutique) : gardés dans l'adresse (?filtre=), fondu sans vide, positions recalculées. */
function filtres() {
  $$('[data-filtres]').forEach((groupe) => {
    const grille = groupe.closest('section').querySelector('[data-grille-oeuvres]');
    const compte = groupe.closest('section').querySelector('[data-compte]');
    if (!grille) return;
    const items = $$('.grille-item', grille);
    const appliquer = (f, maj = true) => {
      $$('[data-filtre]', groupe).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === f)));
      const n = items.filter((li) => f === 'tout' || li.dataset.categorie === f).length;
      grille.style.minHeight = grille.offsetHeight + 'px';
      items.forEach((li) => li.classList.add('sort'));
      setTimeout(() => {
        items.forEach((li) => { li.classList.toggle('masque', !(f === 'tout' || li.dataset.categorie === f)); li.classList.remove('sort'); });
        grille.style.minHeight = '';
        if (compte) compte.textContent = `${n} œuvre${n > 1 ? 's' : ''}`;
        rafraichir();
      }, 220);
      if (maj) { const u = new URL(location.href); if (f === 'tout') u.searchParams.delete('filtre'); else u.searchParams.set('filtre', f); history.replaceState(history.state, '', u); }
    };
    groupe.addEventListener('click', (e) => { const b = e.target.closest('[data-filtre]'); if (b) appliquer(b.dataset.filtre); });
    const depart = new URLSearchParams(location.search).get('filtre');
    if (depart && groupe.querySelector(`[data-filtre="${depart}"]`)) appliquer(depart, false);
  });
}

/* Visionneuse des œuvres : lien direct #o-<id>, clavier, glissement, loupe sur l'or. */
function visionneuse() {
  const v = document.querySelector('[data-visionneuse]');
  const json = document.querySelector('[data-oeuvres-json]');
  if (!v || !json) return;
  const O = JSON.parse(json.textContent);
  const zoneImg = v.querySelector('[data-loupe-zone]'); const img = document.createElement('img'); img.alt = ''; const titre = v.querySelector('[data-v-titre]'), cart = v.querySelector('[data-v-cartel]');
  const loupe = v.querySelector('[data-loupe]'), zone = v.querySelector('[data-loupe-zone]'), mur = v.querySelector('[data-v-mur]');
  let i = 0, retour = null;
  const visibles = () => O.filter((o) => { const li = document.getElementById('o-' + o.id); return li && !li.classList.contains('masque'); });
  const montrer = (id) => {
    const L = visibles(); i = Math.max(0, L.findIndex((o) => o.id === id)); const o = L[i] || O[0];
    img.src = `/assets/images/${o.image}-${o.largeur || 800}.webp`;
    if (!img.isConnected) zoneImg.prepend(img);
    img.alt = o.titre; titre.textContent = o.titre + (o.detail ? ' (détail)' : ''); cart.textContent = o.cartel;
    mur.hidden = !o.dims || o.detail; mur.dataset.oeuvre = o.id;
    loupe.style.backgroundImage = `url(${img.src})`;
    history.replaceState(history.state, '', '#o-' + o.id);
  };
  const ouvrir = (id, declencheur) => {
    retour = declencheur || document.activeElement; v.hidden = false; montrer(id);
    document.documentElement.classList.add('defilement-bloque'); v.querySelector('[data-v-fermer]').focus({ preventScroll: true });
  };
  const fermer = () => {
    v.hidden = true; document.documentElement.classList.remove('defilement-bloque'); loupe.classList.remove('active');
    history.replaceState(history.state, '', location.pathname + location.search); if (retour) retour.focus({ preventScroll: true });
  };
  const pas = (d) => { const L = visibles(); i = (i + d + L.length) % L.length; montrer(L[i].id); };
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-ouvrir]'); if (b) ouvrir(b.dataset.ouvrir, b); });
  v.querySelector('[data-v-fermer]').addEventListener('click', fermer);
  v.querySelector('[data-v-prec]').addEventListener('click', () => pas(-1));
  v.querySelector('[data-v-suiv]').addEventListener('click', () => pas(1));
  mur.addEventListener('click', () => { const id = mur.dataset.oeuvre; fermer(); choisirMur(id); });
  v.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fermer(); else if (e.key === 'ArrowLeft') pas(-1); else if (e.key === 'ArrowRight') pas(1);
    else if (e.key === 'Tab') { const f = $$('button:not([hidden]), a:not([hidden])', v).filter((x) => x.offsetParent); const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
  });
  let x0 = null; v.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  v.addEventListener('touchend', (e) => { if (x0 == null) return; const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) pas(d < 0 ? 1 : -1); x0 = null; });
  const placer = (cx, cy) => {
    const r = img.getBoundingClientRect(), z = zone.getBoundingClientRect();
    if (cx < r.left || cx > r.right || cy < r.top || cy > r.bottom) { loupe.classList.remove('active'); return; }
    const k = 2.6, px = (cx - r.left) / r.width, py = (cy - r.top) / r.height;
    loupe.classList.add('active');
    loupe.style.left = (cx - z.left - 95) + 'px'; loupe.style.top = (cy - z.top - 95) + 'px';
    loupe.style.backgroundSize = `${r.width * k}px ${r.height * k}px`;
    loupe.style.backgroundPosition = `${-(px * r.width * k - 95)}px ${-(py * r.height * k - 95)}px`;
  };
  zone.addEventListener('pointermove', (e) => placer(e.clientX, e.clientY));
  zone.addEventListener('pointerleave', () => loupe.classList.remove('active'));
  zone.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') placer(e.clientX, e.clientY); });
  const ouvrirHash = () => {
    const m = location.hash.match(/^#o-([\w-]+)$/);
    if (!m || !O.some((o) => o.id === m[1])) return;
    /* L'œuvre d'abord à sa place sous l'en-tête (même si le défilement d'arrivée n'a pas encore eu lieu), puis la visionneuse. */
    const li = document.getElementById('o-' + m[1]);
    if (li && Math.abs(li.getBoundingClientRect().top - (parseFloat(getComputedStyle(li).scrollMarginTop) || 0)) > 4) li.scrollIntoView({ block: 'start' });
    setTimeout(() => ouvrir(m[1]), 120);
  };
  quand('pret', () => setTimeout(ouvrirHash, 450));
}

/* Voir au mur : l'œuvre à sa taille réelle. */
let choisirMur = () => {};
function voirAuMur() {
  const scene = document.querySelector('[data-echelle]');
  if (!scene) return;
  const fig = scene.querySelector('[data-posee]'), im = scene.querySelector('[data-posee-img]'), cote = scene.querySelector('[data-posee-cote]');
  const boutons = $$('[data-mur]');
  const poser = (b) => {
    boutons.forEach((x) => x.setAttribute('aria-checked', String(x === b)));
    fig.style.setProperty('--l', b.dataset.l); fig.style.setProperty('--h', b.dataset.h);
    im.src = b.dataset.src; im.alt = b.textContent.trim(); cote.textContent = b.querySelector('span').textContent;
    gsap.fromTo(fig, { y: -18, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
  };
  boutons.forEach((b) => b.addEventListener('click', () => poser(b)));
  choisirMur = (id) => { const b = boutons.find((x) => x.dataset.mur === id); if (b) poser(b); document.getElementById('echelle').scrollIntoView({ behavior: 'smooth' }); };
  poser(boutons[0]);
  gsap.fromTo(scene.querySelector('.echelle-mur'), { opacity: 0.35, xPercent: -8 }, { opacity: 1, xPercent: 8, ease: 'none', scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
}

/* Petits mouvements au défilement : oiseaux en vol, signet, feuille du récapitulatif. */
function flottants() {
  $$('[data-envol]').forEach((el) => gsap.fromTo(el, { y: parseFloat(el.dataset.envol) * 0.5 }, { y: -parseFloat(el.dataset.envol) * 0.5, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.5 } }));
  $$('[data-effet="signet"], [data-effet="feuille"]').forEach((el) => gsap.fromTo(el, { rotate: -3, y: 16 }, { rotate: 1.5, y: -10, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 } }));
}

/* Onglets des occasions (flèches du clavier). */
function onglets() {
  const liste = document.querySelector('[data-onglets]');
  if (!liste) return;
  const tabs = $$('[role="tab"]', liste);
  const activer = (t, focus) => {
    tabs.forEach((x) => { const on = x === t; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    if (focus) t.focus(); rafraichir();
  };
  tabs.forEach((t, i) => { t.addEventListener('click', () => activer(t)); t.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') activer(tabs[(i + 1) % tabs.length], true); if (e.key === 'ArrowLeft') activer(tabs[(i - 1 + tabs.length) % tabs.length], true); }); });
}

/* Composeur : prix de départ (site actuel) et date limite (trois mois, deux pour les armoiries). */
function composeur() {
  const f = document.querySelector('[data-composeur]');
  if (!f) return;
  const R = document.querySelector('[data-recap]');
  const sel = f.querySelector('#cp-occasion'), date = f.querySelector('#cp-date');
  const PRIX = { lettrine: 120, page: 150, armoiries: 150 }, RELIGIEUX = { lettrine: 90, page: 140, armoiries: 150 };
  const val = (n) => (f.querySelector(`input[name="${n}"]:checked`) || {}).value;
  const fmt = (d) => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const maj = () => {
    const format = val('format'), support = val('support'), or = val('or'), occ = sel.value;
    const prix = (occ === 'religieux' ? RELIGIEUX : PRIX)[format];
    R.querySelector('[data-recap-prix]').textContent = euros(prix);
    R.querySelector('[data-recap-occasion]').textContent = sel.options[sel.selectedIndex].text;
    R.querySelector('[data-recap-lettrine]').textContent = sel.options[sel.selectedIndex].text.charAt(0);
    const lib = (n) => f.querySelector(`input[name="${n}"]:checked + span`).textContent;
    R.querySelector('[data-recap-choix]').textContent = `${lib('format')} · ${lib('support')} · ${lib('or')}`;
    const feuille = R.querySelector('.recap-feuille'); feuille.dataset.or = or; feuille.dataset.support = support;
    const d = R.querySelector('[data-recap-delai]');
    if (date.value) {
      const ev = new Date(date.value + 'T12:00:00'), lim = new Date(ev); lim.setMonth(lim.getMonth() - (format === 'armoiries' ? 2 : 3));
      d.textContent = lim < new Date() ? d.dataset.delaiCourt : d.dataset.delaiOk.replace('{date}', fmt(lim));
    } else d.textContent = d.dataset.delaiSans;
    const msg = `Commande : ${sel.options[sel.selectedIndex].text}, ${lib('format').toLowerCase()}, ${lib('support').toLowerCase()}, ${lib('or').toLowerCase()}${date.value ? ', pour le ' + fmt(new Date(date.value + 'T12:00:00')) : ''}. Prix de départ indiqué : ${prix} €.`;
    R.querySelector('[data-recap-lien]').href = `/contact?sujet=commande&message=${encodeURIComponent(msg)}#ecrire`;
  };
  f.addEventListener('input', maj); f.addEventListener('change', maj);
  const occ = new URLSearchParams(location.search).get('occasion');
  if (occ && sel.querySelector(`option[value="${occ}"]`)) { sel.value = occ; if (occ === 'armoiries') f.querySelector('input[value="armoiries"]').checked = true; }
  $$('[data-choisir]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); sel.value = a.dataset.choisir; if (a.dataset.choisir === 'armoiries') f.querySelector('input[value="armoiries"]').checked = true; maj(); document.getElementById('composer').scrollIntoView({ behavior: 'smooth' }); }));
  maj();
}

/* Demande d'achat : une seule source (localStorage), suivie entre onglets, donnée abîmée nettoyée. */
const CLE = 'marie-nuel-demande';
function demande() {
  const tiroir = document.querySelector('[data-demande]');
  const boutons = $$('[data-demande-ouvrir]');
  const visible = () => boutons.find((b) => b.offsetParent) || boutons[0];
  const lire = () => { const d = lireJSON(CLE, []); return Array.isArray(d) ? d.filter((x) => x && x.id && x.titre && Number.isFinite(+x.prix)) : []; };
  const annonce = document.querySelector('[data-demande-annonce]');
  const rendre = () => {
    const L = lire();
    $$('[data-demande-nb]').forEach((n) => { n.textContent = L.length; });
    $$('[data-ajouter]').forEach((b) => { const dans = L.some((x) => x.id === b.dataset.ajouter); if (b.classList.contains('ajouter')) { b.setAttribute('aria-pressed', String(dans)); const s = b.querySelector('[data-libelle-ajout]'); if (s) s.textContent = dans ? s.dataset.libelleAjoute : s.dataset.libelleAjout; } });
    if (!tiroir) return;
    const ul = tiroir.querySelector('[data-demande-liste]');
    ul.replaceChildren(...L.map((x) => { const li = document.createElement('li'); li.innerHTML = `<img alt="" src="${x.image}"><span><strong></strong>${euros(+x.prix)}</span><button type="button">Retirer</button>`; li.querySelector('strong').textContent = x.titre; li.querySelector('button').addEventListener('click', () => { ecrireJSON(CLE, lire().filter((y) => y.id !== x.id)); rendre(); }); return li; }));
    tiroir.querySelector('[data-demande-vide]').hidden = L.length > 0;
    tiroir.querySelector('[data-demande-total]').textContent = euros(L.reduce((s, x) => s + (+x.prix), 0));
    const msg = 'Bonjour, je souhaite acheter : ' + L.map((x) => `${x.titre} (${x.prix} €)`).join(', ') + '.';
    tiroir.querySelector('[data-demande-envoyer]').href = `/contact?sujet=achat&message=${encodeURIComponent(msg)}#ecrire`;
  };
  const ajouter = (item, source) => {
    const L = lire();
    if (!L.some((x) => x.id === item.id)) { L.push(item); ecrireJSON(CLE, L); }
    else if (source && source.classList.contains('ajouter')) { ecrireJSON(CLE, L.filter((x) => x.id !== item.id)); rendre(); return; }
    rendre();
    if (annonce) annonce.textContent = annonce.dataset.modele.replace('{titre}', item.titre);
    const img = source && source.closest('li, .bloc-deux-grille, .marque-grille')?.querySelector('img');
    const bouton = visible();
    if (img && bouton && gsap) {
      const a = img.getBoundingClientRect(), b = bouton.getBoundingClientRect();
      const e = document.createElement('img'); e.src = img.currentSrc || img.src; e.className = 'envol'; e.alt = ''; e.setAttribute('data-audit-ignorer', '');
      e.style.left = (a.left + a.width / 2 - 32) + 'px'; e.style.top = (a.top + a.height / 2 - 32) + 'px'; document.body.appendChild(e);
      gsap.to(e, { x: b.left + b.width / 2 - (a.left + a.width / 2), y: b.top + b.height / 2 - (a.top + a.height / 2), scale: 0.3, duration: 0.7, ease: 'power2.in', onComplete: () => { e.remove(); gsap.fromTo(bouton, { scale: 1.12 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' }); } });
    }
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ajouter]');
    if (b) ajouter({ id: b.dataset.ajouter, titre: b.dataset.titre, prix: +b.dataset.prixValeur, image: b.dataset.image }, b);
  });
  const mp = document.querySelector('[data-ajouter-marque]');
  if (mp) mp.addEventListener('click', () => {
    const f = mp.closest('form'), prenom = (f.prenom.value || '').trim() || 'Prénom', verso = f.querySelector('input[name="face"]:checked').value === 'verso';
    const encre = f.querySelector('input[name="encre"]:checked').value;
    ajouter({ id: 'marque-' + prenom.toLowerCase() + '-' + encre + (verso ? '-rv' : ''), titre: `Marque-page « ${prenom} », encre ${encre}${verso ? ', recto-verso' : ''}`, prix: verso ? 13 : 8, image: '/assets/images/marque-pages-bleus-480.webp' }, mp);
  });
  if (tiroir && boutons.length) {
    let source = null;
    const ouvrir = (e) => { source = e && e.currentTarget; tiroir.hidden = false; boutons.forEach((b) => b.setAttribute('aria-expanded', 'true')); document.documentElement.classList.add('defilement-bloque'); tiroir.querySelector('[data-demande-fermer]').focus(); };
    const fermer = () => { tiroir.hidden = true; boutons.forEach((b) => b.setAttribute('aria-expanded', 'false')); document.documentElement.classList.remove('defilement-bloque'); (source || visible()).focus({ preventScroll: true }); };
    boutons.forEach((b) => b.addEventListener('click', ouvrir));
    tiroir.querySelector('[data-demande-fermer]').addEventListener('click', fermer);
    tiroir.addEventListener('click', (e) => { if (e.target === tiroir) fermer(); });
    tiroir.addEventListener('keydown', (e) => { if (e.key === 'Escape') fermer(); if (e.key === 'Tab') { const f = $$('button, a', tiroir); const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } } });
  }
  window.addEventListener('storage', (e) => { if (e.key === CLE) rendre(); });
  rendre();
}

/* Marque-page : aperçu en direct. */
function marquePage() {
  const f = document.querySelector('[data-marque]'), s = document.querySelector('[data-signet]');
  if (!f || !s) return;
  const maj = () => {
    const p = (f.prenom.value || '').trim() || 'Prénom';
    s.querySelector('[data-signet-initiale]').textContent = p.charAt(0).toUpperCase();
    s.querySelector('[data-signet-nom]').textContent = p.slice(1);
    s.dataset.encre = f.querySelector('input[name="encre"]:checked').value;
    const d = f.querySelector('[data-marque-delai]'); const v = f.querySelector('input[name="face"]:checked').value;
    d.textContent = 'Délai\u00a0: ' + d.dataset[v];
  };
  f.addEventListener('input', maj); f.addEventListener('submit', (e) => e.preventDefault()); maj();
}

/* Liens vers l'inscription avec un choix fait. */
function choixStage() {
  $$('[data-choisir-stage]').forEach((a) => a.addEventListener('click', () => { const s = document.getElementById('i-stage'); if (s) s.value = a.dataset.choisirStage; }));
}

/* ---------- intro : réglure, monogramme écrit puis doré, glissement vers l'œuvre ---------- */
function jouer() {
  if (!gsap) return null;
  const panneau = document.querySelector('[data-ouverture]');
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const traits = $$('.mono-trait', panneau);
  tl.fromTo($$('.reglure path', panneau), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.6, stagger: 0.05, ease: 'power2.inOut' }, 0)
    .fromTo(panneau.querySelector('.mono'), { scale: 0.86, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35 }, 0)
    .fromTo(panneau.querySelectorAll('.ouverture-nom, .ouverture-ligne'), { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.05 }, 0.12);
  traits.forEach((t, i) => tl.fromTo(t, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.26, ease: 'power1.inOut' }, 0.12 + i * 0.07));
  tl.fromTo(panneau.querySelector('.mono-fleurons'), { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.26, ease: 'back.out(2.2)' }, 0.6)
    .to(panneau.querySelectorAll('.ouverture-nom, .ouverture-ligne, .reglure'), { opacity: 0, duration: 0.2 }, 0.78);
  versObjet(tl, { a: 0.84, duree: 0.44, ouverture: 0.7 });
  arriveePage(tl, 1.3);
  return tl;
}

/* Arrivée du premier écran (intro, ou voile qui se retire). */
function arriveePage(tl, t = 0) {
  const titre = document.querySelector('.heros-titre');
  if (titre) {
    tl.set(titre, { opacity: 1 }, t)
      .fromTo('.heros-ligne', { yPercent: 108 }, { yPercent: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out' }, t)
      .fromTo('.heros .surtitre, .heros-chapo, .heros-actions, .heros-info, .heros-cartel', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 }, t + 0.1)
      .call(() => { eclatOuverture(document.querySelector('.heros-oeuvre .or-cadre')); invitation(); }, null, t + 0.2)
      .call(illuminer, null, t + 0.75);
  }
  tl.call(poserLettrine, null, t);
  return tl;
}

demarrer({
  preparer() {
    if (!gsap || !ST()) return;
    agenda();
    orVivant();
    colonnes();
    pigments();
    manuscrit();
    lapin();
    motsMetier();
    lettrines();
    preparerLettrine();
    const mot = document.querySelector('.heros-titre em');
    if (mot) mot.addEventListener('pointerenter', illuminer);
    monogrammeFin();
    for (const f of [filtres, visionneuse, voirAuMur, flottants, onglets, composeur, demande, marquePage, choixStage]) { try { f(); } catch (err) { console.error('[site]', f.name, err); } }
  },
  jouer,
  etatFinal() {
    if (!gsap) return;
    gsap.set('.heros-titre, .heros .surtitre, .heros-chapo, .heros-actions, .heros-info, .heros-cartel, .heros-ligne', { clearProps: 'transform,opacity' });
    finirLettrine();
  },
  arrivee() {
    if (!gsap) return;
    arriveePage(gsap.timeline({ delay: 0.12 }));
  },
});

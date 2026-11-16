# Rapport d’audit

Projet : `enluminure-marienuel-maquette` · 16/11/2026 19:33:52 · 23 min · 7 page(s) · audit standard

## Résumé

- Statut : **467 échec(s)**
- Passe : `20261116-181038-standard` · version ?v=1
- Échecs : **467**
- À regarder : **53**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (5), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (6), souris immobile (8), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### langues (423)

- **langues** — texte manquant en en : commun.ecrire
- **langues** — texte manquant en en : commun.ecrireLong
- **langues** — texte manquant en en : commun.suivre
- **langues** — texte manquant en en : commun.facebook
- **langues** — texte manquant en en : commun.lettre
- **langues** — texte manquant en en : commun.mentions
- **langues** — texte manquant en en : commun.confidentialite
- **langues** — texte manquant en en : commun.logoSous
- **langues** — texte manquant en en : commun.detail
- **langues** — texte manquant en en : commun.agrandir
- **langues** — texte manquant en en : commun.precedente
- **langues** — texte manquant en en : commun.suivante
- **langues** — texte manquant en en : commun.fermerVisionneuse
- **langues** — texte manquant en en : commun.loupe
- **langues** — texte manquant en en : commun.loupeTactile
- **langues** — texte manquant en en : pages.oeuvres.titre
- **langues** — texte manquant en en : pages.oeuvres.description
- **langues** — texte manquant en en : pages.oeuvres.nav
- **langues** — texte manquant en en : pages.oeuvres.partageAlt
- **langues** — texte manquant en en : pages.oeuvres.accroche
- **langues** — texte manquant en en : pages.commandes.titre
- **langues** — texte manquant en en : pages.commandes.description
- **langues** — texte manquant en en : pages.commandes.nav
- **langues** — texte manquant en en : pages.commandes.partageAlt
- **langues** — texte manquant en en : pages.commandes.accroche
- **langues** — texte manquant en en : pages.stages.titre
- **langues** — texte manquant en en : pages.stages.description
- **langues** — texte manquant en en : pages.stages.nav
- **langues** — texte manquant en en : pages.stages.partageAlt
- **langues** — texte manquant en en : pages.stages.accroche
- **langues** — texte manquant en en : pages.boutique.titre
- **langues** — texte manquant en en : pages.boutique.description
- **langues** — texte manquant en en : pages.boutique.nav
- **langues** — texte manquant en en : pages.boutique.partageAlt
- **langues** — texte manquant en en : pages.boutique.accroche
- **langues** — texte manquant en en : pages.contact.titre
- **langues** — texte manquant en en : pages.contact.description
- **langues** — texte manquant en en : pages.contact.nav
- **langues** — texte manquant en en : pages.contact.partageAlt
- **langues** — texte manquant en en : pages.contact.accroche
- … et 383 autres (rapport.json)

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.heros-texte:nth-of-type(1) > p.heros-info:nth-of-type(4) « Prochain stage · 5 et 6 décembre · calligraphie on » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/boutique` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) « 19 ŒUVRES EN STOCK de 25 à 450 € » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(5) « À demander au moins trois mois avant la date » _(320×568 normal, 844×390 normal, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-ecritoire-carte > p.ouv-info:nth-of-type(4) « enluminure.marienuel@gmail.com » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/oeuvres` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « 45 œuvres · 7 oiseaux de Nouvelle-Zélande » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/stages` — section#debut > div.bandeau-date:nth-of-type(2) > div.conteneur.bandeau-contenu > p.bandeau-jours:nth-of-type(2) « 5 et 6 décembre » _(320×568 normal, 320×568 sansJs)_

### texte coupé (5)

- **texte coupé** — `/` — div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(1) > span.heros-ligne « L’art » — coupé par section#debut > div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(1) « L’art » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +4)_
- **texte coupé** — `/` — div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(2) > span.heros-ligne « d’illuminer » — coupé par section#debut > div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(2) « d’illuminer » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +4)_
- **texte coupé** — `/` — h1.heros-titre > span.ligne-masque:nth-of-type(2) > span.heros-ligne > em « illuminer » — coupé par section#debut > div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(2) « d’illuminer » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +4)_
- **texte coupé** — `/` — div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(3) > span.heros-ligne « la page » — coupé par section#debut > div.heros-texte:nth-of-type(1) > h1.heros-titre > span.ligne-masque:nth-of-type(3) « la page » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +4)_
- **texte coupé** — `/boutique` — div.conteneur.marque-grille > div.marque-apercu:nth-of-type(2) > div.signet > span.signet-nom:nth-of-type(2) « oséphine » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/` — section#metier > div > div.metier-mots:nth-of-type(1) > span:nth-of-type(1) « Broyer » — avec section#metier > div > div.metier-legende:nth-of-type(2) > h2 « De la pierre à la couleur » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#metier > div > div.metier-mots:nth-of-type(1) > span:nth-of-type(1) « Broyer » — avec section#metier > div > div.metier-legende:nth-of-type(2) > p « Lapis-lazuli, cinabre, garance : la palette de l’e » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#metier > div > div.metier-mots:nth-of-type(1) > span:nth-of-type(2) « dorer » — avec section#metier > div > div.metier-legende:nth-of-type(2) > p « Lapis-lazuli, cinabre, garance : la palette de l’e » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/boutique` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) > span « 19 ŒUVRES EN STOCK » — avec section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) > strong « de 25 à 450 € » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/commandes` — div.conteneur.composer-grille > aside.recap > div.recap-feuille > p.recap-occasion:nth-of-type(1) « Naissance et baptême » — avec div.conteneur.composer-grille > aside.recap > div.recap-feuille > p.recap-choix:nth-of-type(2) « Lettrine ou prénom · Papier · Avec feuille d’or » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) > span « LETTRINE OU PRÉNOM » — avec section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) > strong « dès 120 € » _(1920×1080 normal)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.introuvable-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Retour à l’accueil » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/boutique` — section#debut > div.ouv-texte:nth-of-type(1) > p:nth-of-type(4) > a.bouton « Voir les œuvres » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p:nth-of-type(4) > a.bouton « Composer ma commande » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/stages` — div.bandeau-date:nth-of-type(2) > div.conteneur.bandeau-contenu > p:nth-of-type(4) > a.bouton.bouton--or « S’inscrire » _(320×568 normal, 844×390 normal, 320×568 sansJs)_

### contraste insuffisant (8)

- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes.fx-fini > li.etape:nth-of-type(1) > span.etape-n:nth-of-type(2) « 1 » — 2.38:1 (minimum 3:1) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes.fx-fini > li.etape:nth-of-type(2) > span.etape-n:nth-of-type(1) « 2 » — 2.38:1 (minimum 3:1) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes.fx-fini > li.etape:nth-of-type(3) > span.etape-n:nth-of-type(1) « 3 » — 2.38:1 (minimum 3:1) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes.fx-fini > li.etape:nth-of-type(4) > span.etape-n:nth-of-type(1) « 4 » — 2.38:1 (minimum 3:1) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes > li.etape:nth-of-type(1) > span.etape-n:nth-of-type(2) « 1 » — 2.38:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes > li.etape:nth-of-type(2) > span.etape-n:nth-of-type(1) « 2 » — 2.38:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes > li.etape:nth-of-type(3) > span.etape-n:nth-of-type(1) « 3 » — 2.38:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/commandes` — div.conteneur > ol.etapes > li.etape:nth-of-type(4) > span.etape-n:nth-of-type(1) « 4 » — 2.38:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/commandes` — div.oeuvre-pose > figure.media > picture > img « Chevaux » — c-chevaux (3/5, faible, 37 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/contact` — dl.coord > div:nth-of-type(3) > dd > a « enluminuremarienuel » — 151 × 19 px _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contact` — dl.coord > div:nth-of-type(2) > dd > a « enluminure.marienuel@gmail.com » — 246 × 19 px _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_

### image non chargée (1)

- **image non chargée** — `/oeuvres` — main#contenu > div.visionneuse > div.visionneuse-image:nth-of-type(1) > img _(768×1024 normal, 844×390 normal, 390×844 normal, 320×568 normal, 1366×768 normal, 1920×1080 normal, +5)_

### erreur de console ou ressource (2)

- **erreur de console ou ressource** — `/oeuvres` — ressource 404 : /assets/images/o-yoga-1200.webp _(1366×768 liens)_
- **erreur de console ou ressource** — `/oeuvres` — console : Failed to load resource: the server responded with a status of 404 (Not Found) _(1366×768 liens)_

### lien profond (9)

- **lien profond** — `/ → /oeuvres#o-kiwi` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /oeuvres#o-dame` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-francois` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-manchot` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-enlumineur` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-beatus` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-kookaburra` — section pas en haut de l'écran (2391 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-annonciation` — section pas en haut de l'écran (997 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-bakhita` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `stages.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (36)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.heros-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « ATELIER D’ENLUMINURE ET DE CALLIGRAPHIE · VALENCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur > div.commander-tete > div:nth-of-type(1) > p.surtitre « COMMANDES PERSONNALISÉES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#metier > div > figure.media.metier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.manuscrit-cadre > div.conteneur.manuscrit-grille > div.manuscrit-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « LE CHEF-D’ŒUVRE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#apprendre > div.conteneur.apprendre-grille > div.apprendre-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « STAGES ET ATELIERS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#apprendre > div.conteneur.apprendre-grille > div.apprendre-texte:nth-of-type(1) > h3.petit-titre « PROCHAINES DATES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#marie > div.conteneur.marie-grille > div.marie-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « L’ENLUMINEURE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.marie-texte:nth-of-type(2) > dl.echos.fx-fini > div:nth-of-type(1) > dt « ON EN A PARLÉ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.marie-texte:nth-of-type(2) > dl.echos > div:nth-of-type(1) > dt « ON EN A PARLÉ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) > span « 19 ŒUVRES EN STOCK » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#tirages > div.conteneur.bloc-deux-grille > div > p.surtitre:nth-of-type(1) « TIRAGES D’ART » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#marque-pages > div.conteneur.marque-grille > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « MARQUE-PAGES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « COMMANDES PERSONNALISÉES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-prix:nth-of-type(3) > span « LETTRINE OU PRÉNOM » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#occasions > div.conteneur > p.surtitre « POUR QUELLE OCCASION ? » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#gestes > div.conteneur > p.surtitre « COMMENT NAÎT VOTRE ENLUMINURE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#religions > div.conteneur > p.surtitre « FÊTES RELIGIEUSES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#exemples > div.conteneur > p.surtitre « DÉJÀ RÉALISÉES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- … et 11 autres (rapport.json)

### typographie française (3)

- **typographie française** — `/` — div.conteneur.marie-grille > div.marie-texte:nth-of-type(2) > blockquote.citation > p « « L’art a une importance capitale dans notre monde » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/boutique` — div.conteneur.marque-grille > div:nth-of-type(1) > form.marque-form > p.marque-delai:nth-of-type(1) « Délai : environ 15 jours » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/oeuvres` — div.conteneur.oiseaux-grille > div.oiseaux-texte > blockquote.oiseaux-citation > p « « Mon bonheur possède des plumes et un bout du cie » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### section sans visuel (2)

- **section sans visuel** — `/commandes` — section#composer « COMPOSER Votre commande en quatre choix Le prix af » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/stages` — section#agenda « AGENDA Les dates 27 et 28 juin Lettres filigranées » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### photo moyenne affichée en très grand (5)

- **photo moyenne affichée en très grand** — `/oeuvres` — div.oeuvre-pose > figure.media > picture > img « Sainte Famille » — o-famille (3/5, 52 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/oeuvres` — div.oeuvre-pose > figure.media > picture > img « La Garde-Guérin, XVIIe siècle » — o-garde (3/5, 58 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/oeuvres` — div.oeuvre-pose > figure.media > picture > img « Credo, détail » — o-credo (3/5, 52 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/oeuvres` — div.oeuvre-pose > figure.media > picture > img « Only a bird » — o-onlybird (3/5, 52 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/oeuvres` — div.oeuvre-pose > figure.media > picture > img « En attendant l’arc-en-ciel » — o-arcenciel (3/5, 54 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/oeuvres` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-oeuvres-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 52 min de travail pour 110 min de budget, 26 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /boutique, /commandes, /contact, /oeuvres, /stages.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2853 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2606 ms depuis le premier octet
- film de l'ouverture /boutique 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /commandes (1366×768) : 2588 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2556 ms depuis le premier octet
- Ouverture /oeuvres (1366×768) : 2595 ms depuis le premier octet
- Ouverture /stages (1366×768) : 2584 ms depuis le premier octet
- film de l'ouverture /stages 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2773 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /boutique (390×844) : 2532 ms depuis le premier octet
- Ouverture /commandes (390×844) : 2520 ms depuis le premier octet
- Ouverture /contact (390×844) : 2490 ms depuis le premier octet
- Ouverture /oeuvres (390×844) : 2553 ms depuis le premier octet
- film de l'ouverture /oeuvres 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /stages (390×844) : 2500 ms depuis le premier octet
- Bords de l’écran : 545 images d’intro, 51 de voile et 176 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /commandes : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /stages : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 600, tâche la plus longue 55 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 340, tâche la plus longue 0 ms
- Fluidité /commandes 1366×768 (molette) : 0 % d'images lentes sur 347, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 188, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 0 % d'images lentes sur 436, tâche la plus longue 70 ms
- Fluidité /stages 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /commandes 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /stages 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /commandes : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.63 s de calcul au chargement (téléphone ralenti).
- Vitesse /stages : 0.38 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```

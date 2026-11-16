# Rapport d’audit

Projet : `enluminure-marienuel-maquette` · 16/11/2026 19:59:53 · 23 min · 7 page(s) · audit standard

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261116-183706-standard` · version ?v=1
- Échecs : **12**
- À regarder : **15**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (5), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (6), souris immobile (8), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ⚠ à regarder | présent sur /boutique, /commandes, /contact, /oeuvres, /stages ; absent sur / |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /boutique |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-181038-standard | standard | toutes | toutes | 467 | 53 | 1 | échecs |
| **20261116-183706-standard** (celle-ci) | standard | toutes | toutes | 12 | 15 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p:nth-of-type(4) > a.bouton « Composer ma commande » _(844×390 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(5) « À demander au moins trois mois avant la date » _(844×390 normal)_

### image non chargée (1)

- **image non chargée** — `/oeuvres` — main#contenu > div.visionneuse > div.visionneuse-image:nth-of-type(1) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### lien profond (9)

- **lien profond** — `/ → /oeuvres#o-kiwi` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /oeuvres#o-dame` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-francois` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-manchot` — section pas en haut de l'écran (1037 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-enlumineur` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-beatus` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-kookaburra` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-annonciation` — section pas en haut de l'écran (2778 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-bakhita` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `stages.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — `/` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### texte de contenu sous 13 px (ordinateur) (11)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#metier > div > figure.media.metier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouv-plein-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — section#debut > div.ouv-mur:nth-of-type(2) > figure.media.ouv-mur-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/stages` — section#debut > div.bandeau-date:nth-of-type(2) > figure.media.bandeau-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

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
- Ouverture / (1366×768) : 2799 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2535 ms depuis le premier octet
- Ouverture /commandes (1366×768) : 2560 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2523 ms depuis le premier octet
- Ouverture /oeuvres (1366×768) : 2624 ms depuis le premier octet
- Ouverture /stages (1366×768) : 2535 ms depuis le premier octet
- Ouverture / (390×844) : 2776 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /boutique (390×844) : 2504 ms depuis le premier octet
- Ouverture /commandes (390×844) : 2539 ms depuis le premier octet
- Ouverture /contact (390×844) : 2514 ms depuis le premier octet
- Ouverture /oeuvres (390×844) : 2542 ms depuis le premier octet
- Ouverture /stages (390×844) : 2505 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 533 images d’intro, 53 de voile et 173 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /commandes : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /stages : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 596, tâche la plus longue 0 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 318, tâche la plus longue 0 ms
- Fluidité /commandes 1366×768 (molette) : 0 % d'images lentes sur 342, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 178, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 0 % d'images lentes sur 388, tâche la plus longue 0 ms
- Fluidité /stages 1366×768 (molette) : 0 % d'images lentes sur 278, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /commandes 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /stages 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Vitesse / : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /commandes : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /stages : 0.33 s de calcul au chargement (téléphone ralenti).

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

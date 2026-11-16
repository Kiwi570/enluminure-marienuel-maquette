# Rapport d’audit

Projet : `enluminure-marienuel-maquette` · 16/11/2026 20:48:55 · 23 min · 7 page(s) · audit standard

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261116-192617-standard` · version ?v=1
- Échecs : **3**
- À regarder : **16**
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
| 20261116-183706-standard | standard | toutes | toutes | 12 | 15 | 1 | échecs |
| 20261116-190147-standard-partiel | standard | toutes | fichiers, mesures, parcours | 1 | 14 | 0 | échecs |
| 20261116-190933-complet-partiel | complet | toutes | mesures, ecran | 5 | 11 | 0 | échecs |
| 20261116-191915-complet-cible-partiel | complet | /,/boutique,/commandes,/stages,/oeuvres,/contact | fichiers, mesures | 0 | 12 | 0 | complet |
| **20261116-192617-standard** (celle-ci) | standard | toutes | toutes | 3 | 16 | 1 | échecs |

## Échecs

### lien profond (3)

- **lien profond** — `/ → /oeuvres#o-manchot` — section pas en haut de l'écran (1008 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-enlumineur` — section pas en haut de l'écran (2435 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /oeuvres#o-kookaburra` — section pas en haut de l'écran (988 px) _(1366×768 lien profond)_

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
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouv-plein-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — section#debut > div.ouv-mur:nth-of-type(2) > figure.media.ouv-mur-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/stages` — section#debut > div.bandeau-date:nth-of-type(2) > figure.media.bandeau-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/oeuvres` — écran différent à la même position après rechargement (4.5 %), voir comparaisons/rechargement-oeuvres-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2728 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2554 ms depuis le premier octet
- film de l'ouverture /boutique 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /commandes (1366×768) : 2501 ms depuis le premier octet
- film de l'ouverture /commandes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2493 ms depuis le premier octet
- Ouverture /oeuvres (1366×768) : 2547 ms depuis le premier octet
- Ouverture /stages (1366×768) : 2514 ms depuis le premier octet
- Ouverture / (390×844) : 2809 ms depuis le premier octet
- Ouverture /boutique (390×844) : 2529 ms depuis le premier octet
- Ouverture /commandes (390×844) : 2509 ms depuis le premier octet
- Ouverture /contact (390×844) : 2501 ms depuis le premier octet
- Ouverture /oeuvres (390×844) : 2543 ms depuis le premier octet
- Ouverture /stages (390×844) : 2519 ms depuis le premier octet
- film de l'ouverture /stages 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 595 images d’intro, 51 de voile et 177 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /commandes : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /stages : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 591, tâche la plus longue 53 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 330, tâche la plus longue 0 ms
- Fluidité /commandes 1366×768 (molette) : 0 % d'images lentes sur 317, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 0 % d'images lentes sur 379, tâche la plus longue 0 ms
- Fluidité /stages 1366×768 (molette) : 0 % d'images lentes sur 273, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /commandes 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /stages 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.63 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /commandes : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /stages : 0.34 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,parcours
```

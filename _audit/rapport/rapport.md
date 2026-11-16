# Rapport d’audit

Projet : `enluminure-marienuel-maquette` · 16/11/2026 22:43:56 · 27 min · 7 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-211714-complet` · version ?v=2
- Échecs : **0**
- À regarder : **1**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (8), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (6), souris immobile (8), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 6 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /boutique |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-203618-standard-partiel | standard | toutes | parcours | 0 | 1 | 0 | complet |
| 20261116-204145-complet | complet | toutes | toutes | 0 | 24 | 1 | complet |
| **20261116-211714-complet** (celle-ci) | complet | toutes | toutes | 0 | 1 | 1 | complet |

## Échecs

Aucun.

## À regarder

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/oeuvres` — écran différent à la même position après rechargement (6.8 %), voir comparaisons/rechargement-oeuvres-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 20 min de travail pour 50 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2502 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2170 ms depuis le premier octet
- Ouverture /commandes (1366×768) : 2143 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2164 ms depuis le premier octet
- Ouverture /oeuvres (1366×768) : 2239 ms depuis le premier octet
- Ouverture /stages (1366×768) : 2188 ms depuis le premier octet
- Ouverture / (390×844) : 2511 ms depuis le premier octet
- Ouverture /boutique (390×844) : 2177 ms depuis le premier octet
- Ouverture /commandes (390×844) : 2157 ms depuis le premier octet
- film de l'ouverture /commandes 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2171 ms depuis le premier octet
- Ouverture /oeuvres (390×844) : 2174 ms depuis le premier octet
- Ouverture /stages (390×844) : 2172 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 498 images d’intro, 50 de voile et 174 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /commandes : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /stages : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 529, tâche la plus longue 0 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 324, tâche la plus longue 0 ms
- Fluidité /commandes 1366×768 (molette) : 0 % d'images lentes sur 340, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 184, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 0 % d'images lentes sur 476, tâche la plus longue 0 ms
- Fluidité /stages 1366×768 (molette) : 0 % d'images lentes sur 274, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /commandes 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /stages 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /commandes : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /stages : 0.30 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

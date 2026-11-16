# Rapport d’audit

Projet : `enluminure-marienuel-maquette` · 16/11/2026 21:01:57 · 5 min · 7 page(s) · audit standard (étapes : fichiers, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-195656-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-181038-standard | standard | toutes | toutes | 467 | 53 | 1 | échecs |
| 20261116-183706-standard | standard | toutes | toutes | 12 | 15 | 1 | échecs |
| 20261116-190147-standard-partiel | standard | toutes | fichiers, mesures, parcours | 1 | 14 | 0 | échecs |
| 20261116-190933-complet-partiel | complet | toutes | mesures, ecran | 5 | 11 | 0 | échecs |
| 20261116-191915-complet-cible-partiel | complet | /,/boutique,/commandes,/stages,/oeuvres,/contact | fichiers, mesures | 0 | 12 | 0 | complet |
| 20261116-192617-standard | standard | toutes | toutes | 3 | 16 | 1 | échecs |
| 20261116-194950-standard-partiel | standard | toutes | fichiers, parcours | 2 | 2 | 0 | échecs |
| **20261116-195656-standard-partiel** (celle-ci) | standard | toutes | fichiers, parcours | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `stages.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/oeuvres` — écran différent à la même position après rechargement (4.4 %), voir comparaisons/rechargement-oeuvres-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 52 min de travail pour 110 min de budget, 26 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /boutique, /commandes, /contact, /oeuvres, /stages.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

# Rapport d’audit

Projet : `enluminure-marienuel-maquette` · 16/11/2026 20:17:17 · 8 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261116-190933-complet-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **11**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-181038-standard | standard | toutes | toutes | 467 | 53 | 1 | échecs |
| 20261116-183706-standard | standard | toutes | toutes | 12 | 15 | 1 | échecs |
| 20261116-190147-standard-partiel | standard | toutes | fichiers, mesures, parcours | 1 | 14 | 0 | échecs |
| **20261116-190933-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 5 | 11 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.heros-texte:nth-of-type(1) > p.heros-info:nth-of-type(4) « Prochain stage · 5 et 6 décembre · calligraphie on » _(375×667 normal, 1000×560 normal, 375×667 sansJs, 375×667 sansWebgl, 844×390 sansJs, 1000×560 sansWebgl, +2)_
- **premier écran : information clé hors de l’écran** — `/commandes` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(5) « À demander au moins trois mois avant la date » _(1000×560 sansJs, 1440×900 sansJs)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.heros-texte:nth-of-type(1) > p.heros-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Commander une enluminure » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/boutique` — section#debut > div.ouv-texte:nth-of-type(1) > p:nth-of-type(4) > a.bouton « Voir les œuvres » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/stages` — div.bandeau-date:nth-of-type(2) > div.conteneur.bandeau-contenu > p:nth-of-type(4) > a.bouton.bouton--or « S’inscrire » _(1000×560 sansJs)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (11)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#metier > div > figure.media.metier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1728×1000 normal, 1440×900 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — section#debut > div.ouv-image:nth-of-type(2) > figure.media.ouv-image-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes.fx-fini > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(2) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/commandes` — ol.etapes > li.etape:nth-of-type(4) > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouv-plein-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — section#debut > div.ouv-mur:nth-of-type(2) > figure.media.ouv-mur-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/stages` — section#debut > div.bandeau-date:nth-of-type(2) > figure.media.bandeau-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /commandes : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /stages : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/boutique,/commandes,/stages --seulement=fichiers,mesures
```

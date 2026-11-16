# Atelier d'Enluminure Marie Nuel : maquette

Maquette du futur site de l'Atelier d'Enluminure Marie Nuel (Valence, Drôme), d'après le site actuel enluminure-marienuel.com.
Direction « Lapis et feuille d'or » : parchemin, lapis du logo, or des enluminures ; les vraies œuvres de Marie au centre de chaque page, jamais recadrées ni recolorées.

Adresse prévue : https://enluminure-marienuel-maquette.vercel.app

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil | le monogramme MN s'écrit et se dore, puis s'ouvre sur « Amitié », dont la feuille d'or accroche la lumière | manifeste, mur d'œuvres, commandes, table de l'enlumineur, pigments, manuscrit qui s'ouvre, stages, Marie, boutique, appel final |
| Œuvres | une vraie œuvre posée sur un mur de chaux | 45 œuvres filtrables, visionneuse avec loupe (lien direct `/oeuvres#o-kiwi`), série des oiseaux, œuvre à sa taille réelle au mur |
| Commandes | prix d'appel en très grand | occasions en onglets, composeur (prix de départ, date limite), quatre gestes, fêtes religieuses, exemples, questions |
| Stages et ateliers | date du prochain stage en très grand | agenda calculé à la date du jour, stages, interventions, scolaires et Pass Culture, inscription simulée |
| Boutique | prix en très grand | 19 œuvres en stock filtrables, demande d'achat (tiroir), tirages d'art, marque-pages à composer |
| Contact | l'écritoire en plein cadre | formulaire prérempli, coordonnées, plan simplifié, dons de matériaux |
| 404 | une goutte d'encre | retour à l'accueil |

Pages du site actuel non reprises dans la maquette (possibles dans une prochaine version) : Qui suis-je ? (biographie complète), Qu'est-ce que l'enluminure ?, Qu'est-ce que la calligraphie ?, Actualités, Événements passés, Presse et médias (en détail), Liens, Politique de confidentialité.

## Informations à fournir par le client (à compléter)

- **Mentions légales** : éditeur, statut (artisan, RM26), SIRET 791 713 480 00022 à confirmer, directeur de la publication.
- **Politique de confidentialité** (formulaires et lettre d'information).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse à vérifier au moment de la mise en ligne).
- **Adresse e-mail** : le site actuel en affiche trois (enluminure.marienuel@gmail.com, enluminure-marienuel@gmail.com, enluminure.mn@sfr.fr) ; la maquette utilise la première.
- **Crédits** : les illustrations générées par IA (Grok) portent la mention « Illustration générée » ; la garder sur le site final.
- **Retiré ou remplacé faute d'information** :
  - année des stages : la maquette date les stages de 2026 (juin et juillet passés, 5 et 6 décembre à venir) ; « Créer une lettrine romane » en novembre n'a pas de jour (affiché « date sur demande ») ;
  - tarifs des stages, des interventions et des ateliers scolaires : non affichés (le site n'en donne pas) ;
  - téléphone et horaires d'ouverture de l'atelier : absents du site, donc absents de la maquette ;
  - deux prix de départ pour une lettrine (120 € en commandes, 90 € en événements religieux) : la maquette reprend les deux, à confirmer ;
  - dimensions et techniques manquantes de certaines œuvres : cartels raccourcis ;
  - catalogues PDF (adultes, enfants, scolaires) et fiches d'inscription : à fournir.

## Incohérences relevées sur le site actuel

Trois adresses e-mail ; crédit du modèle Wix « © 2023 by MATT WHITBY » en pied de page ; stages sans année et stages passés affichés comme à venir ; coupures de presse utilisées comme images principales.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaires et demande d'achat simulés (les relier à un vrai envoi), mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Travailler sur la maquette

```
node outils/generer.mjs                      pages HTML générées depuis donnees/ et source/
node <bibliotheque>/images/produire.mjs plan-images.json   images WebP depuis recu/
node <bibliotheque>/images/partage.mjs       images de partage
node _audit/audit.mjs                        audit standard
```

Textes : `donnees/textes/fr.json`. Œuvres, boutique, agenda, occasions : `donnees/*.json`. Ne jamais modifier les pages générées à la main.
Monogramme MN : redessiné en vecteur d'après le logo du client (`assets/images/logo.svg`). Reflet d'or : masques calculés sur les photos des œuvres (`assets/images/masque-*.png`).

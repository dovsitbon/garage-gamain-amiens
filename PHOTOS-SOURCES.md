# Garage Gamain : sources des photos

Bilan : **2 photos réelles** du garage et **9 photos libres de droits** (Unsplash).

Les photos libres de droits illustrent un service (vidange, freins…). Elles ne sont jamais présentées comme le garage : leur texte alternatif dit « photo d'illustration », et aucune légende du type « notre atelier » n'est posée dessus. Elles sont à remplacer en priorité par des photos prises sur place (voir `assets/A-PHOTOGRAPHIER.md`).

## Photos réelles du garage

Recherchées sur : fiche Google Maps, page Facebook (garage.gamain.amiens), fiche Precisium, PagesJaunes, AlloGarage.

| Fichier (`public/media/`) | Où sur le site | Source | Droits |
|---|---|---|---|
| `hero/facade-enseigne-precisium.jpg` | Hero plein écran, image de partage `og.jpg` | Fiche Google Maps « Garage Gamain Cédric SAS », photo publiée par un contributeur | Photo publique d'un internaute, utilisée comme le prévoyait le brief (photos récupérées sur Google Maps). **À remplacer par une photo du garage, ou à faire valider par Cédric Gamain.** |
| `facade/facade-vitrines-precisium.jpg` | Bloc « Confiance » | Fiche Google Maps « Garage Gamain Cédric SAS », photo publiée par un contributeur | Idem |

Photos vues mais **non retenues** :
- **Facebook** : voitures d'occasion à vendre, une promo Precisium et le logo du réseau. Aucune ne montre le garage lui-même.
- **Google Maps, autres photos** : intérieur sombre avec des voitures en vente, une Ferrari avec sa plaque lisible, un présentoir de produits flou, le logo Bosch Car Service. Elles sont conservées dans `assets/raw/` (fichiers `gamain_*.jpg`).
- **Precisium, PagesJaunes** : aucune photo du garage.

## Photos libres de droits (Unsplash)

Licence Unsplash (https://unsplash.com/license) : usage commercial autorisé, gratuit, attribution non obligatoire mais faite ici. Aucune photo « Unsplash+ » (payante).

| Fichier (`public/media/services/`) | Où sur le site | Photo | Auteur |
|---|---|---|---|
| `vidange.jpg` | Tuile « Entretien & vidange » | https://unsplash.com/photos/V37iTrYZz2E | Tim Mossholder (@timmossholder) |
| `freins.jpg` | Tuile « Freins » | https://unsplash.com/photos/vS2shmNei2E | Erik Mclean (@introspectivedsgn) |
| `pneus.jpg` | Tuile « Pneus » | https://unsplash.com/photos/9uHal2Dd9aE | Jimmy Nilsson Masth (@jimmynilssonmasth) |
| `diagnostic.jpg` | Tuile « Diagnostic & panne » | https://unsplash.com/photos/sEu9cAn7QLA | Mehmet Talha Onuk (@mtonuk) |
| `carrosserie-pare-chocs.jpg` | Tuile « Carrosserie & rayures » | https://unsplash.com/photos/Udv7OHeMLCk | Zoshua Colah (@zoshuacolah) |
| `climatisation.jpg` | Tuile « Climatisation » | https://unsplash.com/photos/e_c6jDnvpRg | Luca Freddi (@fresco97) |
| `atelier-pont.jpg` | Bloc « Entretien » | https://unsplash.com/photos/XP8o9_Arwqg | Dextar Studio (@dextarstudio) |
| `carrosserie-poncage.jpg` | Bloc « Carrosserie », page « Carrosserie à Amiens » | https://unsplash.com/photos/CNciVh_m1rU | Zoshua Colah (@zoshuacolah) |
| `mecanicien-moteur.jpg` | Page « Entretien et vidange à Amiens » | https://unsplash.com/photos/bEGTsOCnHro | Kate Ibragimova (@kateibragimova) |

## Toujours sans photo (volontairement)

- **Avant / après de carrosserie** : le curseur fonctionne sur deux emplacements dessinés. Mettre des photos de banque d'images ici reviendrait à présenter le travail de quelqu'un d'autre comme celui du garage : il faut de vraies paires avant / après du garage (`data/avant-apres.json`).

## Préparation

Originaux dans `assets/facade/` et `assets/stock/`. `npm run media` les recadre et les redimensionne (1600 px, 2400 px pour le hero) dans `public/media/`. `next/image` les sert ensuite en AVIF ou WebP, à la bonne taille, avec chargement différé hors du premier écran. Les textes alternatifs (fr/en) sont dans `locales/*.json` → `alt`.

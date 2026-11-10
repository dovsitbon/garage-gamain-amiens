# Photos à prendre sur place

Aucune photo `gamain_*.jpg` n'était disponible : le site affiche des emplacements dessinés (jamais de fausse photo). Lumière du jour, téléphone à l'horizontale, pas de visages de clients ni de plaques d'immatriculation lisibles.

| Dossier | Photo | Emplacement sur le site (`data/photos.json`) |
|---|---|---|
| `hero/` | La plus belle vue de l'atelier : une voiture sur le pont, le garagiste au travail, de dos ou de profil | `hero` (plein écran, en haut) |
| `facade/` | La façade et l'enseigne depuis la chaussée Jules Ferry | `facade` (et logo si l'enseigne en a un) |
| `atelier/` | Une vidange en cours, des plaquettes neuves à côté des usées, la valise de diagnostic branchée | `entretien`, `confiance`, tuiles |
| `atelier/` | Un travail de carrosserie (ponçage, apprêt, peinture) | `carrosserie` |
| `avant-apres/` | 2 ou 3 paires avant / après, même cadrage, même lumière | `data/avant-apres.json` |
| `equipe/` | Cédric et l'équipe devant le garage (avec leur accord) | `equipe` |

Ensuite : poser les fichiers dans le bon dossier, les ajouter dans `scripts/media.mjs` (PICKS), lancer `npm run media`, renseigner les chemins dans `data/photos.json`, et écrire les textes alternatifs (fr/en) dans `locales/*.json` → `alt`.

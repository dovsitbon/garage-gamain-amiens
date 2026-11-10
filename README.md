# Garage Gamain

Site vitrine et demande de devis du Garage Gamain Cédric, mécanique et carrosserie, 376 chaussée Jules Ferry, 80090 Amiens. Next.js 16, Tailwind 4, Motion. Français (défaut) et anglais, URLs `/fr` et `/en`.

- `npm run dev` : développement
- `npm run media` : prépare les photos (`assets/` → `public/media/`, `data/media-sizes.json`), régénère `public/og.jpg` et `app/apple-icon.png`
- `npm run affichette` : affichette A5 avec QR code (`public/affichette-garage-gamain-a5.pdf`)
- `npm run contenu` : régénère `CONTENU.md`

Données à tenir à jour : `data/tarifs.json`, `data/horaires.json`, `data/annonces.json`, `data/avis.json`, `data/photos.json`, `data/avant-apres.json`, `data/site.json`. Textes : `locales/fr.json`, `locales/en.json`.

Devis (Resend) : variables Vercel `RESEND_API_KEY`, `DEVIS_NOTIFY_EMAIL`, `RESEND_FROM`. Sans elles, le formulaire fonctionne mais invite le client à appeler.

Voir `INFOS-A-DEMANDER.md` et `assets/A-PHOTOGRAPHIER.md`.

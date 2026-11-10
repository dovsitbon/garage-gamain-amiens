// Prépare les photos du Garage Gamain pour le web, et génère l'image de partage et l'icône Apple.
// Sources : assets/raw/ (photos récupérées) et assets/<dossier>/ (photos prises sur place).
//   npm run media
// Version web dans public/media/<dossier>/ (next/image sert ensuite AVIF/WebP), dimensions réelles dans
// data/media-sizes.json. Pour une nouvelle photo : l'ajouter à PICKS, relancer, puis la brancher dans
// data/photos.json (ou data/avant-apres.json), et écrire son texte alternatif dans locales/*.json → alt.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["raw", "hero", "atelier", "avant-apres", "equipe", "facade"];

// [fichier source (depuis assets/), dossier, nom, recadrage { top, bottom, left, right } en pixels retirés]
const PICKS = [
  // Aucune photo pour l'instant (pas de gamain_*.jpg dans Téléchargements). Exemples, une fois sur place :
  // ["hero/atelier-pont-elevateur.jpg", "hero", "atelier-pont-elevateur", {}],
  // ["facade/facade-chaussee-jules-ferry.jpg", "facade", "facade", {}],
  // ["atelier/vidange.jpg", "atelier", "vidange", {}],
  // ["avant-apres/portiere-avant.jpg", "avant-apres", "portiere-avant", {}],
  // ["avant-apres/portiere-apres.jpg", "avant-apres", "portiere-apres", {}],
];

const sizes = {};
for (const [src, dir, name, c] of PICKS) {
  const file = path.join(ROOT, "assets", src);
  const meta = await sharp(file).metadata();
  const box = { left: c.left ?? 0, top: c.top ?? 0, width: meta.width - (c.left ?? 0) - (c.right ?? 0), height: meta.height - (c.top ?? 0) - (c.bottom ?? 0) };
  await mkdir(path.join(ROOT, "public/media", dir), { recursive: true });
  const max = dir === "hero" ? 2400 : 1600;
  const info = await sharp(file).rotate().extract(box).resize({ width: max, height: max, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(ROOT, "public/media", dir, `${name}.jpg`));
  sizes[`/media/${dir}/${name}.jpg`] = [info.width, info.height];
}
for (const dir of DIRS) await mkdir(path.join(ROOT, "assets", dir), { recursive: true });
await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");

// Image de partage (Open Graph) 1200 × 630 : tant qu'il n'y a pas de photo de façade, une composition graphique
// (bleu acier, logo, voiture au trait), sans fausse photo.
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const WRENCH = "M2.46 21.5H9v5H2.46A7 7 0 0 0 15.7 26H41a2 2 0 0 0 0-4H15.7A7 7 0 0 0 2.46 21.5Z";
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1E3A56"/>
  <g transform="translate(560 250) scale(1.6)" fill="none" stroke="#FFFFFF" stroke-opacity="0.16" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 108h22a24 24 0 0 1 48 0h176a24 24 0 0 1 48 0h56V88l-9-15-47-9-47-32c-12-8-30-12-62-12h-44c-24 0-40 5-56 15L68 56l-34 9c-9 2-14 8-14 15Z"/>
    <path d="M106 60l28-27c6-4 14-6 24-6h34v33ZM202 60V27h26c14 0 24 3 34 10l26 23ZM196 60v44"/>
    <circle cx="66" cy="108" r="19"/><circle cx="66" cy="108" r="8"/><circle cx="290" cy="108" r="19"/><circle cx="290" cy="108" r="8"/>
  </g>
  <g transform="translate(80 92) scale(2.2)" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="24" r="21.5" stroke-width="2.6"/><circle cx="24" cy="24" r="16.8" stroke-width="1.3"/>
    <path d="${WRENCH}" transform="translate(24 24) rotate(-45) scale(0.7) translate(-22.5 -24)" stroke-width="2.4" stroke="#FF8A84"/>
  </g>
  <text x="80" y="300" fill="#FFFFFF" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="88" letter-spacing="2">GARAGE GAMAIN</text>
  <text x="82" y="352" fill="#A9BED3" font-family="Arial, sans-serif" font-weight="700" font-size="26" letter-spacing="5">MÉCANIQUE · CARROSSERIE · ENTRETIEN · AMIENS</text>
  <rect x="80" y="410" width="64" height="5" fill="#C5302B"/>
  <text x="80" y="480" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="32">Devis gratuit, réponse rapide</text>
  <text x="80" y="530" fill="#FFFFFF" fill-opacity="0.8" font-family="Arial, sans-serif" font-size="26">${site.address.street}, ${site.address.postalCode} ${site.address.city} · ${site.phone}</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));

// Icône Apple (180 × 180) depuis le favicon
await sharp(path.join(ROOT, "app/icon.svg"), { density: 400 }).resize(180, 180).png().toFile(path.join(ROOT, "app/apple-icon.png"));

console.log(`${PICKS.length} photo(s) prêtes, og.jpg et apple-icon.png générés`);

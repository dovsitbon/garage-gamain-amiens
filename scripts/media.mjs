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
const DIRS = ["raw", "hero", "atelier", "avant-apres", "equipe", "facade", "stock"];

// [fichier source (depuis assets/), dossier, nom, recadrage { top, bottom, left, right } en pixels retirés]
const PICKS = [
  // Vraies photos du garage (fiche Google Maps, contributions publiques) : la façade et son enseigne
  ["facade/facade-enseigne-precisium.jpg", "hero", "facade-enseigne-precisium", {}],
  ["facade/facade-chaussee-jules-ferry.jpg", "facade", "facade-vitrines-precisium", { left: 80, top: 420, right: 1170, bottom: 107 }],
  // Photos libres de droits (Unsplash) : illustrent un service, jamais présentées comme le garage. Voir PHOTOS-SOURCES.md
  ["stock/vidange.jpg", "services", "vidange", {}],
  ["stock/freins.jpg", "services", "freins", {}],
  ["stock/pneus.jpg", "services", "pneus", {}],
  ["stock/diagnostic.jpg", "services", "diagnostic", { top: 700, bottom: 600 }],
  ["stock/carrosserie-poncage.jpg", "services", "carrosserie-poncage", {}],
  ["stock/carrosserie-pare-chocs.jpg", "services", "carrosserie-pare-chocs", {}],
  ["stock/climatisation.jpg", "services", "climatisation", {}],
  ["stock/atelier-pont.jpg", "services", "atelier-pont", {}],
  ["stock/mecanicien-moteur.jpg", "services", "mecanicien-moteur", {}],
  // À remplacer par les photos prises sur place (atelier, équipe, avant / après), par exemple :
  // ["avant-apres/portiere-avant.jpg", "avant-apres", "portiere-avant", {}],
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

// Image de partage (Open Graph) 1200 × 630 : la vraie façade du garage, assombrie à gauche, avec le nom et l'adresse.
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const photo = await sharp(path.join(ROOT, "assets/facade/facade-enseigne-precisium.jpg")).resize(1200, 630, { fit: "cover", position: "centre" }).toBuffer();
const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#152B41" stop-opacity="0.95"/><stop offset="0.55" stop-color="#152B41" stop-opacity="0.78"/><stop offset="1" stop-color="#152B41" stop-opacity="0.1"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="250" fill="#FFFFFF" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="78" letter-spacing="1">GARAGE GAMAIN</text>
  <text x="74" y="300" fill="#A9BED3" font-family="Arial, sans-serif" font-weight="700" font-size="24" letter-spacing="4">MÉCANIQUE · CARROSSERIE · ENTRETIEN · AMIENS</text>
  <rect x="72" y="350" width="64" height="5" fill="#C5302B"/>
  <text x="72" y="420" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="32">Devis gratuit, réponse rapide</text>
  <text x="72" y="470" fill="#FFFFFF" fill-opacity="0.85" font-family="Arial, sans-serif" font-size="25">${site.address.street}, ${site.address.postalCode} ${site.address.city}</text>
  <text x="72" y="510" fill="#FFFFFF" fill-opacity="0.85" font-family="Arial, sans-serif" font-size="25">${site.phone}</text>
</svg>`;
await sharp(photo).composite([{ input: Buffer.from(overlay) }]).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));

// Icône Apple (180 × 180) depuis le favicon
await sharp(path.join(ROOT, "app/icon.svg"), { density: 400 }).resize(180, 180).png().toFile(path.join(ROOT, "app/apple-icon.png"));

console.log(`${PICKS.length} photo(s) prêtes, og.jpg et apple-icon.png générés`);

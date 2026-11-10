// Affichette A5 imprimable (PDF) avec QR code vers la demande de devis, à poser à l'accueil ou en vitrine.
//   npm run affichette   →   public/affichette-garage-gamain-a5.pdf
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const url = `${site.url}/fr/devis`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const PAPER = hex("#FAFAF8");
const INK = hex("#161616");
const STEEL = hex("#1E3A56");
const STEEL_LIGHT = hex("#A9BED3");
const RED = hex("#C5302B");
const MUTED = hex("#52565B");
const WHITE = hex("#FFFFFF");

const pdf = await PDFDocument.create();
pdf.setTitle("Garage Gamain : affichette A5");
pdf.setAuthor("Garage Gamain");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: PAPER });

const center = (text, font, size, y, color = INK, spacing = 0) => {
  const width = font.widthOfTextAtSize(text, size) + spacing * (text.length - 1);
  let x = (W - width) / 2;
  if (!spacing) return page.drawText(text, { x, y, size, font, color });
  for (const ch of text) {
    page.drawText(ch, { x, y, size, font, color });
    x += font.widthOfTextAtSize(ch, size) + spacing;
  }
};

// Bandeau bleu acier : emblème (roue + clé plate) et nom
const bandH = 190;
page.drawRectangle({ x: 0, y: H - bandH, width: W, height: bandH, color: STEEL });
const s = 1.15;
const ox = (W - 48 * s) / 2;
const oy = H - 30;
page.drawCircle({ x: W / 2, y: oy - 24 * s, size: 21.5 * s, borderColor: WHITE, borderWidth: 2.4 });
page.drawCircle({ x: W / 2, y: oy - 24 * s, size: 16.8 * s, borderColor: WHITE, borderWidth: 1.1 });
// Clé plate inclinée à 45°, tracée dans le repère du logo (viewBox 48)
const WRENCH = "M2.46 21.5H9v5H2.46A7 7 0 0 0 15.7 26H41a2 2 0 0 0 0-4H15.7A7 7 0 0 0 2.46 21.5Z";
const k = 0.7 * s;
const rot = (-45 * Math.PI) / 180;
// drawSvgPath ne fait pas de rotation : on précalcule les points de la clé (arcs approchés par des segments)
const pts = [];
const arc = (cx, cy, r, a0, a1, n = 14) => {
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
};
pts.push([2.46, 21.5], [9, 21.5], [9, 26.5], [2.46, 26.5]);
arc(9, 24, 7, Math.atan2(2.5, -6.54), Math.atan2(2, 6.7));
pts.push([41, 26]);
arc(41, 24, 2, Math.PI / 2, -Math.PI / 2, 6);
pts.push([15.7, 22]);
arc(9, 24, 7, Math.atan2(-2, 6.7), Math.atan2(-2.5, -6.54) - 2 * Math.PI);
const tr = ([x, y]) => {
  const dx = (x - 22.5) * k;
  const dy = (y - 24) * k;
  return [W / 2 + dx * Math.cos(rot) - dy * Math.sin(rot), oy - 24 * s - (dx * Math.sin(rot) + dy * Math.cos(rot))];
};
const T = pts.map(tr);
for (let i = 0; i < T.length; i++) {
  const a = T[i];
  const b = T[(i + 1) % T.length];
  page.drawLine({ start: { x: a[0], y: a[1] }, end: { x: b[0], y: b[1] }, thickness: 1.8, color: hex("#FF8A84") });
}

let y = H - 30 - 48 * s - 34;
center("GARAGE GAMAIN", bold, 30, y, WHITE, 1.2);
y -= 20;
center("MÉCANIQUE · CARROSSERIE · ENTRETIEN · AMIENS", bold, 8, y, STEEL_LIGHT, 1.6);

y = H - bandH - 50;
center("Un devis clair,", bold, 24, y, INK);
y -= 28;
center("une réparation rapide", bold, 24, y, INK);
y -= 14;
page.drawRectangle({ x: (W - 40) / 2, y: y - 4, width: 40, height: 3, color: RED });
y -= 26;
center("Entretien, vidange, freins, pneus, diagnostic,", sans, 11, y, MUTED);
y -= 15;
center("carrosserie et rayures, climatisation. Toutes marques.", sans, 11, y, MUTED);

// QR code vers la demande de devis
const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#161616", light: "#FAFAF8" }, errorCorrectionLevel: "M" });
const qr = await pdf.embedPng(qrPng);
const qrS = 104;
y -= 24 + qrS;
page.drawImage(qr, { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 18;
center("Devis gratuit : scannez, envoyez une photo", bold, 10, y, INK);
y -= 13;
center(url.replace(/^https?:\/\//, ""), sans, 8.5, y, STEEL);

// Pied : téléphone en grand, adresse, horaires
y -= 30;
center(site.phone, bold, 20, y, STEEL, 0.6);
y -= 17;
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`, sans, 9, y, INK);
y -= 13;
center("Du lundi au vendredi, 8 h 30 – 12 h et 13 h 45 – 18 h", sans, 9, y, INK);
y -= 13;
center(`${String(site.rating.value).replace(".", ",")}/5 sur Google (${site.rating.count} avis)`, sans, 8.5, y, MUTED);

const file = path.join(ROOT, "public/affichette-garage-gamain-a5.pdf");
await writeFile(file, await pdf.save());
console.log("affichette prête :", url);

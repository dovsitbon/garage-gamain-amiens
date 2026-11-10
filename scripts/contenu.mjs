// Génère CONTENU.md : tous les textes du site en français et en anglais, les tarifs et délais,
// pour relecture et validation par le garage.   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const fr = await json("locales/fr.json");
const en = await json("locales/en.json");
const tarifs = await json("data/tarifs.json");
const annonces = await json("data/annonces.json");
const horaires = await json("data/horaires.json");
const site = await json("data/site.json");

const out = [];
const w = (s = "") => out.push(s);
const strip = (s) => s.replace(/<br>/g, " ").replace(/<\/?em>/g, "*");

w("# Garage Gamain : contenu du site");
w();
w("Tous les textes du site, en français et en anglais, pour relecture avec le garage. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, durées, horaires, annonces, avis, photos et avant / après dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.");
w();
w(`Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « sur devis ») tant que le garage ne les a pas donnés. Les durées sont des ordres de grandeur **à valider**. La note Google (${site.rating.value}/5, ${site.rating.count} avis) est celle relevée le ${site.rating.asOf}. **Aucun avis n'est cité ni inventé** : le site reprend seulement les thèmes qui reviennent (prix, devis, réactivité, confiance, carrosserie, pannes). Les vrais avis s'ajoutent dans \`data/avis.json\`, avec l'accord du garage.`);
w();
w("## Titre du hero : 3 propositions");
w();
w("1. **Un devis clair, une réparation rapide** *(retenu, dans `hero.title`)*");
w("2. Le garage de confiance de la chaussée Jules Ferry");
w("3. Votre voiture entre de bonnes mains");
w();
w("Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).");
w();

w("## Tarifs et durées (`data/tarifs.json`)");
w();
for (const c of tarifs.categories) {
  w(`### ${c.name.fr} / ${c.name.en}`);
  w();
  w("| Prestation | Durée indicative | Prix « à partir de » |");
  w("|---|---|---|");
  for (const s of c.items) w(`| **${s.name.fr}**<br>*${s.name.en}* | ${s.delay ? `${s.delay.fr} (à valider)` : "à remplir"} | ${s.price == null ? "à remplir" : `${s.price} €`}${s.confirm ? " · **prestation à confirmer**" : ""} |`);
  w();
}

w("## Horaires (`data/horaires.json`)");
w();
const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
for (const d of [1, 2, 3, 4, 5, 6, 0]) {
  const r = horaires.week[String(d)];
  w(`- ${days[d]} : ${r ? r.map(([a, b]) => `${a} – ${b}`).join(", ") : d === 6 && horaires.saturdayToConfirm ? "**à confirmer**" : "fermé"}`);
}
w();
w(`Fermetures exceptionnelles : ${horaires.closures.map((c) => `${c.label.fr} (${c.from === c.to ? c.from : `${c.from} → ${c.to}`})`).join(", ")}.`);
w();

w("## Bandeau d'annonces (`data/annonces.json`)");
w();
w(`- **Par défaut** : ${annonces.default.text.fr} *(${annonces.default.text.en})*`);
for (const a of annonces.items) w(`- **${a.from} → ${a.to}** : ${a.text.fr} *(${a.text.en})* — lien « ${a.link.fr} »`);
w();

w("## Textes du site");
w();
w("Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation du garage.");
w();
const flags = {
  "hero.lead": "à valider (toutes marques)",
  "strip.items.1": "à valider (délai de rappel)",
  "strip.items.2": "à valider (toutes marques, utilitaires)",
  "blocks.entretien": "à valider (garantie constructeur)",
  "blocks.confiance": "à valider (pièces montrées)",
  "infos.accessText": "à valider (accès, stationnement)",
  "faq.items.0": "à valider (rendez-vous)",
  "faq.items.1": "à valider (samedi)",
  "faq.items.4": "à valider (moyens de paiement)",
  "faq.items.5": "à valider (stationnement)",
  "pages.carrosserie.related": "à valider (assurance, expert)",
  "pages.carrosserie.list": "à valider (peinture : cabine ?)",
  "legal.editorText": "à remplir (raison sociale)",
};
const flagOf = (key) => Object.entries(flags).find(([k]) => key === k || key.startsWith(`${k}.`))?.[1];

const SKIP = new Set(["alt", "days"]);
function walk(a, b, key = "") {
  if (typeof a === "string") {
    const f = flagOf(key);
    w(`| \`${key}\` | ${strip(a).replace(/\n/g, "<br>")} | ${strip(b ?? "").replace(/\n/g, "<br>")} |${f ? ` **${f}** |` : " |"}`);
    return;
  }
  if (Array.isArray(a)) return a.forEach((x, i) => walk(x, b?.[i], `${key}.${i}`));
  for (const k of Object.keys(a)) walk(a[k], b?.[k], key ? `${key}.${k}` : k);
}
for (const section of Object.keys(fr)) {
  if (SKIP.has(section)) continue;
  w(`### ${section}`);
  w();
  w("| Clé | Français | English | |");
  w("|---|---|---|---|");
  walk(fr[section], en[section], section);
  w();
}

w("## Textes alternatifs des photos");
w();
w("| Photo | Français | English |");
w("|---|---|---|");
for (const k of Object.keys(fr.alt)) w(`| ${k} | ${fr.alt[k]} | ${en.alt[k]} |`);
w();

await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n"));
console.log("CONTENU.md écrit");

# Garage Gamain : contenu du site

Tous les textes du site, en français et en anglais, pour relecture avec le garage. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, durées, horaires, annonces, avis, photos et avant / après dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.

Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « sur devis ») tant que le garage ne les a pas donnés. Les durées sont des ordres de grandeur **à valider**. La note Google (4.1/5, 123 avis) est celle relevée le 2026-11-10. **Aucun avis n'est cité ni inventé** : le site reprend seulement les thèmes qui reviennent (prix, devis, réactivité, confiance, carrosserie, pannes). Les vrais avis s'ajoutent dans `data/avis.json`, avec l'accord du garage.

## Titre du hero : 3 propositions

1. **Un devis clair, une réparation rapide** *(retenu, dans `hero.title`)*
2. Le garage de confiance de la chaussée Jules Ferry
3. Votre voiture entre de bonnes mains

Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).

## Tarifs et durées (`data/tarifs.json`)

### Entretien & vidange / Servicing & oil change

| Prestation | Durée indicative | Prix « à partir de » |
|---|---|---|
| **Vidange et filtre à huile**<br>*Oil and oil filter change* | Environ 1 h (à valider) | à remplir |
| **Révision selon le carnet constructeur**<br>*Manufacturer-schedule service* | 2 à 3 h (à valider) | à remplir |
| **Filtres à air, habitacle, carburant**<br>*Air, cabin and fuel filters* | Moins d'1 h (à valider) | à remplir |
| **Kit de distribution**<br>*Timing belt kit* | Dans la journée (à valider) | à remplir |
| **Batterie (contrôle et remplacement)**<br>*Battery (test and replacement)* | 30 min (à valider) | à remplir |

### Freinage / Brakes

| Prestation | Durée indicative | Prix « à partir de » |
|---|---|---|
| **Plaquettes de frein (un essieu)**<br>*Brake pads (one axle)* | Environ 1 h (à valider) | à remplir |
| **Disques et plaquettes (un essieu)**<br>*Discs and pads (one axle)* | Environ 2 h (à valider) | à remplir |
| **Purge du liquide de frein**<br>*Brake fluid flush* | Environ 1 h (à valider) | à remplir |

### Pneus / Tyres

| Prestation | Durée indicative | Prix « à partir de » |
|---|---|---|
| **Montage et équilibrage (la paire)**<br>*Fitting and balancing (pair)* | Environ 45 min (à valider) | à remplir |
| **Réparation de crevaison**<br>*Puncture repair* | 30 min (à valider) | à remplir |
| **Géométrie, parallélisme**<br>*Wheel alignment* | Environ 1 h (à valider) | à remplir · **prestation à confirmer** |

### Diagnostic & panne / Diagnostics & breakdowns

| Prestation | Durée indicative | Prix « à partir de » |
|---|---|---|
| **Diagnostic électronique (valise)**<br>*Electronic diagnostic scan* | Environ 1 h (à valider) | à remplir |
| **Voyant allumé, recherche de panne**<br>*Warning light, fault finding* | Selon la panne (à valider) | à remplir |
| **Embrayage**<br>*Clutch* | 1 à 2 jours (à valider) | à remplir |
| **Échappement, silencieux**<br>*Exhaust, silencer* | Selon les pièces (à valider) | à remplir |
| **Préparation et contre-visite du contrôle technique**<br>*MOT preparation and re-test repairs* | Selon les points relevés (à valider) | à remplir |

### Carrosserie / Bodywork

| Prestation | Durée indicative | Prix « à partir de » |
|---|---|---|
| **Rayure, retouche de peinture**<br>*Scratch, paint touch-up* | Selon l'étendue (à valider) | à remplir |
| **Choc, bosse**<br>*Dent, impact* | Sur devis (à valider) | à remplir |
| **Pare-chocs (réparation ou remplacement)**<br>*Bumper (repair or replacement)* | 1 à 3 jours (à valider) | à remplir |
| **Peinture d'un élément**<br>*Single panel respray* | 2 à 4 jours (à valider) | à remplir · **prestation à confirmer** |
| **Rénovation des optiques de phare**<br>*Headlight restoration* | Environ 1 h (à valider) | à remplir |

### Climatisation / Air conditioning

| Prestation | Durée indicative | Prix « à partir de » |
|---|---|---|
| **Recharge de climatisation**<br>*Air-con re-gas* | Environ 1 h (à valider) | à remplir |
| **Contrôle, recherche de fuite**<br>*System check, leak finding* | Environ 1 h (à valider) | à remplir |

## Horaires (`data/horaires.json`)

- lundi : 08:30 – 12:00, 13:45 – 18:00
- mardi : 08:30 – 12:00, 13:45 – 18:00
- mercredi : 08:30 – 12:00, 13:45 – 18:00
- jeudi : 08:30 – 12:00, 13:45 – 18:00
- vendredi : 08:30 – 12:00, 13:45 – 18:00
- samedi : **à confirmer**
- dimanche : fermé

Fermetures exceptionnelles : Armistice (2026-11-11), Noël (2026-12-25), Jour de l'an (2027-01-01).

## Bandeau d'annonces (`data/annonces.json`)

- **Par défaut** : Devis gratuit, réponse rapide. Envoyez-nous une photo du dommage, on vous rappelle. *(Free quote, quick reply. Send us a photo of the damage and we'll call you back.)*
- **2026-12-18 → 2026-12-25** : Le garage sera fermé le vendredi 25 décembre. Pensez à prendre rendez-vous avant les fêtes. *(The garage will be closed on Friday 25 December. Book your slot before the holidays.)* — lien « Horaires »
- **2026-12-26 → 2027-01-01** : Le garage sera fermé le vendredi 1er janvier. Bonne route et bonnes fêtes. *(The garage will be closed on Friday 1 January. Safe travels and happy holidays.)* — lien « Horaires »

## Textes du site

Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation du garage.

### meta

| Clé | Français | English | |
|---|---|---|---|
| `meta.title` | Garage, mécanique et carrosserie à Amiens, chaussée Jules Ferry | Garage Gamain | Garage, mechanics and car body repair in Amiens, chaussée Jules Ferry | Garage Gamain | |
| `meta.description` | Garage Gamain, 376 chaussée Jules Ferry à Amiens : entretien et vidange, freins, pneus, diagnostic et pannes, carrosserie et rayures, climatisation. Devis gratuit, réponse rapide. 4,1/5 sur Google. | Garage Gamain, 376 chaussée Jules Ferry, Amiens: servicing and oil changes, brakes, tyres, diagnostics and breakdowns, bodywork and scratches, air conditioning. Free quote, quick reply. Rated 4.1/5 on Google. | |
| `meta.ogAlt` | Garage Gamain, mécanique et carrosserie, 376 chaussée Jules Ferry à Amiens | Garage Gamain, mechanics and bodywork, 376 chaussée Jules Ferry, Amiens | |

### nav

| Clé | Français | English | |
|---|---|---|---|
| `nav.mecanique` | Mécanique | Mechanics | |
| `nav.carrosserie` | Carrosserie | Bodywork | |
| `nav.entretien` | Entretien | Servicing | |
| `nav.tarifs` | Tarifs | Prices | |
| `nav.infos` | Infos | Info | |
| `nav.devis` | Demander un devis | Request a quote | |
| `nav.devisShort` | Devis | Quote | |
| `nav.call` | Appeler | Call | |
| `nav.menu` | Menu | Menu | |
| `nav.close` | Fermer le menu | Close menu | |
| `nav.home` | Garage Gamain, accueil | Garage Gamain, home | |
| `nav.lang` | Langue | Language | |
| `nav.skip` | Aller au contenu | Skip to content | |

### intro

| Clé | Français | English | |
|---|---|---|---|
| `intro.skip` | Passer | Skip | |

### announce

| Clé | Français | English | |
|---|---|---|---|
| `announce.close` | Fermer le bandeau | Close banner | |

### status

| Clé | Français | English | |
|---|---|---|---|
| `status.open` | Ouvert maintenant | Open now | |
| `status.closed` | Fermé | Closed | |
| `status.until` | jusqu’à {time} | until {time} | |
| `status.reopens` | réouverture {day} à {time} | opens {day} at {time} | |
| `status.today` | aujourd’hui | today | |
| `status.tomorrow` | demain | tomorrow | |

### rating

| Clé | Français | English | |
|---|---|---|---|
| `rating.label` | {value}/5 sur Google | {value}/5 on Google | |
| `rating.count` | {count} avis | {count} reviews | |
| `rating.asOf` | Note relevée en {date} | Rating checked in {date} | |

### hero

| Clé | Français | English | |
|---|---|---|---|
| `hero.eyebrow` | Mécanique · Carrosserie · Entretien · Amiens | Mechanics · Bodywork · Servicing · Amiens | |
| `hero.title` | Un devis clair, une réparation rapide | A clear quote, a quick repair | |
| `hero.lead` | Le garage de la chaussée Jules Ferry entretient et répare toutes les marques. On regarde, on vous explique, on vous donne le prix avant de commencer. | The garage on chaussée Jules Ferry services and repairs every make. We take a look, explain what’s wrong and give you the price before we start. | **à valider (toutes marques)** |
| `hero.field` | Votre immatriculation ou votre modèle | Your registration or car model | |
| `hero.fieldPh` | AB-123-CD ou Clio 4 de 2016 | AB-123-CD or 2016 Clio | |
| `hero.devis` | Demander un devis | Request a quote | |
| `hero.call` | Appeler | Call | |
| `hero.tarifs` | Voir les tarifs | See prices | |
| `hero.photo` | Photo de l’atelier à venir | Workshop photo coming soon | |

### tiles

| Clé | Français | English | |
|---|---|---|---|
| `tiles.eyebrow` | Ce qu’on fait | What we do | |
| `tiles.title` | Mécanique, entretien et carrosserie, sous le même toit | Mechanics, servicing and bodywork under one roof | |
| `tiles.from` | à partir de {price} | from {price} | |
| `tiles.onQuote` | Prix sur devis | Price on quote | |
| `tiles.items.entretien.title` | Entretien & vidange | Servicing & oil change | |
| `tiles.items.entretien.text` | Vidange, filtres, révision selon le carnet, distribution, batterie. | Oil change, filters, scheduled service, timing belt, battery. | |
| `tiles.items.freins.title` | Freins | Brakes | |
| `tiles.items.freins.text` | Plaquettes, disques, liquide de frein. On vous montre l’usure. | Pads, discs, brake fluid. We show you the wear. | |
| `tiles.items.pneus.title` | Pneus | Tyres | |
| `tiles.items.pneus.text` | Montage, équilibrage, crevaison. Pneus été, hiver ou 4 saisons. | Fitting, balancing, punctures. Summer, winter or all-season. | |
| `tiles.items.diagnostic.title` | Diagnostic & panne | Diagnostics & breakdowns | |
| `tiles.items.diagnostic.text` | Voyant allumé, bruit suspect, voiture qui ne démarre plus. | Warning light on, odd noise, car that won’t start. | |
| `tiles.items.carrosserie.title` | Carrosserie & rayures | Bodywork & scratches | |
| `tiles.items.carrosserie.text` | Rayures, bosses, pare-chocs, retouches de peinture. | Scratches, dents, bumpers, paint touch-ups. | |
| `tiles.items.clim.title` | Climatisation | Air conditioning | |
| `tiles.items.clim.text` | Recharge, contrôle du circuit, recherche de fuite. | Re-gas, system check, leak finding. | |

### strip

| Clé | Français | English | |
|---|---|---|---|
| `strip.label` | En bref | At a glance | |
| `strip.items.0.title` | Devis gratuit | Free quote | |
| `strip.items.0.text` | Le prix vous est donné avant toute intervention. | You get the price before any work starts. | |
| `strip.items.1.title` | Réponse rapide | Quick reply | **à valider (délai de rappel)** |
| `strip.items.1.text` | On vous rappelle vite, avec un prix et un délai. | We call you back fast, with a price and a time frame. | **à valider (délai de rappel)** |
| `strip.items.2.title` | Toutes marques | Every make | **à valider (toutes marques, utilitaires)** |
| `strip.items.2.text` | Citadines, familiales, utilitaires, essence ou diesel. | Small cars, family cars, vans, petrol or diesel. | **à valider (toutes marques, utilitaires)** |
| `strip.items.3.title` | 03 22 50 36 36 | 03 22 50 36 36 | |
| `strip.items.3.text` | Une question, un bruit bizarre ? Appelez le garage. | A question, a strange noise? Call the garage. | |

### beforeAfter

| Clé | Français | English | |
|---|---|---|---|
| `beforeAfter.eyebrow` | Avant / après | Before / after | |
| `beforeAfter.title` | Une rayure, un choc : le résultat en photos | A scratch, a dent: see the result | |
| `beforeAfter.lead` | Faites glisser le curseur pour comparer. Les photos sont prises au garage, avant et après réparation. | Drag the slider to compare. Photos are taken at the garage, before and after the repair. | |
| `beforeAfter.before` | Avant | Before | |
| `beforeAfter.after` | Après | After | |
| `beforeAfter.handle` | Comparer avant et après | Compare before and after | |
| `beforeAfter.soon` | Les premières photos avant / après arrivent. Faites glisser le curseur : c’est ici que vous verrez le travail de carrosserie. | The first before / after photos are on their way. Drag the slider: this is where you’ll see the bodywork. | |
| `beforeAfter.slotBefore` | Photo avant réparation | Photo before repair | |
| `beforeAfter.slotAfter` | Photo après réparation | Photo after repair | |
| `beforeAfter.slots.0` | Rayure sur portière | Scratched door | |
| `beforeAfter.slots.1` | Pare-chocs enfoncé | Dented bumper | |

### tarifs

| Clé | Français | English | |
|---|---|---|---|
| `tarifs.eyebrow` | Tarifs & durées | Prices & times | |
| `tarifs.title` | Des prix annoncés avant de commencer | Prices given before we start | |
| `tarifs.lead` | Les prix dépendent du modèle et des pièces. Donnez-nous votre immatriculation : on vous fait un devis précis, gratuit, avant toute intervention. | Prices depend on the model and the parts. Give us your registration and we’ll send a precise, free quote before any work. | |
| `tarifs.note` | Durées d’immobilisation indicatives, selon le modèle et la disponibilité des pièces. | Indicative time off the road, depending on the model and parts availability. | |
| `tarifs.head.service` | Prestation | Service | |
| `tarifs.head.price` | Prix indicatif | Indicative price | |
| `tarifs.head.delay` | Durée | Time | |
| `tarifs.from` | à partir de {price} | from {price} | |
| `tarifs.onQuote` | sur devis | on quote | |
| `tarifs.confirm` | à confirmer | to be confirmed | |
| `tarifs.ask` | Demander un devis | Request a quote | |

### blocks

| Clé | Français | English | |
|---|---|---|---|
| `blocks.entretien.eyebrow` | Entretien | Servicing | **à valider (garantie constructeur)** |
| `blocks.entretien.title` | L’entretien, sans perdre votre garantie | Servicing that keeps your warranty | **à valider (garantie constructeur)** |
| `blocks.entretien.text` | Vidange, filtres, révision selon le carnet du constructeur : l’entretien fait chez nous préserve la garantie de votre voiture, avec des pièces de qualité équivalente à l’origine. On vous dit ce qui est urgent et ce qui peut attendre. | Oil change, filters, a service by the manufacturer’s schedule: servicing done here keeps your car’s warranty, with parts of matching quality. We tell you what’s urgent and what can wait. | **à valider (garantie constructeur)** |
| `blocks.entretien.cta` | Prendre rendez-vous | Book a slot | **à valider (garantie constructeur)** |
| `blocks.carrosserie.eyebrow` | Carrosserie | Bodywork | |
| `blocks.carrosserie.title` | Une rayure, une bosse ? Envoyez une photo | A scratch, a dent? Send a photo | |
| `blocks.carrosserie.text` | Un coup de portière sur un parking, un pare-chocs frotté contre un poteau, une rayure le long de l’aile : prenez une ou deux photos avec votre téléphone, on vous dit ce qui est possible et à quel prix, avant même que vous passiez. | A door ding in a car park, a bumper scraped on a post, a scratch along the wing: take one or two photos with your phone and we’ll tell you what can be done and how much, before you even come in. | |
| `blocks.carrosserie.cta` | Envoyer des photos | Send photos | |
| `blocks.confiance.eyebrow` | Confiance | Trust | **à valider (pièces montrées)** |
| `blocks.confiance.title` | Un devis clair, des pièces expliquées | A clear quote, parts explained | **à valider (pièces montrées)** |
| `blocks.confiance.text` | Avant de toucher à votre voiture, on vous explique la panne, les pièces à changer et le prix. Si on trouve autre chose en cours de route, on vous appelle d’abord. Et les pièces remplacées, on vous les montre si vous le souhaitez. | Before we touch your car, we explain the fault, the parts to replace and the price. If we find something else along the way, we call you first. And we’re happy to show you the old parts. | **à valider (pièces montrées)** |
| `blocks.confiance.cta` | Demander un devis | Request a quote | **à valider (pièces montrées)** |

### reviews

| Clé | Français | English | |
|---|---|---|---|
| `reviews.eyebrow` | Avis Google | Google reviews | |
| `reviews.title` | Ce qui revient dans les avis | What comes up in reviews | |
| `reviews.themes.0` | Des prix corrects | Fair prices | |
| `reviews.themes.1` | Des devis clairs | Clear quotes | |
| `reviews.themes.2` | Un garage réactif | A responsive garage | |
| `reviews.themes.3` | Un garagiste de confiance | A mechanic you can trust | |
| `reviews.themes.4` | Carrosserie et rayures | Bodywork and scratches | |
| `reviews.themes.5` | Pannes réglées | Breakdowns sorted | |
| `reviews.cta` | Lire les avis sur Google | Read the reviews on Google | |

### infos

| Clé | Français | English | |
|---|---|---|---|
| `infos.eyebrow` | Infos pratiques | Practical info | |
| `infos.title` | Passez au garage | Come to the garage | |
| `infos.address` | Adresse | Address | |
| `infos.route` | Itinéraire | Directions | |
| `infos.phone` | Téléphone | Phone | |
| `infos.hours` | Horaires | Opening hours | |
| `infos.closedDay` | Fermé | Closed | |
| `infos.toConfirm` | à confirmer | to be confirmed | |
| `infos.closures` | Fermetures à venir | Upcoming closures | |
| `infos.access` | Accès et stationnement | Access and parking | |
| `infos.accessText` | Sur la chaussée Jules Ferry, l’axe qui part vers Longueau, à l’est d’Amiens. Stationnement devant le garage le temps de déposer la voiture, ou dans les rues voisines. Si la voiture reste la journée, on vous dit où la laisser. | On chaussée Jules Ferry, the road heading out towards Longueau, east of Amiens. Park in front of the garage while you drop the car off, or in the nearby streets. If the car stays for the day, we’ll tell you where to leave it. | **à valider (accès, stationnement)** |
| `infos.mapTitle` | Plan d’accès au Garage Gamain, 376 chaussée Jules Ferry à Amiens | Map to Garage Gamain, 376 chaussée Jules Ferry, Amiens | |

### faq

| Clé | Français | English | |
|---|---|---|---|
| `faq.eyebrow` | Questions fréquentes | FAQ | |
| `faq.title` | Avant de venir | Before you come | |
| `faq.items.0.q` | Faut-il prendre rendez-vous ? | Do I need to book? | **à valider (rendez-vous)** |
| `faq.items.0.a` | Pour un entretien ou une réparation, oui : appelez le 03 22 50 36 36 ou faites une demande en ligne, on vous propose un créneau. Pour un diagnostic rapide ou un conseil, passez pendant les heures d’ouverture. | For servicing or a repair, yes: call 03 22 50 36 36 or send a request online and we’ll offer you a slot. For a quick check or some advice, drop by during opening hours. | **à valider (rendez-vous)** |
| `faq.items.1.q` | Quels sont vos horaires ? | What are your opening hours? | **à valider (samedi)** |
| `faq.items.1.a` | Du lundi au vendredi, de 8 h 30 à 12 h et de 13 h 45 à 18 h. Les horaires du samedi sont à confirmer : appelez avant de passer. | Monday to Friday, 8:30am to 12pm and 1:45pm to 6pm. Saturday hours are to be confirmed: please call before coming. | **à valider (samedi)** |
| `faq.items.2.q` | Le devis est-il gratuit ? | Is the quote free? | |
| `faq.items.2.a` | Oui. On vous donne le prix avant toute intervention, et rien n’est fait sans votre accord. Pour la carrosserie, une ou deux photos suffisent souvent pour une première estimation. | Yes. You get the price before any work, and nothing is done without your go-ahead. For bodywork, one or two photos are often enough for a first estimate. | |
| `faq.items.3.q` | Combien de temps garde-t-on ma voiture ? | How long will you keep my car? | |
| `faq.items.3.a` | Une vidange ou des plaquettes se font en une à deux heures. Une distribution, un embrayage ou de la carrosserie demandent souvent une à plusieurs journées, selon les pièces. On vous annonce la durée au moment du devis. | An oil change or brake pads take one to two hours. A timing belt, a clutch or bodywork often take one or more days, depending on parts. We give you the time frame with the quote. | |
| `faq.items.4.q` | Quels moyens de paiement acceptez-vous ? | How can I pay? | **à valider (moyens de paiement)** |
| `faq.items.4.a` | Carte bancaire et espèces, à confirmer avec le garage. Le paiement se fait à la restitution du véhicule. | Card and cash, to be confirmed with the garage. You pay when you collect the car. | **à valider (moyens de paiement)** |
| `faq.items.5.q` | Où se garer en arrivant ? | Where do I park when I arrive? | **à valider (stationnement)** |
| `faq.items.5.a` | Devant le garage, au 376 chaussée Jules Ferry, le temps de déposer la voiture et les clés. Si elle reste plusieurs jours, on vous indique où la laisser. | In front of the garage at 376 chaussée Jules Ferry, while you drop off the car and keys. If it stays several days, we’ll tell you where to leave it. | **à valider (stationnement)** |

### footer

| Clé | Français | English | |
|---|---|---|---|
| `footer.tagline` | Mécanique, entretien et carrosserie toutes marques, chaussée Jules Ferry à Amiens. Devis gratuit, réponse rapide. | Mechanics, servicing and bodywork for every make, on chaussée Jules Ferry in Amiens. Free quote, quick reply. | |
| `footer.contact` | Garage | Garage | |
| `footer.pages` | Pages | Pages | |
| `footer.days` | Du lundi au vendredi<br>8 h 30 – 12 h, 13 h 45 – 18 h | Monday to Friday<br>8:30am – 12pm, 1:45pm – 6pm | |
| `footer.closed` | Samedi : à confirmer · Dimanche : fermé | Saturday: to be confirmed · Sunday: closed | |
| `footer.rights` | Garage Gamain Cédric, Amiens | Garage Gamain Cédric, Amiens | |
| `footer.legal` | Mentions légales | Legal notice | |

### devis

| Clé | Français | English | |
|---|---|---|---|
| `devis.eyebrow` | Devis gratuit | Free quote | |
| `devis.title` | Demander un devis | Request a quote | |
| `devis.lead` | Indiquez votre voiture et ce qui ne va pas, ajoutez 1 à 3 photos si c’est de la carrosserie. Le garage vous rappelle avec un prix et un délai. Rien n’est fait sans votre accord. | Tell us about your car and what’s wrong, and add 1 to 3 photos if it’s bodywork. The garage calls you back with a price and a time frame. Nothing is done without your go-ahead. | |
| `devis.preferCall` | Plus simple au téléphone ? | Easier by phone? | |
| `devis.sections.vehicle` | Votre véhicule | Your car | |
| `devis.sections.need` | Votre besoin | What you need | |
| `devis.sections.photos` | Les photos | Photos | |
| `devis.sections.date` | La date souhaitée | Preferred date | |
| `devis.sections.contact` | Vos coordonnées | Your details | |
| `devis.fields.vehicle` | Immatriculation ou modèle | Registration or model | |
| `devis.fields.vehiclePh` | AB-123-CD ou Peugeot 208 de 2017 | AB-123-CD or 2017 Peugeot 208 | |
| `devis.fields.km` | Kilométrage | Mileage (km) | |
| `devis.fields.kmPh` | Ex. : 92 000 | E.g. 92,000 | |
| `devis.fields.needs.entretien` | Entretien | Servicing | |
| `devis.fields.needs.panne` | Panne | Breakdown | |
| `devis.fields.needs.carrosserie` | Carrosserie | Bodywork | |
| `devis.fields.needs.autre` | Autre | Other | |
| `devis.fields.detailsLabel` | Plus précisément | More precisely | |
| `devis.fields.detailsHint` | plusieurs choix possibles | choose as many as you like | |
| `devis.fields.details` | Décrivez ce qui se passe | Describe what’s happening | |
| `devis.fields.detailsPh` | Ex. : voyant moteur orange depuis hier, bruit au freinage à l’avant, rayure sur la portière arrière gauche… | E.g. orange engine light since yesterday, noise when braking at the front, scratch on the rear left door… | |
| `devis.fields.photos` | Ajouter des photos | Add photos | |
| `devis.fields.photosHint` | Surtout pour la carrosserie : une vue d’ensemble, puis le détail du dommage. | Especially for bodywork: one overall shot, then a close-up of the damage. | |
| `devis.fields.photoRemove` | Retirer la photo | Remove photo | |
| `devis.fields.photosCount` | {count}/3 | {count}/3 | |
| `devis.fields.delays.asap` | Dès que possible | As soon as possible | |
| `devis.fields.delays.semaine` | Cette semaine | This week | |
| `devis.fields.delays.date` | À une date précise : | On a specific date: | |
| `devis.fields.date` | Date souhaitée | Preferred date | |
| `devis.fields.name` | Nom | Name | |
| `devis.fields.phone` | Téléphone | Phone | |
| `devis.fields.email` | E-mail | Email | |
| `devis.fields.emailHint` | (pour recevoir la confirmation) | (to receive a confirmation) | |
| `devis.fields.message` | Message | Message | |
| `devis.fields.messagePh` | Une précision, une disponibilité, une question… | Any detail, when you’re available, a question… | |
| `devis.details.vidange` | Vidange | Oil change | |
| `devis.details.revision` | Révision | Service | |
| `devis.details.freins` | Freins | Brakes | |
| `devis.details.pneus` | Pneus | Tyres | |
| `devis.details.distribution` | Distribution | Timing belt | |
| `devis.details.clim` | Climatisation | Air conditioning | |
| `devis.details.batterie` | Batterie | Battery | |
| `devis.details.voyant` | Voyant allumé | Warning light | |
| `devis.details.demarrage` | Ne démarre plus | Won’t start | |
| `devis.details.bruit` | Bruit anormal | Odd noise | |
| `devis.details.fumee` | Fumée, odeur | Smoke, smell | |
| `devis.details.embrayage` | Embrayage | Clutch | |
| `devis.details.controle-technique` | Contre-visite CT | MOT re-test | |
| `devis.details.rayure` | Rayure | Scratch | |
| `devis.details.bosse` | Bosse, choc | Dent, impact | |
| `devis.details.pare-chocs` | Pare-chocs | Bumper | |
| `devis.details.retroviseur` | Rétroviseur | Wing mirror | |
| `devis.details.phares` | Phares | Headlights | |
| `devis.details.peinture` | Peinture | Paint | |
| `devis.errors.vehicle` | Indiquez l’immatriculation ou le modèle. | Please enter the registration or model. | |
| `devis.errors.need` | Choisissez votre besoin. | Please choose what you need. | |
| `devis.errors.details` | Dites-nous ce qu’il faut faire (une case ou quelques mots). | Tell us what needs doing (tick a box or write a few words). | |
| `devis.errors.name` | Indiquez votre nom. | Please enter your name. | |
| `devis.errors.phone` | Indiquez un numéro de téléphone valide. | Please enter a valid phone number. | |
| `devis.errors.email` | Cette adresse e-mail ne semble pas valide. | This email address doesn’t look right. | |
| `devis.errors.photo` | Cette photo n’a pas pu être lue. Essayez une autre image. | This photo couldn’t be read. Try another image. | |
| `devis.errors.generic` | L’envoi n’a pas abouti. Réessayez, ou appelez le garage au 03 22 50 36 36. | Sending failed. Please try again, or call the garage on 03 22 50 36 36. | |
| `devis.submit` | Envoyer la demande | Send request | |
| `devis.sending` | Envoi… | Sending… | |
| `devis.privacy` | Vos coordonnées servent uniquement à répondre à cette demande. Elles ne sont ni revendues ni utilisées pour de la publicité. | Your details are only used to answer this request. They are never sold or used for advertising. | |
| `devis.success.title` | Demande bien reçue | Request received | |
| `devis.success.text` | Le garage regarde votre demande et vous rappelle avec un prix et un délai. | The garage will look at your request and call you back with a price and a time frame. | |
| `devis.success.email` | Un récapitulatif vient de vous être envoyé par e-mail. | A summary has just been sent to your email. | |
| `devis.success.notNotified` | Pour être sûr que le garage l’a bien reçue, appelez directement : | To be sure the garage got it, call directly: | |
| `devis.success.again` | Faire une autre demande | Send another request | |
| `devis.message.title` | Nouvelle demande de devis | New quote request | |
| `devis.message.vehicle` | Véhicule | Car | |
| `devis.message.km` | Kilométrage | Mileage | |
| `devis.message.need` | Besoin | Need | |
| `devis.message.details` | Précisément | Details | |
| `devis.message.description` | Description | Description | |
| `devis.message.date` | Date souhaitée | Preferred date | |
| `devis.message.name` | Nom | Name | |
| `devis.message.phone` | Téléphone | Phone | |
| `devis.message.email` | E-mail | Email | |
| `devis.message.message` | Message | Message | |
| `devis.message.photos` | Photos jointes | Photos attached | |
| `devis.email.subject` | Demande de devis | Quote request | |
| `devis.email.confirmSubject` | Votre demande de devis, Garage Gamain | Your quote request, Garage Gamain | |
| `devis.email.confirmIntro` | Bonjour {name},<br><br>Merci pour votre demande. Voici ce que nous avons reçu : | Hello {name},<br><br>Thank you for your request. Here is what we received: | |
| `devis.email.confirmOutro` | Nous vous rappelons avec un prix et un délai. Pour toute question : {phone}, du lundi au vendredi, 8 h 30 – 12 h et 13 h 45 – 18 h.<br><br>Garage Gamain<br>376 chaussée Jules Ferry, 80090 Amiens | We’ll call you back with a price and a time frame. Any question: {phone}, Monday to Friday, 8:30am – 12pm and 1:45pm – 6pm.<br><br>Garage Gamain<br>376 chaussée Jules Ferry, 80090 Amiens, France | |

### pages

| Clé | Français | English | |
|---|---|---|---|
| `pages.carrosserie.metaTitle` | Carrosserie à Amiens, rayures et chocs | Garage Gamain, chaussée Jules Ferry | Car body repair in Amiens, scratches and dents | Garage Gamain | |
| `pages.carrosserie.metaDescription` | Carrosserie à Amiens : rayures, bosses, pare-chocs, retouches de peinture, phares. Devis gratuit sur photo, réponse rapide. Garage Gamain, 376 chaussée Jules Ferry. | Car body repair in Amiens: scratches, dents, bumpers, paint touch-ups, headlights. Free quote from a photo, quick reply. Garage Gamain, 376 chaussée Jules Ferry. | |
| `pages.carrosserie.eyebrow` | Carrosserie · Amiens | Bodywork · Amiens | |
| `pages.carrosserie.title` | Carrosserie à Amiens | Car body repair in Amiens | |
| `pages.carrosserie.intro` | Une rayure sur la portière, un pare-chocs enfoncé, une bosse de parking : envoyez une photo, on vous dit ce qui se répare et à quel prix. Toutes marques, chaussée Jules Ferry. | A scratched door, a dented bumper, a car park ding: send a photo and we’ll tell you what can be repaired and how much. Every make, on chaussée Jules Ferry. | |
| `pages.carrosserie.cta` | Envoyer des photos | Send photos | |
| `pages.carrosserie.listTitle` | Ce qu’on répare | What we repair | |
| `pages.carrosserie.list.0.title` | Rayures | Scratches | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.0.text` | Rayure superficielle ou jusqu’à la tôle : retouche, polissage ou reprise de peinture selon la profondeur. | Surface scratch or down to the metal: touch-up, polishing or repaint depending on the depth. | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.1.title` | Bosses et chocs | Dents and impacts | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.1.text` | Portière, aile, capot : on redresse quand c’est possible, on remplace quand c’est plus raisonnable. | Door, wing, bonnet: we straighten when we can, and replace when that makes more sense. | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.2.title` | Pare-chocs | Bumpers | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.2.text` | Fissuré, enfoncé, décroché : réparation, fixation ou remplacement. | Cracked, pushed in or hanging off: repair, refitting or replacement. | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.3.title` | Phares et rétroviseurs | Headlights and mirrors | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.list.3.text` | Optiques jaunies rénovées, rétroviseurs et coques remplacés. | Yellowed lenses restored, mirrors and covers replaced. | **à valider (peinture : cabine ?)** |
| `pages.carrosserie.howTitle` | Comment ça se passe | How it works | |
| `pages.carrosserie.how.0.title` | Vous envoyez 1 à 3 photos | Send 1 to 3 photos | |
| `pages.carrosserie.how.0.text` | Une vue d’ensemble de la voiture, puis le dommage de près, à la lumière du jour si possible. | One shot of the whole car, then a close-up of the damage, in daylight if you can. | |
| `pages.carrosserie.how.1.title` | On vous rappelle avec un prix | We call you back with a price | |
| `pages.carrosserie.how.1.text` | Une première estimation, puis le devis définitif quand on voit la voiture. Gratuit, sans engagement. | A first estimate, then the final quote once we see the car. Free, no commitment. | |
| `pages.carrosserie.how.2.title` | On fixe la date ensemble | We agree on a date | |
| `pages.carrosserie.how.2.text` | On vous annonce la durée d’immobilisation, et on vous prévient dès que la voiture est prête. | We tell you how long the car will be off the road and let you know as soon as it’s ready. | |
| `pages.carrosserie.related` | Assurance : si un expert doit passer, apportez-nous le constat et les coordonnées de votre assureur, on s’organise avec lui. À confirmer avec le garage. | Insurance: if an assessor needs to see the car, bring the accident report and your insurer’s details and we’ll arrange it with them. To be confirmed with the garage. | **à valider (assurance, expert)** |
| `pages.entretien.metaTitle` | Entretien et vidange à Amiens, révision toutes marques | Garage Gamain | Car servicing and oil change in Amiens, every make | Garage Gamain | |
| `pages.entretien.metaDescription` | Vidange, révision selon le carnet constructeur, filtres, freins, distribution à Amiens. Garantie constructeur préservée, devis gratuit. Garage Gamain, chaussée Jules Ferry. | Oil change, scheduled servicing, filters, brakes, timing belt in Amiens. Manufacturer warranty kept, free quote. Garage Gamain, chaussée Jules Ferry. | |
| `pages.entretien.eyebrow` | Entretien · Amiens | Servicing · Amiens | |
| `pages.entretien.title` | Entretien et vidange à Amiens | Car servicing and oil change in Amiens | |
| `pages.entretien.intro` | Un entretien régulier, c’est moins de pannes et une voiture qui se revend mieux. On suit le carnet de votre constructeur, toutes marques, et on vous dit franchement ce qui peut attendre. | Regular servicing means fewer breakdowns and a car that sells better. We follow your manufacturer’s schedule, for every make, and tell you honestly what can wait. | |
| `pages.entretien.cta` | Prendre rendez-vous | Book a slot | |
| `pages.entretien.listTitle` | L’entretien courant | Routine servicing | |
| `pages.entretien.list.0.title` | Vidange | Oil change | |
| `pages.entretien.list.0.text` | Huile adaptée à votre moteur et filtre à huile neuf, niveaux contrôlés. | The right oil for your engine, a new oil filter, all levels checked. | |
| `pages.entretien.list.1.title` | Révision | Scheduled service | |
| `pages.entretien.list.1.text` | Selon le programme du constructeur : la garantie de votre voiture est préservée. | By the manufacturer’s programme: your car’s warranty is kept. | |
| `pages.entretien.list.2.title` | Freins et pneus | Brakes and tyres | |
| `pages.entretien.list.2.text` | Contrôle de l’usure à chaque passage, et on vous montre ce qu’il en est. | Wear checked at every visit, and we show you where things stand. | |
| `pages.entretien.list.3.title` | Distribution | Timing belt | |
| `pages.entretien.list.3.text` | Courroie et galets changés à l’échéance prévue, avant la casse moteur. | Belt and tensioners replaced on schedule, before they take the engine with them. | |
| `pages.entretien.howTitle` | Quand faire l’entretien ? | When should you service? | |
| `pages.entretien.how.0.title` | Suivez le carnet | Follow the handbook | |
| `pages.entretien.how.0.text` | En général tous les 15 000 à 30 000 km, ou une fois par an. L’échéance est dans le carnet ou sur l’ordinateur de bord. | Usually every 15,000 to 30,000 km, or once a year. The interval is in the service book or on the dashboard. | |
| `pages.entretien.how.1.title` | Surveillez les voyants | Watch the warning lights | |
| `pages.entretien.how.1.text` | Une clé ou un bidon d’huile au tableau de bord : la vidange approche, ne roulez pas des mois comme ça. | A spanner or oil can on the dashboard means the oil change is due: don’t drive for months like that. | |
| `pages.entretien.how.2.title` | Avant les longs trajets | Before long trips | |
| `pages.entretien.how.2.text` | Avant les vacances ou l’hiver : pneus, freins, batterie, niveaux. Une heure au garage, des kilomètres sereins. | Before the holidays or winter: tyres, brakes, battery, fluids. An hour at the garage for peace of mind. | |
| `pages.entretien.related` | Vous ne savez pas où en est votre voiture ? Donnez-nous l’immatriculation et le kilométrage, on vous dit ce qui est prévu à cette échéance. | Not sure where your car is up to? Give us the registration and mileage, and we’ll tell you what’s due. | |

### legal

| Clé | Français | English | |
|---|---|---|---|
| `legal.metaTitle` | Mentions légales | Garage Gamain, Amiens | Legal notice | Garage Gamain, Amiens | |
| `legal.title` | Mentions légales | Legal notice | |
| `legal.editor` | Éditeur | Publisher | |
| `legal.editorText` | {company}, 376 chaussée Jules Ferry, 80090 Amiens. Téléphone : 03 22 50 36 36. | {company}, 376 chaussée Jules Ferry, 80090 Amiens, France. Phone: +33 3 22 50 36 36. | **à remplir (raison sociale)** |
| `legal.siret` | SIRET : {siret}. | SIRET: {siret}. | |
| `legal.siretMissing` | SIRET : à remplir. | SIRET: to be added. | |
| `legal.director` | Responsable de la publication : {director}. | Publication director: {director}. | |
| `legal.host` | Hébergeur | Hosting | |
| `legal.data` | Données personnelles | Personal data | |
| `legal.dataText` | Les informations envoyées par le formulaire de devis (véhicule, nom, téléphone, e-mail, photos, message) servent uniquement à répondre à votre demande. Elles sont transmises par e-mail au garage et ne sont pas conservées sur le site. Vous pouvez demander leur suppression en appelant le garage. | Information sent through the quote form (car, name, phone, email, photos, message) is only used to answer your request. It is emailed to the garage and not stored on the site. You can ask for it to be deleted by calling the garage. | |
| `legal.photos` | Photos | Photos | |
| `legal.photosText` | Façade du garage : photos publiées sur sa fiche Google Maps. Illustrations des services (vidange, freins, pneus, diagnostic, carrosserie, climatisation, atelier) : photos libres de droits Unsplash (licence Unsplash), qui ne montrent pas le Garage Gamain. Aucune image générée par intelligence artificielle. Détail des sources dans PHOTOS-SOURCES.md. | Garage front: photos published on its Google Maps listing. Service illustrations (oil change, brakes, tyres, diagnostics, bodywork, air conditioning, workshop): royalty-free Unsplash photos (Unsplash License) that do not show Garage Gamain. No AI-generated images. | |
| `legal.cookies` | Cookies | Cookies | |
| `legal.cookiesText` | Le site n’utilise aucun cookie publicitaire ni de mesure d’audience. Seul votre choix de langue est mémorisé. La carte est fournie par Google Maps. | The site uses no advertising or analytics cookies. Only your language choice is remembered. The map is provided by Google Maps. | |

## Textes alternatifs des photos

| Photo | Français | English |
|---|---|---|
| facade-enseigne-precisium | La façade du Garage Gamain au 376 chaussée Jules Ferry à Amiens, avec l’enseigne Precisium « Garage Gamain » et l’entrée de l’atelier « Service rapide » | The front of Garage Gamain at 376 chaussée Jules Ferry, Amiens, with its Precisium “Garage Gamain” sign and the “Service rapide” workshop entrance |
| facade-vitrines-precisium | La façade du Garage Gamain sur la chaussée Jules Ferry : l’enseigne Precisium « Garage Gamain » et les vitrines | Garage Gamain on chaussée Jules Ferry: the Precisium “Garage Gamain” sign and the shop windows |
| vidange | Un mécanicien verse de l’huile neuve dans le moteur d’une voiture (photo d’illustration) | A mechanic pouring fresh oil into a car engine (illustration photo) |
| freins | Gros plan d’un disque et d’un étrier de frein sur une voiture levée (photo d’illustration) | Close-up of a brake disc and caliper on a raised car (illustration photo) |
| pneus | Un mécanicien en gants contrôle un pneu monté sur la roue (photo d’illustration) | A gloved mechanic checking a tyre fitted on its wheel (illustration photo) |
| diagnostic | Un ordinateur portable branché à la prise de diagnostic d’une voiture (photo d’illustration) | A laptop plugged into a car’s diagnostic port (illustration photo) |
| carrosserie-poncage | Ponçage de la carrosserie d’une voiture avant remise en peinture (photo d’illustration) | Sanding a car body before repainting (illustration photo) |
| carrosserie-pare-chocs | Réparation d’un pare-chocs arrière, protégé par un ruban de masquage (photo d’illustration) | Repairing a rear bumper protected with masking tape (illustration photo) |
| climatisation | Commandes de climatisation d’une voiture, réglées sur 19 degrés (photo d’illustration) | A car’s air-conditioning controls set to 19 degrees (illustration photo) |
| atelier-pont | Un mécanicien travaille capot ouvert dans un atelier équipé de ponts élévateurs (photo d’illustration) | A mechanic working under an open bonnet in a workshop with car lifts (illustration photo) |
| mecanicien-moteur | Un mécanicien penché sur le moteur d’une voiture, capot ouvert (photo d’illustration) | A mechanic leaning over a car engine, bonnet open (illustration photo) |

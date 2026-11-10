# Garage Gamain : infos à demander à Cédric Gamain

Tout ce qui manque sur le site est marqué « à remplir » ou « à confirmer ». À récupérer lors du passage au garage :

1. **Son parcours et l'histoire du garage** : depuis quand il est installé chaussée Jules Ferry, d'où il vient, qui travaille avec lui (prénoms, rôles). Permettra d'ajouter un bloc « Le garage » et de nourrir la page d'accueil.
2. **La liste des services et les prix** : vérifier `data/tarifs.json` ligne par ligne (prestations réellement faites, prix « à partir de », durées). En particulier : géométrie / parallélisme, peinture (cabine de peinture ?), climatisation, préparation au contrôle technique.
3. **Les marques prises en charge** : toutes marques ? Utilitaires ? Électriques et hybrides ? Spécialité éventuelle.
4. **Le véhicule de prêt** : en a-t-il un ? Gratuit, sur réservation ?
5. **Les horaires exacts** : samedi (ouvert le matin ?), congés annuels, jours fériés → `data/horaires.json` et `data/annonces.json`.
6. **Un portable pour WhatsApp** : le 03 22 50 36 36 est un fixe. Avec un portable, on active le bouton WhatsApp (pratique pour envoyer une photo de rayure) → `data/site.json` → `whatsapp`.
7. **L'email** qui recevra les demandes de devis → variable Vercel `DEVIS_NOTIFY_EMAIL` (et `data/site.json` → `email`).
8. **Des photos** : façade et enseigne, atelier (pont, outillage), l'équipe au travail (sans clients), et des paires avant / après de carrosserie. Voir [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).
9. **Le logo** : s'il existe un vrai logo (enseigne, cartes de visite, factures), le récupérer en bonne qualité ; sinon valider le logo typographique proposé (`public/logo.svg`).
10. **SIRET et raison sociale** (mentions légales) → `data/site.json` → `legal`.
11. **Paiement** : carte bancaire, espèces, chèque ? Paiement en plusieurs fois ?
12. **Assurances** : travaille-t-il avec les experts et les assurances pour la carrosserie ? Agréé par certaines compagnies ?
13. **Avis Google** : accord pour citer quelques vrais avis sur le site (`data/avis.json`).
14. **Stationnement** : où les clients se garent-ils pour déposer la voiture ?

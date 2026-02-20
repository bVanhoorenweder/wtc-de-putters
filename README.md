# WTC De Putters — Website

Officiële website van **WTC De Putters**, een wielertoeristenclub uit Oostkamp.
Gebouwd met [Astro](https://astro.build) en [Tailwind CSS](https://tailwindcss.com).

---

## Tech Stack

| Tool | Versie | Gebruik |
|------|--------|---------|
| [Astro](https://astro.build) | 5.x | Framework (statische site) |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling |
| [Swiper](https://swiperjs.com) | 11.x | Hero carousel |
| [GLightbox](https://biati-digital.github.io/glightbox/) | latest | Lightbox voor foto's |
| [ScrollCue](https://github.com/miaukeboom/scrollcue) | 1.0.3 | Scroll-animaties |

---

## Projectstructuur

```
/
├── public/
│   └── assets/          # Logo, afbeeldingen, GPX-bestanden
├── src/
│   ├── components/      # Herbruikbare UI-componenten
│   ├── data/            # Content in TypeScript-bestanden
│   ├── layouts/         # BaseLayout (HTML-skelet, CDN-scripts)
│   ├── pages/           # Elke .astro-file = een pagina/route
│   └── styles/          # global.css (Tailwind, kleuren, typografie)
└── package.json
```

---

## Pagina's

| Route | Bestand | Omschrijving |
|-------|---------|--------------|
| `/` | `pages/index.astro` | Homepage met hero carousel, stats, groepen |
| `/werking` | `pages/werking.astro` | Filosofie, veiligheid, clubkledij, activiteiten, FAQ |
| `/groepen` | `pages/groepen.astro` | De 4 rijgroepen (Groen/Blauw/Rood/Zwart) |
| `/ritten` | `pages/ritten.astro` | GPX-routes downloaden |
| `/events` | `pages/events.astro` | Kalender met clubevents |
| `/sponsors` | `pages/sponsors.astro` | Huidige sponsors + sponsorinfo |
| `/structuur` | `pages/structuur.astro` | Bestuur van de club |
| `/lid-worden` | `pages/lid-worden.astro` | Lidgeld, inschrijving, FAQ |
| `/privacy` | `pages/privacy.astro` | Privacyverklaring (GDPR) |
| `/voorwaarden` | `pages/voorwaarden.astro` | Gebruiksvoorwaarden |

---

## Content bijwerken

Alle inhoud die regelmatig wijzigt staat in `src/data/`:

### `data/events.ts`
Voeg events toe of pas ze aan. Velden: `title`, `date`, `time`, `location`, `distance`, `price`, `description`, `url`, `category`.

### `data/sponsors.ts`
Lijst van sponsors met `name`, `description`, `logo`, `url`, `tier`.

### `data/board.ts`
Bestuursleden met `name`, `role`, `email`, `stravaUrl`, `initials`, `color`.

### `data/groups.ts`
De 4 rijgroepen met hun eigenschappen.

### `data/ritten.ts`
GPX-routes met naam, afstand, hoogteverschil en downloadlink.

---

## Kleuren (Tailwind theme)

Gedefinieerd in `src/styles/global.css`:

| Naam | Kleur | Gebruik |
|------|-------|---------|
| `putters-primary` | `#D45D79` | Roze — hoofdkleur, knoppen |
| `putters-secondary` | `#24A19C` | Teal — accenten |
| `putters-blue` | `#293B5F` | Donkerblauw — gradients |
| `putters-heading` | `#1a1a2e` | Titels |
| `putters-text` | `#4a4a6a` | Bodytekst |
| `putters-gray-bg` | `#F4F4F4` | Achtergrond secties |
| `putters-footer` | `#1a1a2e` | Footer achtergrond |

---

## Ontwikkelen

```sh
# Installeer dependencies
npm install

# Start lokale dev server op http://localhost:4321
npm run dev

# Bouw de productieversie naar ./dist/
npm run build

# Preview productieversie lokaal
npm run preview
```

---

## Deployment

De site wordt gehost op **Netlify** en automatisch gebouwd bij elke push naar de `main` branch.

- **Live URL:** [wtcdeputters.be](https://wtcdeputters.be)
- **Netlify Analytics:** server-side analytics, geen cookies, geen cookiebanner nodig

---

## Sociale media & externe links

| Platform | URL |
|----------|-----|
| Facebook | https://www.facebook.com/groups/155290524519306 |
| Strava Club | https://www.strava.com/clubs/4406 |
| Zwift Club | https://www.zwift.com/clubs/456bc92a-fd9b-4cb7-8d41-3875884c0ceb |
| Inschrijven | https://www.mijnassist.be/NL/4a094922-59be-4215-a59c-fcc671ba3c26/waitinglist/subscribe |

---

## UAT Testing

Gebruik het onderstaande formulier om bugs en feedback te rapporteren tijdens het testen van de website:

- **UAT Feedback formulier:** [forms.gle/LxV8JVR6H2m5ydyA7](https://forms.gle/LxV8JVR6H2m5ydyA7)

---

## Contact

**WTC De Putters**
Parking De Valkaart, Oostkamp
info@wtcdeputters.be
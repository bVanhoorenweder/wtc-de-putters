export interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  distance?: string;
  price?: string;
  url?: string;
  tag?: string;
  category: 'upcoming' | 'annual' | 'past';
  image?: string;
}

export const events: Event[] = [
  {
    title: 'KBK (Kuurne-Brussel-Kuurne)',
    date: '2026-02-28',
    time: '09:00',
    location: 'Kuurne, België',
    description: 'Rijd zelf het legendarische KBK-parcours door de Vlaamse Ardennen, een dag voor de profs. Keuze uit 4 afstanden met après-bike in de Kubox.',
    distance: '65 / 85 / 110 / 135 km',
    price: 'Zie organisator',
    url: 'https://kuurne-brussel-kuurne.be/cyclo/',
    category: 'upcoming'
  },
  {
    title: 'Ontbijtrit',
    date: '2026-03-01',
    time: '08:00',
    location: 'Parking De Valkaart, Oostkamp',
    description: 'Traditionele ontbijtrit met aansluitend gezellig samenzijn en heerlijk ontbijt. Voor alle niveaus en perfect om het seizoen te starten.',
    distance: '40-80 km (meerdere routes)',
    price: 'Gratis',
    category: 'annual'
  },
  {
    title: 'Jempi Monseré Classic',
    date: '2026-03-14',
    time: '09:00',
    location: 'Roeselare, België',
    description: 'Eerbetoon aan Jempi Monseré, wereldkampioen wielrennen 1970. Mooie toeristische rit door West-Vlaanderen.',
    distance: '40 / 65 / 90 / 105 / 135 / 155 km',
    price: 'Zie organisator',
    url: 'https://www.wheelsinaction.be/heuvelklassieker.html',
    category: 'upcoming'
  },
  {
    title: 'Ronde van Vlaanderen',
    date: '2026-04-04',
    time: 'Hele dag',
    location: 'Oudenaarde (240 km: Antwerpen)',
    description: 'Meefietsen met de legendarische Ronde van Vlaanderen! Volg (delen van) het parcours van de profs en ervaar de hellingen.',
    distance: '80 / 130 / 160 / 240 km',
    price: 'Zie organisator',
    url: 'https://werideflanders.com',
    category: 'upcoming'
  },
  {
    title: 'Puttersdag',
    date: '2026-05-01',
    time: 'Hele dag',
    location: 'Parking De Valkaart, Oostkamp',
    description: 'Dé dag van WTC De Putters! Jaarlijks clubevenement met ritten voor alle niveaus, gezelligheid en samenhorigheid.',
    distance: 'Meerdere routes beschikbaar',
    price: 'Gratis',
    category: 'annual'
  },
  {
    title: 'Trois Ballons 2026',
    date: '2026-06-06',
    time: '07:00',
    location: 'Ronchamp, Vogezen, Frankrijk',
    description: 'Finish op de legendarische Planche des Belles Filles! Keuze uit Granfondo of Mediofondo door de prachtige Vogezen.',
    distance: '95 km (Mediofondo) / 183 km (Granfondo)',
    price: 'Zie organisator',
    url: 'https://les3ballons.com',
    tag: 'Granfondo',
    category: 'upcoming'
  },
  {
    title: '8h Vélo de Spa',
    date: '2026-07-25',
    time: '09:00',
    location: 'Circuit Spa-Francorchamps, Stavelot',
    description: '8 uur fietsen op het legendarische F1-circuit van Spa! Rondjes op een parcours van 7 km met 104 hoogtemeters per ronde, inclusief Eau Rouge en Raidillon.',
    distance: '7 km per ronde (circuit)',
    price: 'Zie organisator',
    url: 'https://www.8hvelodespa.be',
    tag: 'Endurance',
    category: 'upcoming'
  },
  {
    title: 'Vélomédiane (La Crique)',
    date: '2026-08-22',
    time: '09:00',
    location: 'La Roche-en-Ardenne, België',
    description: 'Uitdagende wielertocht door de Ardennen vanuit La Roche-en-Ardenne. Keuze uit verschillende parcours inclusief gravel en grand challenge.',
    distance: '86 / 93 / 134 / 165 km',
    price: 'Zie organisator',
    url: 'https://www.velomediane.com',
    category: 'upcoming'
  },
  {
    title: 'Ronde Picarde',
    date: '2026-09-20',
    time: '09:00',
    location: 'Eaucourt-sur-Somme, Frankrijk',
    description: 'Wielerevenement in de Noord-Franse Somme-regio. Keuze uit meerdere afstanden op zondag en een gravel op zaterdag.',
    distance: '38 / 85 / 117 / 158 km (+ 77 km gravel)',
    price: 'Zie organisator',
    url: 'https://cyclosportive-rondepicarde.fr',
    tag: 'Granfondo',
    category: 'upcoming'
  }
];
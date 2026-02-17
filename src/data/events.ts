export interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  distance?: string;
  price?: string;
  url?: string;
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
    location: 'Oost-Vlaanderen',
    description: 'Meefietsen met de legendarische Ronde van Vlaanderen! Volg (delen van) het parcours van de profs en ervaar de hellingen.',
    distance: 'Verschillende parcours mogelijk',
    price: 'Zie organisator',
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
    time: 'Weekend',
    location: 'Vogezen, Frankrijk',
    description: 'Sportief wielerweekend in de prachtige Vogezen. Drie iconische cols en prachtige natuur. Uitdagend maar onvergetelijk!',
    distance: '100-150 km met bergen',
    price: 'Info volgt',
    category: 'upcoming'
  },
  {
    title: '8 uur van Spa-Francorchamps',
    date: '2026-07-25',
    time: '09:00',
    location: 'Circuit Spa-Francorchamps',
    description: 'Fietsen op het legendarische F1-circuit van Spa! Een unieke ervaring met uitdagende hellingen zoals Eau Rouge en Raidillon.',
    distance: 'Rondes op circuit',
    price: 'Zie organisator',
    category: 'upcoming'
  },
  {
    title: 'Criq (Criterium Ingooigem)',
    date: '2026-08-22',
    time: '09:00',
    location: 'Ingooigem',
    description: 'Traditioneel wielerevenement in Ingooigem. Criteriumsfeer met meerdere parcoursmogelijkheden voor verschillende niveaus.',
    distance: 'Verschillende afstanden',
    price: 'Zie organisator',
    category: 'upcoming'
  },
  {
    title: 'Picardie Weekend',
    date: '2026-09-21',
    time: 'Weekend',
    location: 'Picardië, Frankrijk',
    description: 'Wielerweekend in de Noord-Franse regio Picardië. Mooie landschappen, golvend parcours en Franse gezelligheid.',
    distance: '80-120 km per dag',
    price: 'Info volgt',
    category: 'upcoming'
  }
];
export interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  distance?: string;
  price?: string;
  category: 'upcoming' | 'annual' | 'past';
  image?: string;
}

export const events: Event[] = [
  {
    title: 'Ontbijtrit 2026',
    date: '2026-05-10',
    time: '08:00',
    location: 'Parking De Valkaart, Oostkamp',
    description: 'Traditionele ontbijtrit met aansluitend gezellig samenzijn en heerlijk ontbijt. Voor alle niveaus.',
    distance: '40-80 km (meerdere routes)',
    price: '€15 per persoon',
    category: 'annual'
  },
  {
    title: 'Putters Classic',
    date: '2026-06-15',
    time: '08:00',
    location: 'Oostkamp Centrum',
    description: 'Jaarlijks wielerevenement voor recreatieve fietsers. Drie verschillende afstanden beschikbaar.',
    distance: '50 / 75 / 100 km',
    price: '€12 inschrijving',
    category: 'annual'
  },
  {
    title: 'Wielerweekend Ardennen',
    date: '2026-09-20',
    time: 'Volledig weekend',
    location: 'Ardennen, België',
    description: 'Sportief weekend in de Ardennen met mooie klimritten. Overnachting en maaltijden inbegrepen.',
    distance: '100-150 km per dag',
    price: '€180 all-in',
    category: 'upcoming'
  },
  {
    title: 'Nieuwjaarsreceptie 2027',
    date: '2027-01-10',
    time: '18:00',
    location: 'Clubhuis Oostkamp',
    description: 'Gezellige nieuwjaarsreceptie met alle leden, bestuursleden en sponsors. Terugblik op 2026 en vooruitblik op 2027.',
    category: 'annual'
  },
  {
    title: 'Club Kampioenschap',
    date: '2026-08-05',
    time: '09:00',
    location: 'Rond Oostkamp',
    description: 'Jaarlijks clubkampioenschap - sportieve rit met tijdsregistratie voor wie wil. Gezelligheid staat voorop!',
    distance: '60 km',
    category: 'annual'
  },
  {
    title: 'BBQ &Family Day',
    date: '2026-07-25',
    time: '16:00',
    location: 'Clubhuis Oostkamp',
    description: 'Gezinsnamiddag met BBQ, spelletjes voor kinderen en gezellig samenzijn. Voor leden en hun families.',
    price: '€10 per volwassene, kinderen gratis',
    category: 'annual'
  }
];
export interface Sponsor {
  name: string;
  category: string;
  description: string;
  website?: string;
  facebook?: string;
  phone?: string;
  email?: string;
  logo?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Delta Bikes',
    category: 'Fietswinkel',
    description: 'Uw specialist voor fietsen, accessoires en professioneel onderhoud',
    website: 'https://www.deltabikes.be',
    facebook: 'https://facebook.com/deltabikes',
    phone: '+32 50 82 61 69',
    email: 'info@deltabikes.be',
    logo: '/assets/Delta_Bikes_Logo.svg'
  },
  {
    name: 'Goossens',
    category: 'Keukens en maatkasten',
    description: 'Goossens is een Belgisch familiebedrijf dat al 4 generaties hoogwaardige keukens en maatkasten produceert voor projectontwikkelaars, overheden en particulieren. Wij combineren traditioneel vakmanschap met moderne productiecapaciteit om interieurprojecten op maat te realiseren.',
    website: 'https://www.goossens-oostkamp.be',
    facebook: 'https://facebook.com/keukensgoossens',
    phone: '+32 50 82 26 40',
    email: 'info@keukensgoossens.be',
    logo: '/assets/Goossens_Logo.svg'
  },
  {
    name: 'Stijn Voet',
    category: 'Immo',
    description: 'Verkoop en verhuur van vastgoed en projecten',
    website: 'https://www.stijnvoet.be',
    facebook: 'https://www.facebook.com/pg/stijnvoetimmo',
    phone: '+32 497 97 70 56',
    email: 'stijn@stijnvoet.be',
    logo: '/assets/Dumon_Voet_Logo.png'
  },
  {
    name: 'Jeroen Spriet',
    category: 'Aannemer',
    description: 'Vakmanschap in bouw- en verbouwingswerken met oog voor detail',
    facebook: 'https://www.facebook.com/p/Bouwwerken-Jeroen-Spriet-100063764855046/',
    phone: '+32 477 30 41 17',
    email: 'jeroen@bouwjeroenspriet.be'
  },
  {
    name: 'Nic-Rack',
    category: 'Magazijninrichting en opslagoplossingen',
    description: 'Professionele magazijninrichting en logistieke oplossingen',
    website: 'https://www.nicrack.be',
    facebook: 'https://facebook.com/NicRackBV',
    phone: '+32 472 92 32 46',
    email: 'info@nicrack.be',
    logo: '/assets/NickRack_Logo.png'
  },
  {
    name: 'Marnick Van Waeleghem',
    category: 'Vloerder',
    description: 'Vakkundige plaatsing van alle soorten vloeren',
    facebook: 'https://www.facebook.com/VloerWerkenVanWaeleghemMarnick',
    phone: '+32 495 51 50 01',
    email: 'marnik.vanwaeleghem@gmail.com'
  },
  {
    name: 'Stefan Vandamme',
    category: 'Timmer- & schrijnwerk',
    description: 'Timmer- en schrijnwerk op maat'
  },
  {
    name: 'Mera Claeys',
    category: 'Vending Operator',
    description: 'Mera Claeys BV is een Belgisch familiebedrijf dat sinds meer dan 25 jaar actief is in de vending-sector. Ze leveren en exploiteren snoep-, koffie- en drankautomaten voor bedrijven, scholen en andere organisaties. Het bedrijf plaatst de automaten, zorgt voor de bevoorrading, het onderhoud en de opvolging, en biedt kwalitatieve producten aan (o.a. frisdrank, koffie, snoep en water) in de automaten.',
    website: 'https://www.mera-claeys.be',
    facebook: 'https://www.facebook.com/wecareaboutyourbreak',
    phone: '+32 50 67 01 23',
    email: 'info@mera-claeys.be',
    logo: '/assets/MeraClaeys_Logo.png'
  },
  {
    name: 'Laurel en Hardy',
    category: 'Restauranst',
    description: 'Culinair genieten in een gezellige en warme sfeer',
    website: 'https://www.laurel-hardy.be',
    facebook: 'https://www.facebook.com/LaurelHardy.Oostkamp',
    phone: '+32 50 82 34 34',
    email: 'info@laurel-hardy.be'
  }
];
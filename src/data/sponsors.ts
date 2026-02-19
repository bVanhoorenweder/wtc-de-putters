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
    name: 'Keukens Goossens',
    category: 'Keukens',
    description: 'Maatwerk keukens op maat van uw dromen en budget',
    website: 'https://www.goossens-oostkamp.be',
    facebook: 'https://facebook.com/keukensgoossens',
    phone: '+32 50 23 45 67',
    email: 'info@keukensgoossens.be'
  },
  {
    name: 'Stijn Voet',
    category: 'Immo',
    description: 'Vastgoedexpert die uw woning de aandacht geeft die het verdient',
    website: 'https://www.stijnvoet.be',
    facebook: 'https://www.facebook.com/pg/stijnvoetimmo',
    phone: '+32 050 78 20 20',
    email: 'info@dumonvoet.be',
    logo: '/assets/Dumon_Voet_Logo.png'
  },
  {
    name: 'Jeroen Spriet',
    category: 'Aannemer',
    description: 'Vakmanschap in bouw- en verbouwingswerken met oog voor detail',
    website: '-',
    facebook: 'https://www.facebook.com/p/Bouwwerken-Jeroen-Spriet-100063764855046/',
    phone: '+32 477 30 41 17',
    email: 'jeroen@bouwjeroenspriet.be'
  },
  {
    name: 'Nicrack',
    category: 'Magazijn Inrichting',
    description: 'Professionele magazijninrichting en logistieke oplossingen',
    website: 'https://nicrack.be',
    facebook: 'https://facebook.com/nicrack',
    phone: '+32 50 56 78 90',
    email: 'info@nicrack.be',
    logo: '/assets/NickRack_Logo.svg'
  },
  {
    name: 'Marnick Van Waeleghem',
    category: 'Vloerder',
    description: 'Vakkundige plaatsing van alle soorten vloeren',
    website: '-',
    facebook: 'https://www.facebook.com/VloerWerkenVanWaeleghemMarnick',
    phone: '+32 495 51 50 01',
    email: 'marnik.vanwaeleghem@gmail.com'
  },
  {
    name: 'Stefan Vandamme',
    category: 'Timmer- & schrijnwerk',
    description: '-',
    website: '-',
    facebook: '-',
    phone: '-',
    email: '-'
  },
  {
    name: 'Mera Claeys',
    category: 'Automaten',
    description: 'Moderne snoep- en drankautomaten voor uw bedrijf',
    website: 'https://www.mera-claeys.be',
    facebook: 'https://facebook.com/meraclaeys',
    phone: '+32 50 67 01 23',
    email: 'info@mera-claeys.be'
  },
  {
    name: 'Laurel en Hardy',
    category: 'Restauranst',
    description: 'Culinair genieten in een gezellige en warme sfeer',
    website: 'https://www.laurel-hardy.be',
    facebook: 'https://www.facebook.com/LaurelHardy.Oostkamp',
    phone: '+32 50 82 34 34',
    email: 'info@laurel-hardy.be',
    logo: '/assets/Laurel_Hardy_Logo.png'
  }
];
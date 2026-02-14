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
    website: 'https://deltabikes.be',
    facebook: 'https://facebook.com/deltabikes',
    phone: '+32 50 12 34 56',
    email: 'info@deltabikes.be'
  },
  {
    name: 'Keukens Goossens',
    category: 'Keukens',
    description: 'Maatwerk keukens op maat van uw dromen en budget',
    website: 'https://keukensgoossens.be',
    facebook: 'https://facebook.com/keukensgoossens',
    phone: '+32 50 23 45 67',
    email: 'info@keukensgoossens.be'
  },
  {
    name: 'Stijn Voet',
    category: 'Immo',
    description: 'Vastgoedexpert die uw woning de aandacht geeft die het verdient',
    website: 'https://stijnvoet-immo.be',
    facebook: 'https://facebook.com/stijnvoetimmo',
    phone: '+32 50 34 56 78',
    email: 'stijn@voet-immo.be'
  },
  {
    name: 'Jeroen Spriet',
    category: 'Aannemer',
    description: 'Vakmanschap in bouw- en verbouwingswerken met oog voor detail',
    website: 'https://jeroenspriet.be',
    facebook: 'https://facebook.com/jeroenspriet',
    phone: '+32 50 45 67 89',
    email: 'jeroen@spriet.be'
  },
  {
    name: 'Nicrack',
    category: 'Magazijn Inrichting',
    description: 'Professionele magazijninrichting en logistieke oplossingen',
    website: 'https://nicrack.be',
    facebook: 'https://facebook.com/nicrack',
    phone: '+32 50 56 78 90',
    email: 'info@nicrack.be'
  },
  {
    name: 'Marnick Van Waeleghem',
    category: 'Vloerder',
    description: 'Vakkundige plaatsing van alle soorten vloeren',
    website: 'https://vanwaeleghem-vloeren.be',
    facebook: 'https://facebook.com/vanwaeleghemvloeren',
    phone: '+32 50 67 89 01',
    email: 'marnick@vanwaeleghem.be'
  },
  {
    name: 'Stefan Vandamme',
    category: 'Vloerder',
    description: 'Specialist in hoogwaardige vloerwerken voor elke ruimte',
    website: 'https://vandamme-vloeren.be',
    facebook: 'https://facebook.com/vandammevloeren',
    phone: '+32 50 78 90 12',
    email: 'stefan@vandamme.be'
  },
  {
    name: 'Mera Claeys',
    category: 'Automaten',
    description: 'Moderne snoep- en drankautomaten voor uw bedrijf',
    website: 'https://meraclaeys.be',
    facebook: 'https://facebook.com/meraclaeys',
    phone: '+32 50 89 01 23',
    email: 'info@meraclaeys.be'
  },
  {
    name: 'Laurel en Hardy',
    category: 'Restaurant',
    description: 'Culinair genieten in een gezellige en warme sfeer',
    website: 'https://laurelenhardy.be',
    facebook: 'https://facebook.com/laurelenhardy',
    phone: '+32 50 90 12 34',
    email: 'info@laurelenhardy.be'
  }
];
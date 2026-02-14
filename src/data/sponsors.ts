export interface Sponsor {
  name: string;
  website?: string;
  tier: 'gold' | 'silver' | 'bronze';
  logo?: string;
  description?: string;
}

export const sponsors: Sponsor[] = [
  // Gold Sponsors
  {
    name: 'Fietsen Desmet',
    tier: 'gold',
    description: 'Uw fietsspecialist in Oostkamp - verkoop, herstelling en onderhoud',
    website: 'https://example.com'
  },
  {
    name: 'Bakkerij Van De Putte',
    tier: 'gold',
    description: 'Verse bakkerijproducten sinds 1985',
    website: 'https://example.com'
  },

  // Silver Sponsors
  {
    name: 'Café De Valkaart',
    tier: 'silver',
    description: 'Gezellig café in hartje Oostkamp',
    website: 'https://example.com'
  },
  {
    name: 'Sportcare Oostkamp',
    tier: 'silver',
    description: 'Fysiotherapie en sportbegeleiding',
    website: 'https://example.com'
  },
  {
    name: 'Garage Pieters',
    tier: 'silver',
    description: 'Auto onderhoud en herstelling',
    website: 'https://example.com'
  },

  // Bronze Sponsors
  {
    name: 'Slagerij Vermeersch',
    tier: 'bronze',
    description: 'Kwaliteitsvlees uit de regio'
  },
  {
    name: 'Apotheek Centrum',
    tier: 'bronze',
    description: 'Uw gezondheid is onze zorg'
  },
  {
    name: 'Verzekeringsagent De Clercq',
    tier: 'bronze',
    description: 'Verzekeringen op maat'
  },
  {
    name: 'Tuincentrum Groen & Co',
    tier: 'bronze',
    description: 'Alles voor uw tuin'
  },
  {
    name: 'IT Solutions Brugge',
    tier: 'bronze',
    description: 'Computer support voor particulieren en bedrijven'
  },
  {
    name: 'Restaurant De Zwaan',
    tier: 'bronze',
    description: 'Gastronomisch genieten in Oostkamp'
  }
];
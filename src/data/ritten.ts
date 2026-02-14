export interface Rit {
  title: string;
  description: string;
  distance: number; // in km
  elevation?: number; // in meters
  groups: ('A' | 'B' | 'C' | 'D')[]; // Welke groepen
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Zwaar';
  gpxUrl: string;
  garminUrl?: string;
  highlights?: string[]; // Bijzondere punten
  duration?: string; // Geschatte duur
}

export const ritten: Rit[] = [
  // Groep D - Recreatief
  {
    title: 'Brugge Rondje',
    description: 'Mooie vlakke rit door de Brugse polders met een pauze in het centrum van Brugge.',
    distance: 50,
    elevation: 120,
    groups: ['D'],
    difficulty: 'Makkelijk',
    duration: '2u - 2u30',
    gpxUrl: '/gpx/brugge-rondje-50km.gpx',
    garminUrl: 'https://connect.garmin.com/modern/course/example1',
    highlights: ['Brugge centrum', 'Vlakke polders', 'Koffiestop']
  },
  {
    title: 'Damme & Terug',
    description: 'Korte rit langs het kanaal Brugge-Sluis naar het pittoreske Damme.',
    distance: 45,
    elevation: 80,
    groups: ['D'],
    difficulty: 'Makkelijk',
    duration: '2u',
    gpxUrl: '/gpx/damme-terug-45km.gpx',
    highlights: ['Kanaal Brugge-Sluis', 'Damme dorpsplein', 'Vlak parcours']
  },

  // Groep C - Gemiddeld
  {
    title: 'Heuvelland Verkenningstocht',
    description: 'Eerste kennismaking met het Vlaamse heuvelland. Licht glooiend parcours.',
    distance: 65,
    elevation: 350,
    groups: ['C', 'D'],
    difficulty: 'Gemiddeld',
    duration: '2u30 - 3u',
    gpxUrl: '/gpx/heuvelland-verkenning-65km.gpx',
    garminUrl: 'https://connect.garmin.com/modern/course/example2',
    highlights: ['Rodeberg', 'Kemmelberg basis', 'Landelijke wegen']
  },
  {
    title: 'Oostkamp Classic',
    description: 'Onze klassieke clubrit rondom Oostkamp met bekende wegen en mooie doorkijkjes.',
    distance: 70,
    elevation: 280,
    groups: ['C'],
    difficulty: 'Gemiddeld',
    duration: '2u30 - 3u',
    gpxUrl: '/gpx/oostkamp-classic-70km.gpx',
    highlights: ['Bossen van Wijnendale', 'Kasteel Tillegem', 'Veldegem']
  },

  // Groep B - Sportief
  {
    title: 'Heuvelland Intensief',
    description: 'Sportieve rit met meerdere beklimmingen in het West-Vlaamse heuvelland.',
    distance: 85,
    elevation: 650,
    groups: ['B'],
    difficulty: 'Zwaar',
    duration: '3u - 3u30',
    gpxUrl: '/gpx/heuvelland-intensief-85km.gpx',
    garminUrl: 'https://connect.garmin.com/modern/course/example3',
    highlights: ['Kemmelberg', 'Rodeberg', 'Monteberg', 'Vidaigneberg']
  },
  {
    title: 'Kustlijn Express',
    description: 'Snelle rit langs de kust met wind als extra uitdaging.',
    distance: 90,
    elevation: 150,
    groups: ['B', 'C'],
    difficulty: 'Gemiddeld',
    duration: '3u - 3u30',
    gpxUrl: '/gpx/kustlijn-express-90km.gpx',
    highlights: ['Noordzee uitzicht', 'Oostende', 'Wielerbaan Ostend']
  },

  // Groep A - Intensief
  {
    title: 'Heuvelland Ultra',
    description: 'Uitdagende rit met alle belangrijke beklimmingen van West-Vlaanderen.',
    distance: 120,
    elevation: 980,
    groups: ['A'],
    difficulty: 'Zwaar',
    duration: '4u - 4u30',
    gpxUrl: '/gpx/heuvelland-ultra-120km.gpx',
    garminUrl: 'https://connect.garmin.com/modern/course/example4',
    highlights: ['Kemmelberg (2x)', 'Scherpenberg', 'Rodeberg', 'Baneberg', 'Zwarteberg']
  },
  {
    title: 'Vlaanderen Ronde',
    description: 'Lange rit door het hart van Vlaanderen met variërend terrein.',
    distance: 110,
    elevation: 720,
    groups: ['A'],
    difficulty: 'Zwaar',
    duration: '3u30 - 4u30',
    gpxUrl: '/gpx/vlaanderen-ronde-110km.gpx',
    highlights: ['Oude Kwaremont', 'Paterberg', 'Koppenberg']
  },

  // Multi-groep ritten
  {
    title: 'Toertocht West-Vlaanderen',
    description: 'Mooie allround rit geschikt voor meerdere niveaus met optionele afkortingen.',
    distance: 80,
    elevation: 420,
    groups: ['B', 'C'],
    difficulty: 'Gemiddeld',
    duration: '3u - 3u30',
    gpxUrl: '/gpx/toertocht-westvlaanderen-80km.gpx',
    garminUrl: 'https://connect.garmin.com/modern/course/example5',
    highlights: ['Kasteel Wijnendale', 'Brugse Ommeland', 'Optionele lus']
  },
  {
    title: 'Zondag Ontbijtrit',
    description: 'Ontspannen rit met ontbijtstop halverwege. Perfect voor een rustige zondag.',
    distance: 55,
    elevation: 200,
    groups: ['C', 'D'],
    difficulty: 'Makkelijk',
    duration: '2u30 - 3u',
    gpxUrl: '/gpx/zondag-ontbijtrit-55km.gpx',
    highlights: ['Ontbijtstop', 'Vlak parcours', 'Groepssfeer']
  }
];

// Helper functies voor filtering
export const getAllGroups = () => ['A', 'B', 'C', 'D'] as const;

export const getDistanceCategories = () => [
  { label: '< 60 km', min: 0, max: 59 },
  { label: '60-80 km', min: 60, max: 80 },
  { label: '81-100 km', min: 81, max: 100 },
  { label: '> 100 km', min: 101, max: 999 }
];

export const getDifficultyLevels = () => ['Makkelijk', 'Gemiddeld', 'Zwaar'] as const;
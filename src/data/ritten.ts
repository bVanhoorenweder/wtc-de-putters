export interface Rit {
  title: string;
  description: string;
  distance: number; // in km
  elevation?: number; // in meters
  groups: ('A' | 'B' | 'C' | 'D')[]; // Welke groepen
  type: 'Cyclo' | 'MTB' | 'Gravel';
  gpxUrl: string;
  garminUrl?: string;
  highlights?: string[]; // Bijzondere punten
  duration?: string; // Geschatte duur
}

export const ritten: Rit[] = [
  {
    title: 'Diksmuide',
    description: 'Sportieve rit richting Diksmuide door het vlakke Westhoek landschap. Mooie route met historische sites en rustige wegen.',
    distance: 103,
    elevation: 200,
    groups: ['A', 'B'],
    type: 'Cyclo',
    duration: '3u30 - 4u',
    gpxUrl: '/gpx/diksmuide-103km.gpx',
    garminUrl: 'https://connect.garmin.com/app/course/145131576',
    highlights: ['IJzertoren', 'Vlaamse velden', 'Historische sites', 'Vlak parcours']
  },
  {
    title: 'Hoofdplaat',
    description: 'Grensoverschrijdende rit naar Hoofdplaat in Zeeland. Genieten van de Zeeuwse polders en dijken met prachtige vergezichten.',
    distance: 107,
    elevation: 154,
    groups: ['A', 'B'],
    type: 'Cyclo',
    duration: '3u30 - 4u',
    gpxUrl: '/gpx/hoofdplaat-107km.gpx',
    garminUrl: 'https://connect.garmin.com/app/course/154806088',
    highlights: ['Zeeuwse polders', 'Dijkwegen', 'Grensovergang', 'Open landschap']
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

export const getTypes = () => ['Cyclo', 'MTB', 'Gravel'] as const;
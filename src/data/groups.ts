export interface Group {
  name: string;
  description: string;
  speed: string;
  wednesday: string;
  sunday: string;
}

export const groups: Group[] = [
  {
    name: 'Groep A',
    description: 'Voor de snelle rijders die op zoek zijn naar uitdaging en hoge snelheden.',
    speed: '37+ km/h',
    wednesday: '18:00 - 80+ km',
    sunday: '09:00 - 80+ km'
  },
  {
    name: 'Groep B',
    description: 'Een sportieve groep voor gevorderde wielrenners met een goed niveau.',
    speed: '32 km/h',
    wednesday: '18:00 - 70-80 km',
    sunday: '09:00 - 70-80 km'
  },
  {
    name: 'Groep C',
    description: 'Voor regelmatige fietsers die een goede ritsnelheid willen behouden.',
    speed: '29 km/h',
    wednesday: '18:00 - 60-70 km',
    sunday: '09:00 - 60-70 km'
  },
  {
    name: 'Groep D',
    description: 'De recreatieve groep voor beginners en rustige fietsers.',
    speed: '27 km/h',
    wednesday: '18:00 - 50-60 km',
    sunday: '09:00 - 50-60 km'
  }
];
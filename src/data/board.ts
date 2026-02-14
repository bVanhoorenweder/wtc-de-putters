export interface BoardMember {
  name: string;
  role: string;
  email?: string;
  stravaUrl?: string;
  initials: string;
  color: string;
}

export const board: BoardMember[] = [
  {
    name: 'Hillewaere Dries',
    role: 'Voorzitter',
    email: 'dries@wtcdeputters.be',
    stravaUrl: 'https://strava.com',
    initials: 'HD',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'De Schacht Ramsey',
    role: 'Secretaris',
    email: 'ramsey@wtcdeputters.be',
    stravaUrl: 'https://strava.com',
    initials: 'DR',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Talloen Esteban',
    role: 'Penningmeester',
    email: 'esteban@wtcdeputters.be',
    stravaUrl: 'https://strava.com',
    initials: 'TE',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Vander Plaetse Jan',
    role: 'Sportieve cel',
    email: 'jan@wtcdeputters.be',
    stravaUrl: 'https://strava.com',
    initials: 'JP',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Stijn Boel',
    role: 'Sportieve cel',
    email: 'stijn@wtcdeputters.be',
    stravaUrl: 'https://strava.com',
    initials: 'SB',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Benjamin Vanhoorenweder',
    role: 'Sportieve cel',
    email: 'benjamin@wtcdeputters.be',
    stravaUrl: 'https://strava.com',
    initials: 'BV',
    color: 'from-teal-500 to-cyan-500'
  }
];
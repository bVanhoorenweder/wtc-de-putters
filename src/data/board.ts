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
    stravaUrl: 'https://www.strava.com/athletes/16587255',
    initials: 'HD',
    color: 'from-putters-primary to-putters-blue'
  },
  {
    name: 'De Schacht Ramsey',
    role: 'Secretaris',
    email: 'ramsey@wtcdeputters.be',
    stravaUrl: 'https://www.strava.com/athletes/15709',
    initials: 'DR',
    color: 'from-putters-primary to-putters-blue'
  },
  {
    name: 'Talloen Esteban',
    role: 'Penningmeester',
    email: 'esteban@wtcdeputters.be',
    stravaUrl: 'https://www.strava.com/athletes/506979',
    initials: 'TE',
    color: 'from-putters-primary to-putters-blue'
  },
  {
    name: 'Vander Plaetse Jan',
    role: 'Sportieve cel',
    email: 'jan@wtcdeputters.be',
    stravaUrl: 'https://www.strava.com/athletes/1775350',
    initials: 'JP',
    color: 'from-putters-primary to-putters-blue'
  },
  {
    name: 'Stijn Boel',
    role: 'Sportieve cel',
    email: 'stijn@wtcdeputters.be',
    stravaUrl: 'https://www.strava.com/athletes/16958513',
    initials: 'SB',
    color: 'from-putters-primary to-putters-blue'
  },
  {
    name: 'Benjamin Vanhoorenweder',
    role: 'Sportieve cel',
    email: 'benjamin@wtcdeputters.be',
    stravaUrl: 'https://www.strava.com/athletes/11342450',
    initials: 'BV',
    color: 'from-putters-primary to-putters-blue'
  }
];
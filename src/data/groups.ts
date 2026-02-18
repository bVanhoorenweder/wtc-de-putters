export interface Group {
  name: string;
  description: string;
  speed: string;
  whatsappUrl?: string;
  wednesday: {
    time: string;
    timeSummer: string;
    distance: string;
  };
  sunday: {
    time: string;
    timeSummer: string;
    timeWinter: string;
    distance: string;
  };
}

export const groups: Group[] = [
  {
    name: 'Groep A',
    description: 'Voor de snelle rijders die op zoek zijn naar uitdaging en hoge snelheden.',
    speed: '38+ km/h',
    whatsappUrl: 'https://chat.whatsapp.com/Kskpm5n2nyD5St7dofkb0N',
    wednesday: {
      time: '19:00',
      timeSummer: '19:00',
      distance: '70-90 km'
    },
    sunday: {
      time: '09:00',
      timeSummer: '08:30',
      timeWinter: '09:00',
      distance: '80-120 km'
    }
  },
  {
    name: 'Groep B',
    description: 'Een sportieve groep voor gevorderde wielrenners met een goed niveau.',
    speed: '33-38 km/h',
    whatsappUrl: 'https://chat.whatsapp.com/DWFBeN7bJBV2H9JhpAoHiu',
    wednesday: {
      time: '19:00',
      timeSummer: '19:00',
      distance: '70-90 km'
    },
    sunday: {
      time: '09:00',
      timeSummer: '08:30',
      timeWinter: '09:00',
      distance: '80-110 km'
    }
  },
  {
    name: 'Groep C',
    description: 'Voor regelmatige fietsers die een goede ritsnelheid willen behouden.',
    speed: '28-33 km/h',
    whatsappUrl: 'https://chat.whatsapp.com/FqNAiJB7KkB7En8cqD4LT1',
    wednesday: {
      time: '19:00',
      timeSummer: '19:00',
      distance: '60-75 km'
    },
    sunday: {
      time: '09:00',
      timeSummer: '09:00',
      timeWinter: '09:00',
      distance: '75-90 km'
    }
  },
  {
    name: 'Groep D',
    description: 'De recreatieve groep voor beginners en rustige fietsers.',
    speed: '25-28 km/h',
    whatsappUrl: 'https://chat.whatsapp.com/CtIOJnXwJKG3S8noxnDw7p',
    wednesday: {
      time: '19:00',
      timeSummer: '19:00',
      distance: '40-50 km'
    },
    sunday: {
      time: '09:00',
      timeSummer: '09:00',
      timeWinter: '09:00',
      distance: '60-75 km'
    }
  }
];
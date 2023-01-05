export default function handlerGetTrainer(req, res) {
  res.status(200).json({
    id: '12345',
    username: 'cristofer-arcand',
    status: 'Trainer',
    firstName: 'Cristofer',
    lastName: 'Arcand',
    type: 'Fitness',
    gender: 'Masculin',
    joined: { date: 3, month: 4, year: 2022 },
    birth: { date: 3, month: 4, year: 1993 },
    hasProPremium: true,
    certificate: true,
    experience: '8',
    country: 'Romania',
    state: 'Bucuresti',
    city: 'Sector 3',
    contact: {
      email: 'email@gmail.com',
      phone: '0770121934',
      website: 'https://www.lipsum.com/',
      facebook: 'https://www.lipsum.com/',
      instagram: 'https://www.lipsum.com/',
      twitter: 'https://www.lipsum.com/',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a vitae dui. Mauris mollis tincidunt lectus eu rutrum. Praesent rhoncus diam diam, vitae tincidunt lorem sollicitudin ac. Aliquam felis diam, rhoncus sit amet posuere vel, commodo eget lorem. Suspendisse varius hendrerit eros, sed suscipit ligula ornare a. Pellentesque commodo, orci non faucibus rutrum, nibh tellus finibus metus, eget sollicitudin nulla neque a elit. Cras at mauris sit amet justo placerat congue sed non odio. Nulla id risus vehicula, sagittis purus non, iaculis velit. In hac habitasse platea dictumst. Praesent consectetur eleifend malesuada. ',
    completedClients: [],
    coverPicture:
      'https://codingbeautydev.com/wp-content/uploads/2022/09/react-get-input-value-on-button-click-1024x576.png',
    profilePicture:
      'https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

    activeClients: [],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'fit',
      },
      {
        src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        alt: 'fit',
      },
      {
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        alt: 'fit',
      },
    ],
    reviews: [
      {
        beneficiaryId: '12345',
        clientId: 'asdas',
        clientFirstName: 'Daisy',
        clientLastName: 'Cunningham',
        clientPhoto:
          'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBneW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',

        date: { date: 23, month: 1, year: 2022 },
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a.',
      },
      {
        beneficiaryId: '12345',
        clientId: 'asdas',
        clientFirstName: 'Isobel',
        clientLastName: 'Annabel',
        clientPhoto:
          'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBneW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',

        date: { date: 23, month: 1, year: 2022 },
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a.',
      },
    ],
    programs: [
      {
        id: '123',
        trainerUsername: 'Cristofer Arcand',
        name: 'Full Body Goal Crusher',
        type: 'PRO',
        category: 'Masă mulsculară',
        experience: 'Incepator',
        workout: {
          id: '12345',
          photo:
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
          name: 'Antrenament Full Body Goal Crusher',
          type: 'PRO',
          category: 'Masă mulsculară',
          description:
            'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
          daysToDo: {
            dayOne: {
              name: 'Luni',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayTwo: {
              name: 'Marti',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayThree: {
              name: 'Miercuri',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayFour: {
              name: 'Joi',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayFive: {
              name: 'Vineri',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            daySix: {
              name: 'Sambata',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            daySeven: {
              name: 'Duminica',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
          },
        },
        nutrition: {
          id: '1234567',
          photo:
            'https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          name: 'Nutritie Full Body Goal Crusher',
          type: 'PRO',
          category: 'Masă mulsculară',
          description:
            'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
          kCal: '2500 - 3000',
          daysToDo: {
            dayOne: {
              name: 'Luni',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayTwo: {
              name: 'Marti',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayThree: {
              name: 'Miercuri',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayFour: {
              name: 'Joi',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayFive: {
              name: 'Vineri',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            daySix: {
              name: 'Sambata',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            daySeven: {
              name: 'Duminica',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
          },
        },
      },
      {
        id: '1234',
        trainerUsername: 'Cristofer Arcand',
        name: 'Full Body Goal Crusher',
        type: 'PRO',
        category: 'Masă mulsculară',
        experience: 'Incepator',
        workout: {
          id: '123455',
          photo:
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
          name: 'Antrenament Full Body Goal Crusher',
          type: 'PRO',
          category: 'Masă mulsculară',
          description:
            'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
          daysToDo: {
            dayOne: {
              name: 'Luni',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayTwo: {
              name: 'Marti',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayThree: {
              name: 'Miercuri',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayFour: {
              name: 'Joi',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            dayFive: {
              name: 'Vineri',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            daySix: {
              name: 'Sambata',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
            daySeven: {
              name: 'Duminica',
              exercises: [
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
                {
                  id: '123456',
                  photo:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                  video: 'https://www.youtube.com/watch?v=XoTXuZQ4SaU',
                  name: 'Impins din orizontal cu bara',
                  category: 'Masă mulsculară',
                  effortZone: 'Antrenament piept + spate + abdomen',
                  reps: '6',
                  series: '3',
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                  ],
                },
              ],
            },
          },
        },
        nutrition: {
          id: '1234567',
          photo:
            'https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          name: 'Nutritie Full Body Goal Crusher',
          type: 'PRO',
          category: 'Masă mulsculară',
          description:
            'Planul alimentar este diferit pentru zilele de antrenament și zilele fără antrenament. În zilele de antrenament vei avea o masă pre-antrenament și o masă de după antrenament totalizând 6 mese în respectivă zi, pe când zilele fără antrenamente vor avea numai 5 mese pe zi.',
          kCal: '2500 - 3000',
          daysToDo: {
            dayOne: {
              name: 'Luni',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayTwo: {
              name: 'Marti',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayThree: {
              name: 'Miercuri',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayFour: {
              name: 'Joi',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            dayFive: {
              name: 'Vineri',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            daySix: {
              name: 'Sambata',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
            daySeven: {
              name: 'Duminica',
              recipes: [
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
                {
                  id: '12345678',
                  photo:
                    'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                  video: 'https://www.youtube.com/watch?v=g7_HKWvhj5I',
                  name: 'Somon cu salata de brocoli si omleta cu cascaval',
                  category: 'Masă mulsculară',
                  kCal: '500 - 600',
                  proteins: '35',
                  carbohydrate: '50',
                  fats: '24',
                  ingredients: [
                    '350g albus ou OptiSana (Lidl)',
                    '3 felii paine integral Vel Pitar (Paco) / Tastino (Lidl) (important e sa fie 90-100g maxim cantitatea pentru ca fiecare marca are greutatea diferita la felii)',
                    'Un avocado mediu (sa fie maro – asa stii ca e copt cum trebuie)',
                  ],
                  modeOfExecution: [
                    'Se toarna albusul intr-un bol mare, feliile de paine se vor inmuia in albus si se va lasa 5-10 minute painea sa absoarba cat mai mult albus. ',
                    'Dupa cele 5-10 minute, feliile de paine vor fi puse intr-o tigaie preincinsa(fara ulei). Avocadoul se va intinde la urma peste cele 3 felii. ',
                    'Pofta buna!',
                  ],
                },
              ],
            },
          },
        },
      },
    ],
  });
}

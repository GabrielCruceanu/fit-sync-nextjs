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
        clientFirstName: 'Cristina',
        clientLastName: 'Cruceanu',
        clientPhoto:
          'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBneW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',

        date: { date: 23, month: 1, year: 2022 },
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac justo in purus convallis tempor a.',
      },
    ],
  });
}

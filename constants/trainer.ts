import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import { GenderType, UserType } from '#/constants/user';
import { ClientsMockup } from '#/constants/client';
import { ReviewsMockup } from '#/constants/review';

export enum TrainerType {
  HighIntensityTraining = 'High Intensity Training',
  Yoga = 'Yoga',
  Fitness = 'Fitness',
  Powerlifting = 'Powerlifting',
  Calisthenic = 'Calisthenic',
  Spin = 'Spin',
  Barre = 'Barre',
  Pilates = 'Pilates',
  Bootcamp = 'Bootcamp',
  RockClimbing = 'Rock climbing',
  Other = 'Other',
}

export const TrainerTypeList: string[] = [
  'High Intensity Training',
  'Yoga',
  'Fitness',
  'Powerlifting',
  'Calisthenic',
  'Spin',
  'Barre',
  'Pilates',
  'Bootcamp',
  'Rock climbing',
  'Other',
];

export const TrainerExperienceData: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '+20',
];

export const TrainerMockup: TrainerProfileModel = {
  id: '12345',
  status: UserType.Trainer,
  firstName: 'Cristofer',
  lastName: 'Arcand',
  type: TrainerType.Fitness,
  gender: GenderType.Male,
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
  completedClients: ClientsMockup,
  coverPicture:
    'https://codingbeautydev.com/wp-content/uploads/2022/09/react-get-input-value-on-button-click-1024x576.png',
  profilePicture:
    'https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

  activeClients: ClientsMockup,
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
  reviews: ReviewsMockup,
};

export const TrainersMockup: TrainerProfileModel[] = [
  {
    id: '12345',
    status: UserType.Trainer,
    firstName: 'Cristofer',
    lastName: 'Arcand',
    type: TrainerType.HighIntensityTraining,
    gender: GenderType.Male,
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
    completedClients: ClientsMockup,
    coverPicture:
      'https://codingbeautydev.com/wp-content/uploads/2022/09/react-get-input-value-on-button-click-1024x576.png',
    profilePicture:
      'https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

    activeClients: ClientsMockup,
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
    reviews: ReviewsMockup,
  },
  {
    id: '12345',
    status: UserType.Trainer,
    firstName: 'Jana',
    lastName: 'Mordekaizer',
    type: TrainerType.Yoga,
    gender: GenderType.Female,
    joined: { date: 23, month: 11, year: 2022 },
    birth: { date: 3, month: 4, year: 1993 },
    hasProPremium: true,
    certificate: true,
    experience: '8',
    country: 'Romania',
    state: 'Bucuresti',
    city: 'Sector 1',
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
    completedClients: ClientsMockup,
    coverPicture:
      'https://codingbeautydev.com/wp-content/uploads/2022/09/react-get-input-value-on-button-click-1024x576.png',
    profilePicture:
      'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

    activeClients: ClientsMockup,
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
    reviews: ReviewsMockup,
  },
  {
    id: '12345',
    status: UserType.Trainer,
    firstName: 'Gianos',
    lastName: 'Parlosons',
    type: TrainerType.Calisthenic,
    gender: GenderType.Male,
    joined: { date: 13, month: 5, year: 2022 },
    birth: { date: 3, month: 4, year: 1993 },
    hasProPremium: true,
    certificate: true,
    experience: '8',
    country: 'Romania',
    state: 'Vrancea',
    city: 'Focsani',
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
    completedClients: ClientsMockup,
    coverPicture:
      'https://codingbeautydev.com/wp-content/uploads/2022/09/react-get-input-value-on-button-click-1024x576.png',
    profilePicture:
      'https://images.unsplash.com/photo-1616279969722-d81a5a3944ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80',

    activeClients: ClientsMockup,
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
    reviews: ReviewsMockup,
  },
];

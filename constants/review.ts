import ReviewModel from '#/model/review/review.model';

export const ReviewMockup: ReviewModel = {
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
};

export const ReviewsMockup: ReviewModel[] = [
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
];

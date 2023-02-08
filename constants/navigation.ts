export type NavItem = {
  name: string;
  slug: string;
  description?: string;
};

export const navigationStatic: NavItem[] = [
  {
    name: 'Acasa',
    slug: '/',
  },
  {
    name: 'Antrenori',
    slug: 'antrenori',
  },
  {
    name: 'Nutritionisti',
    slug: 'nutritionisti',
  },
  {
    name: 'Sali',
    slug: 'sali-de-antrenament',
  },
  {
    name: 'PRO',
    slug: 'pro',
  },
  // {
  //   name: 'Blog',
  //   slug: 'blog',
  // },
];
export const navigationClient: NavItem[] = [
  {
    name: 'Profilul meu',
    slug: 'profil',
  },
  {
    name: 'Editare profil',
    slug: 'editare-profil',
  },
  {
    name: 'Mesaje',
    slug: 'mesaje',
  },
  {
    name: 'Rețete',
    slug: 'retete',
  },
  {
    name: 'Antrenamente',
    slug: 'antrenamente',
  },
];
export const navigationTrainer: NavItem[] = [
  {
    name: 'Profilul meu',
    slug: 'profil',
  },
  {
    name: 'Editare profil',
    slug: 'editare-profil',
  },
  {
    name: 'Mesaje',
    slug: 'mesaje',
  },
  {
    name: 'Clienti',
    slug: 'clienti',
  },
  {
    name: 'Rețete',
    slug: 'retete',
  },
  {
    name: 'Antrenamente',
    slug: 'antrenamente',
  },
];

export const navigationLogout: NavItem = {
  name: 'Deconectare',
  slug: 'deconectare',
};

export const navigationAuth: NavItem = {
  name: 'Autentificare',
  slug: 'autentificare',
};

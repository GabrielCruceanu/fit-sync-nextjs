export type NavItem = {
  name: string;
  slug: string;
  description?: string;
};

export const navigationStatic: NavItem[] = [
  {
    name: 'Acasă antrenor',
    slug: 'antrenor',
  },
  {
    name: 'Acasă client',
    slug: 'client',
  },
  {
    name: 'Caută antrenor',
    slug: 'cauta-antrenor',
  },
  {
    name: 'Blog',
    slug: 'blog',
  },
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
  {
    name: 'Blog',
    slug: 'blog',
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
  {
    name: 'Blog',
    slug: 'blog',
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

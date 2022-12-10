export type NavItem = {
  name: string;
  slug: string;
  description?: string;
};

export const navigationBasic: NavItem[] = [
  {
    name: 'Acasă antrenor',
    slug: 'acasa-antrenor',
  },
  {
    name: 'Acasă client',
    slug: 'acasa-client',
  },
  {
    name: 'Căutați antrenor',
    slug: 'cautați-antrenor',
  },
  {
    name: 'Autentificare',
    slug: 'autentificare',
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

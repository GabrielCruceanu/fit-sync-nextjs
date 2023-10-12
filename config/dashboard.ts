import { DashboardConfig } from '#/ts/types';
import { PagesLinks } from '#/constants/links';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: PagesLinks.homePage.name,
      href: PagesLinks.homePage.link,
    },
    {
      title: PagesLinks.proPage.name,
      href: PagesLinks.proPage.link,
    },
    {
      title: PagesLinks.searchTrainerHomePage.name,
      href: PagesLinks.searchTrainerHomePage.link,
    },
    {
      title: PagesLinks.searchNutritionistHomePage.name,
      href: PagesLinks.searchNutritionistHomePage.link,
    },
    {
      title: PagesLinks.searchGymHomePage.name,
      href: PagesLinks.searchGymHomePage.link,
    },
    {
      title: PagesLinks.blog.name,
      href: PagesLinks.blog.link,
    },
  ],
  sidebarNav: [
    {
      title: 'Posts',
      href: '/dashboard',
      icon: 'post',
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};

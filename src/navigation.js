import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Beginner Bootcamp - July 13 2024',
      href: getPermalink('/beginner-bootcamp'),
    },
    {
      text: 'Weekly Social Nights',
      href: getPermalink('/weekly-social-nights'),
    },
    {
      text: 'Upcoming Events',
      href: getPermalink('/upcoming-events'),
    },
    {
      text: 'Instructors',
      href: getPermalink('/instructors'),
    }
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/socialswingkc/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/socialswingkc' },
  ]
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/socialswingkc/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/socialswingkc' },
  ]
};

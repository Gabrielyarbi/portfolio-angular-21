import { SocialLink } from '@models/social-link.model';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:gabrielyarbi17@gmail.com',
    value:'gabrielyarbi17@gmail.com',
    icon: '✉'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-yarbi-185954211/',
    value: 'in/gabriel-yarbi-185954211/',
    icon: 'in'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5493884646062',
    value: '+5493884646062',
    icon: '☎'
  },
  {
    label: 'CV',
    href: '/cv.pdf',
    value: 'Descargar PDF',
    icon: '⬇'
  }
];
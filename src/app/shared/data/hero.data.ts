import { HeroAction } from '@models/hero-action.model';
import { HeroContact } from '@models/hero-contact.model';

export const HERO_ACTIONS: HeroAction[] = [
  {
    label: 'Ver proyectos →',
    href: '#projects',
    variant: 'primary'
  },
  {
    label: 'Contactarme',
    href: '#contact',
    variant: 'ghost'
  }
];

export const HERO_CONTACTS: HeroContact[] = [
  {
    icon: '📍',
    label: 'San Salvador de Jujuy, Argentina'
  },
  {
    icon: '✉',
    label: 'gabrielyarbi17@gmail.com',
    href: 'mailto:gabrielyarbi17@gmail.com'
  },
  {
    icon: '☎',
    label: '+54 9 388 464 6062'
  }
];
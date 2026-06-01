import { Project } from '@models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'mycatalog',
    title: 'MyCatalog',
    description:
      'Plataforma SaaS multi-tenant para crear catálogos online y landing pages profesionales. Permite administrar productos, categorías, contenido, themes y configuración visual desde un panel admin, generando páginas públicas con SSR, SEO dinámico y personalización por cliente.',

    stack: [
      'Angular 21',
      'SSR',
      'Signals',
      'Supabase',
      'PostgreSQL',
      'RLS',
      'Cloudinary',
      'SEO técnico',
      'Multi-tenant',
    ],
    featured: true,
    image: 'assets/mycatalogweb-portfolio.png',
    links: { demo: 'https://my-catalog-silk.vercel.app/' },
  },
  {
    id: 'myprogressapps',
    title: 'MyProgressApps',
    description:
      'Ecosistema de productos digitales propios donde desarrollo aplicaciones web y móviles de forma integral, participando en frontend, backend, diseño, bases de datos, SEO, despliegue y evolución de producto. Incluye aplicaciones publicadas en Google Play y nuevos productos en desarrollo.',

    stack: [
      'Angular',
      'TypeScript',
      'Flutter',
      'Firebase',
      'Supabase',
      'Producto digital',
    ],
    featured: true,
    image: 'assets/project-myprogressapps.png',
    links: { demo: 'https://my-progress-apps.web.app/' },
  },
  {
    id: 'myprogressgym',
    title: 'My Progress Gym',
    description:
      'Aplicación móvil publicada en Google Play para registrar rutinas, tomar notas de entrenamiento y visualizar el progreso físico a lo largo del tiempo.',

    stack: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    featured: true,
    image: 'assets/my-progress-gym.jpg',
    links: { demo: 'https://play.google.com/store/apps/details?id=com.fit.yarbi.g.my_progress_gym' },
  },
  {
    id: 'shoppinglist',
    title: 'Shopping List',
    description:
      'Aplicación móvil publicada en Google Play para gestionar listas de compras de forma simple, rápida y práctica, pensada para evitar olvidos al momento de ir al supermercado.',

    stack: ['Flutter', 'Dart', 'SQLite'],
    featured: true,
    image: 'assets/lista-de-compras.jpg',
    links: { demo: 'https://play.google.com/store/apps/details?id=com.myprogressapps.yarbi.g.shopping_list' },
  }
];
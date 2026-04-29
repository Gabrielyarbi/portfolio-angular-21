import { Project } from '@models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'myprogressapps',
    title: 'MyProgressApps',
    description:
      'Marca personal y landing oficial de mis aplicaciones móviles de productividad. Infraestructura Serverless en AWS: el formulario de contacto entra por API Gateway → Lambda, persiste en DynamoDB y un segundo Lambda dispara una notificación por mail vía Amazon SES.',
    stack: ['AWS Lambda', 'AWS Lambda', 'DynamoDB'],
    featured: true,
    image: 'assets/project-myprogressapps.png',
    links: { demo: 'https://my-progress-apps.web.app/' },
  },
  {
    id: 'myg',
    title: 'M&G — Envíos',
    description:
      'Landing del emprendimiento de venta de ropa M&G. Catálogo conectado a Instagram y conversión directa por WhatsApp. Diseño editorial enfocado en lectura, jerarquía tipográfica y un flujo de compra simple en 3 pasos.',
    stack: ['Landing', 'WhatsApp Funnel', 'Firebase Hosting'],
    featured: true,
    image: 'assets/project-myg.png',
    links: { demo: 'https://myg-products.web.app/' },
  },
  {
    id: 'myprogressgym',
    title: 'My Progress GYM',
    description:
      'App para medir rendimiento en el tiempo, crear rutinas, tomar notas y notar el progreso en base a los datos.',
    stack: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    featured: true,
    image: 'assets/my-progress-gym.jpg',
    links: { demo: 'https://play.google.com/store/apps/details?id=com.fit.yarbi.g.my_progress_gym' },
  },
  {
    id: 'shoppinglist',
    title: 'Shopping List',
    description:
      'Gestión inteligente de compras, para que no te olvides nada a la hora de ir al super.',
    stack: ['Flutter', 'Dart', 'SQLite'],
    featured: true,
    image: 'assets/lista-de-compras.jpg',
    links: { demo: 'https://play.google.com/store/apps/details?id=com.myprogressapps.yarbi.g.shopping_list' },
  }
];
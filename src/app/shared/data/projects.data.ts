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
    id: 'sailo',
    title: 'Plataformas Logísticas',
    description:
      'Desarrollo y mantenimiento de sistemas críticos para logística, transporte y operaciones empresariales en producción.',
    stack: ['Node.js', 'NestJS', 'AWS', 'Microservices'],
    featured: true
  },
  /*{
   id: 'sailo2',
   title: 'Modernización Legacy',
   description:
     'Migración de soluciones monolíticas hacia arquitecturas desacopladas, mejorando escalabilidad y continuidad operativa.',
   stack: ['TypeScript', 'REST API', 'SQL', 'AWS']
 } */
];
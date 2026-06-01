import { ExperienceItem } from '@models/experience-item.model';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'SAILO',
    period: 'Mar 2022 – Mar 2026',
    location: 'Rosario, Argentina (remoto)',
    description: [
      'Desarrollé funcionalidades frontend y backend para MUVIN, una plataforma de logística y transporte en producción, trabajando sobre módulos de reservas, documentación, descargas y procesos operativos.',
      'Participé en iniciativas de modernización tecnológica, colaborando en la evolución progresiva de componentes legacy en Angular + PHP/Yii2 hacia soluciones más desacopladas y mantenibles.',
      'Analicé y adapté modelos de datos heredados para nuevos desarrollos, participando en procesos de normalización, refactorización y migración de funcionalidades.',
      'Implementé mejoras de rendimiento mediante optimización de consultas y mecanismos de caché reutilizables.'
    ], 
    technologies: ['Angular', 'Node.js', 'NestJS', 'PHP/Yii2', 'MySQL', 'Microservicios', 'Scrum']
  },
  {
    role: 'Full Stack Developer | Productos digitales propios',
    company: 'MyProgressApps',
    period: 'Ene 2025 – Actualidad',
    location: 'Jujuy, Argentina',
    description: [
      'Desarrollo y evoluciono productos digitales propios participando de forma integral en frontend, backend, bases de datos, diseño, SEO, SSR y despliegue.',
      'Construí MyCatalog, una plataforma SaaS multi-tenant para creación de catálogos online y landing pages profesionales utilizando Angular SSR y Supabase.',
      'Diseñé sistemas dinámicos de personalización, SEO optimizado y configuración por cliente para plataformas web modernas.',
      'Actualmente desarrollo StockFlow, una plataforma de gestión de stock en etapa inicial de MVP, con backend en NestJS, base de datos en Supabase/PostgreSQL y frontend en Angular.'
    ],
    technologies: ['Angular', 'NestJS', 'TypeScript', 'Supabase', 'PostgreSQL', 'SSR', 'SEO técnico']
  },
  {
    role: 'Full Stack Developer',
    company: 'SGLC · Sistema de Gestión de Licencias de Conducir',
    period: 'Nov 2021 – Mar 2022',
    location: 'Chile (remoto)',
    description: [
      'Desarrollé y mantuve funcionalidades frontend y backend para una plataforma utilizada por organismos vinculados al Ministerio de Transporte de Chile.',
      'Participé en la implementación de nuevas pantallas y mejoras sobre funcionalidades existentes, colaborando con desarrolladores, QA, arquitectos y líderes técnicos dentro de un entorno Scrum.',
      'Implementé mecanismos de protección de navegación mediante Angular Guards para preservar información en formularios complejos y mejorar la experiencia de usuario.'
    ],
    technologies: ['Angular', 'PHP', 'Laravel', 'Scrum']
  },
  {
    role: 'Full Stack Developer',
    company: 'MTT Red.cl · Ministerio de Transporte de Chile',
    period: 'Oct 2020 – Nov 2021',
    location: 'Chile (remoto)',
    description: [
      'Participé en el desarrollo de una plataforma destinada a la gestión y generación de señalética para infraestructura de transporte público.',
      'Colaboré en la evolución de un sistema heredado hacia una solución moderna basada en Angular y tecnologías web actuales.',
      'Implementé funcionalidades para procesamiento de datos provenientes de archivos CSV y generación automatizada de documentos PDF preparados para impresión en formatos de gran escala.'
    ],
    technologies: ['Angular', 'PHP', 'Laravel', 'MySQL', 'CSV', 'PDF']
  }
];
import { ExperienceItem } from '@models/experience-item.model';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'SAILO',
    period: 'Mar 2022 – Mar 2026',
    location: 'Rosario, Argentina (remoto)',
    description: [
      'Migración progresiva del ecosistema MUVIN desde un monolito Angular + PHP hacia microservicios en Node.js, sin impactar la operación.',
      'Diseño e implementación de servicios desacoplados para procesos críticos.',
      'Módulos de gestión documental, operaciones logísticas y flujos end-to-end.',
      'Refactor legacy y normalización de modelos de datos.'
    ],
    technologies: ['Node.js', 'NestJS', 'Angular', 'PHP/YII2', 'Microservices','Mysql']
  },
  {
    role: 'Founder & Developer',
    company: 'MyProgressApps · Proyecto personal',
    period: 'Ene 2025 – Actualidad',
    location: 'Jujuy, Argentina',
    description: [
      'Fundé un proyecto de apps móviles de productividad y formación de hábitos.',
      'Backend con Firebase, Supabase',
      'Landing con arquitectura Serverless en AWS.',
      'Landing con flujo asíncrono con DynamoDB Streams + Amazon SES.'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'SQlite','AWS','Android Studio']
  },
  {
    role: 'Full Stack Developer',
    company: 'SGLC · Ministerio de Transporte de Chile',
    period: 'Nov 2021 – Mar 2022',
    location: 'Chile (remoto)',
    description: [
      'Mejoras en el Sistema de Gestión de Licencias de Conducir',
      'Mejoras sobre NestJs + Angular optimizando procesos.',
      'Resolución de incidencias en producción.'
    ],
    technologies: ['Node.js','NestJS', 'Angular','PostgreSql']
  },
  {
    role: 'Full Stack Developer',
    company: 'MTT Red.cl · Ministerio de Transporte de Chile',
    period: 'Oct 2020 – Nov 2021',
    location: 'Chile (remoto)',
    description: [
      'Plataforma de gestión de señalética y transporte público.',
      'Autenticación centralizada con Keycloak.',
      'Funcionalidades full stack con Laravel + Angular.',
      'Participación activa en ceremonias Scrum.'
    ],
    technologies: ['PHP/Laravel', 'Angular', 'Keycloak','Mysql']
  }
];
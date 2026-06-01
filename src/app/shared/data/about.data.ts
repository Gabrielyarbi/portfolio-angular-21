import { Stat } from '@models/stat.model';
import { PROJECTS } from './projects.data';
import { EXPERIENCES } from './experience.data';

export const ABOUT_STATS: Stat[] = [
  {
    value: '+5',
    label: 'Años de experiencia'
  },
  {
    value: EXPERIENCES.length.toString(),
    label: 'Empresas / proyectos'
  },
  {
    value: PROJECTS.filter(project => project.featured === true).length.toString(),
    label: 'Productos propios destacados'
  }
];
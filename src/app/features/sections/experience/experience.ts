import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';

import { EXPERIENCES } from '@data/experience.data';
import { ExperienceItem } from '@models/experience-item.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {
  readonly experiences = signal<ExperienceItem[]>(EXPERIENCES);
}
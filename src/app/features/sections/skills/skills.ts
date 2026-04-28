import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';

import { SKILL_GROUPS } from '@data/skills.data';
import { SkillGroup } from '@models/skill-group.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  readonly groups = signal<SkillGroup[]>(SKILL_GROUPS);
}
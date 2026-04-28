import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ABOUT_STATS } from '@data/about.data';
import { Stat } from '@models/stat.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  readonly stats = signal<Stat[]>(ABOUT_STATS);
}
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { HERO_ACTIONS, HERO_CONTACTS } from '@data/hero.data';
import { HeroAction } from '@models/hero-action.model';
import { HeroContact } from '@models/hero-contact.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {
  readonly actions = signal<HeroAction[]>(HERO_ACTIONS);

  readonly contacts = signal<HeroContact[]>(HERO_CONTACTS);
}
import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';

import { SOCIAL_LINKS } from '@data/social-links.data';
import { SocialLink } from '@models/social-link.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  readonly links = signal<SocialLink[]>(SOCIAL_LINKS);
}
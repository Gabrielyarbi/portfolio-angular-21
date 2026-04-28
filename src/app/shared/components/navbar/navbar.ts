import { ChangeDetectionStrategy, Component, OnInit, computed, signal } from '@angular/core';

import { NAV_LINKS } from '@data/nav-links.data';
import { NavLink } from '@models/nav-link.model';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar implements OnInit {
  readonly links = signal<NavLink[]>(NAV_LINKS);

  readonly theme = signal<Theme>('dark');

  readonly themeIcon = computed(() =>
    this.theme() === 'dark' ? '🌙' : '☀️'
  );

  ngOnInit(): void {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const nextTheme: Theme =
      this.theme() === 'dark' ? 'light' : 'dark';

    this.applyTheme(nextTheme);
  }

  private initializeTheme(): void {
    const storedTheme = localStorage.getItem('theme');

    const prefersLight =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: light)').matches;

    const initialTheme: Theme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : prefersLight
          ? 'light'
          : 'dark';

    this.applyTheme(initialTheme);
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );

    localStorage.setItem('theme', theme);
  }
}
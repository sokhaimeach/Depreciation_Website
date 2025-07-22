import { Injectable, signal, effect, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private platformId = inject(PLATFORM_ID);

  theme = signal<'darkMode' | 'lightMode'>('lightMode');

  constructor() {
    // Initialize theme safely
    this.initializeTheme();

    // Setup effect to handle theme changes
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      this.persistTheme(currentTheme);
    });
  }

  private initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme === 'darkMode' || savedTheme === 'lightMode') {
        this.theme.set(savedTheme);
      }
    }
    this.applyTheme(this.theme());
  }

  private persistTheme(theme: 'darkMode' | 'lightMode') {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  toggleTheme() {
    this.theme.update((current) =>
      current === 'lightMode' ? 'darkMode' : 'lightMode'
    );
  }

  applyTheme(theme: 'darkMode' | 'lightMode') {
    if (typeof document !== 'undefined') {
      // Additional safety check
      document.body.classList.remove('darkMode', 'lightMode');
      document.body.classList.add(theme);
    }
  }
}

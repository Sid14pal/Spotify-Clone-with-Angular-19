import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode: boolean = false;
  private isBrowser: boolean;

  constructor(rendererFactory: RendererFactory2, @Inject(PLATFORM_ID) private platformId: object) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(platformId); // Check if running in browser

    if (this.isBrowser) {
      this.loadTheme();
    }
  }

  private loadTheme() {
    if (!this.isBrowser) return;

    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  enableDarkMode() {
    if (this.isBrowser) {
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    this.isDarkMode = true;
  }

  enableLightMode() {
    if (this.isBrowser) {
      this.renderer.removeClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'light');
    }
    this.isDarkMode = false;
  }

  get currentTheme(): boolean {
    return this.isDarkMode;
  }
}

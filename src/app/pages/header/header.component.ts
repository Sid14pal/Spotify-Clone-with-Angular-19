import { Component, inject, model, OnInit, Renderer2 } from '@angular/core';
import { faHome, faMagnifyingGlass, faUser, faCog, faBell, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  faHome = faHome;
  faMagniFyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faCog = faCog;
  faBell = faBell;
  faSun = faSun;
  faMoon = faMoon;
  isDarkMode: boolean = false;


  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.currentTheme;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.currentTheme;
  }
}

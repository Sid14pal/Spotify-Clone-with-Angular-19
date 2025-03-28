import { Component, inject, model, OnInit, Renderer2 } from '@angular/core';
import { faHome, faMagnifyingGlass, faUser, faCog, faBell, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

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

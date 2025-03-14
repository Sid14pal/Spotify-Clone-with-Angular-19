import { Component, OnInit } from '@angular/core';
import { faHome, faMagnifyingGlass, faUser, faCog, faBell} from '@fortawesome/free-solid-svg-icons';

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

}

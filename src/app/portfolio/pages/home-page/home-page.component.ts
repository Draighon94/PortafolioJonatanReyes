import { Component } from '@angular/core';
import { NavBarMenuComponent } from '../../components/nav-bar-menu/nav-bar-menu.component';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'home',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [NavBarMenuComponent, RouterOutlet, WelcomeComponent],
})
export class HomePageComponent {}

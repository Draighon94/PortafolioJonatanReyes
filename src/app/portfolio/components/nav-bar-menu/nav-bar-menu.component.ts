import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavBarOption {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'nav-bar-menu',
  imports: [RouterLink],
  templateUrl: `./nav-bar-menu.component.html`,
  styleUrl: './nav-bar-menu.component.css',
})
export class NavBarMenuComponent {
  navBarOptions: NavBarOption[] = [
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Proyectos',
      route: '/projects',
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Formación',
      route: '/education',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Contacto',
      route: '/contact',
    },
  ];
}

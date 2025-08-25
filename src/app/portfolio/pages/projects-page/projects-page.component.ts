import { Component } from '@angular/core';
import { NavBarMenuComponent } from '../../components/nav-bar-menu/nav-bar-menu.component';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from '../../components/project/project.component';

interface Project {
  image: string;
  label: string;
  sublabel: string;
  route: string;
}

@Component({
  selector: 'projects-page',
  imports: [NavBarMenuComponent, RouterOutlet, ProjectComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {
  projects: Project[] = [
    {
      image: '../../../../assets/icon-acudakeys.png',
      label: 'Acuda Keys',
      sublabel:
        'Aplicación multiplataforma desarrollada en Flutter y diseñada para agilizar y digitalizar los servicios de acuda realizados por vigilantes de seguridad. Ofrece una solución integral para la gestión de llaves, partes de servicio, informes, etc.',
      route: 'https://github.com/Draighon94/AcudaKeys',
    },
    {
      image:
        'https://imgs.search.brave.com/OlHC5T1qBr2XUoW7AfNlkZCeDU4WODLETk_3IreCEfw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2FuZ3Vs/YXIvYW5ndWxhci9y/YXcvbWFpbi9hZGV2/L3NyYy9hc3NldHMv/aW1hZ2VzL3ByZXNz/LWtpdC9hbmd1bGFy/X2ljb25fZ3JhZGll/bnQuZ2lm.jpeg',
      label: 'Portafolio personal',
      sublabel:
        'Este portafolio ha sido desarrollado con Angular 19 a través de autoaprendizaje.',
      route: '',
    },
  ];
}

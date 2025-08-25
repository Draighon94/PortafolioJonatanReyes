import { Component } from '@angular/core';
import { NavBarMenuComponent } from '../../components/nav-bar-menu/nav-bar-menu.component';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from '../../components/education/education.component';

interface Education {
  image: string;
  entity: string;
  titles: string[];
}

@Component({
  selector: 'education-page',
  imports: [NavBarMenuComponent, RouterOutlet, EducationComponent],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.css',
})
export class EducationPageComponent {
  educations: Education[] = [
    {
      image: '../../../../assets/da-vinci.jpeg',
      entity: 'Leonardo da Vinci (Albacete)',
      titles: [
        'CFGS Desarrollo de Aplicaciones Multiplataforma (2023-2025) <br/> Nota: <strong>9,5 *** Matrícula de Honor ***</strong>',
      ],
    },
    {
      image: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      entity: 'Udemy',
      titles: [
        'Flutter & Dart - The Complete Guide [2025 Edition]',
        'Domina Android desde cero con Kotlin, Compose y Gemini AI <br/> <strong>EN CURSO</>',
      ],
    },
  ];
}

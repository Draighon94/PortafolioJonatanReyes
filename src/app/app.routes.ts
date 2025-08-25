import { Routes } from '@angular/router';
import { HomePageComponent } from './portfolio/pages/home-page/home-page.component';
import { EducationPageComponent } from './portfolio/pages/education-page/education-page.component';
import { ProjectsPageComponent } from './portfolio/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './portfolio/pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'education',
    component: EducationPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

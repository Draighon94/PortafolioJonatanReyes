import { Component, input } from '@angular/core';

@Component({
  selector: 'education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  image = input.required<string>();
  entity = input.required<string>();
  titles = input.required<string[]>();
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  image = input.required<string>();
  label = input.required<string>();
  sublabel = input.required<string>();
}

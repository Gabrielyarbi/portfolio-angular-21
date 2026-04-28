import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROJECTS } from '@data/projects.data';
import { Project } from '@models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects = signal<Project[]>(PROJECTS);
}
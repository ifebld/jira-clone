import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { ProjectsComponent } from '../projects/projects.component';
import { ViewProjectsComponent } from '../view-projects/view-projects.component';
import { ProjectProgressComponent } from '../project-progress/project-progress.component';
import { CreateProjectComponent } from '../create-project/create-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ViewProjectsComponent,
    ProjectProgressComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule
  ]
})
export class ProjectModuleModule { }

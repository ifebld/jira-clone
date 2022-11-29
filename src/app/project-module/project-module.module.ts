import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { ProjectsComponent } from '../projects/projects.component';
import { ViewProjectsComponent } from '../view-projects/view-projects.component';
import { ProjectProgressComponent } from '../project-progress/project-progress.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { FormsModule } from '@angular/forms';
import { SoftwareDevelopmentComponent } from '../software-development/software-development.component';
import { ServiceManagementComponent } from '../service-management/service-management.component';
import { WorkManagementComponent } from '../work-management/work-management.component';
import { ProductManagementComponent } from '../product-management/product-management.component';
import {MatRadioModule} from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProjectsComponent,
    ViewProjectsComponent,
    ProjectProgressComponent,
    CreateProjectComponent,
    SoftwareDevelopmentComponent,
    ServiceManagementComponent,
    WorkManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class ProjectModuleModule { }

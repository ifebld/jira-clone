import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ServiceManagementComponent } from '../service-management/service-management.component';
import { WorkManagementComponent } from '../work-management/work-management.component'; 
import { ProductManagementComponent } from '../product-management/product-management.component';

const routes: Routes = [
    {path: 'create-project', component: CreateProjectComponent},
    {path: 'service-management', component: ServiceManagementComponent},
    {path: 'work-management', component: WorkManagementComponent},
    {path: 'product-management', component: ProductManagementComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModuleRoutingModule { }

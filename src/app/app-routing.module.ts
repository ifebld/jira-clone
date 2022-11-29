import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { InviteTeammateComponent } from './invite-teammate/invite-teammate.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
   {path: '', component: SidebarComponent},
   { path: 'projects', component: ProjectsComponent},
   {path: 'view-projects', component: ViewProjectsComponent },
   {path: 'invite-teammate', component: InviteTeammateComponent},
   {path: 'dashboard-view', component: DashboardViewComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



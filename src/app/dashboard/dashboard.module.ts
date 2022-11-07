import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from '../dashboard-view/dashboard-view.component';
import { CreateDashboardComponent } from '../create-dashboard/create-dashboard.component';


@NgModule({
  declarations: [
    DashboardViewComponent,
    CreateDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarModuleRoutingModule } from './side-bar-module-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SideBarModuleRoutingModule,
    FormsModule
  ]
})
export class SideBarModuleModule { }

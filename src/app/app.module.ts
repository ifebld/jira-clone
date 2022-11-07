import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { NavbarModule } from './navbar/navbar.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectModuleModule } from './project-module/project-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskModuleModule } from './task-module/task-module.module';
import { PeopleModule } from './people/people.module';




@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ProjectModuleModule,
    BrowserAnimationsModule,
    TaskModuleModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

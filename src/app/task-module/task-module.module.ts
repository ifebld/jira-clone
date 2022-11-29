import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TaskModuleRoutingModule } from './task-module-routing.module';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    TaskModuleRoutingModule,
    MatDialogModule,
    FormsModule

  ]
})
export class TaskModuleModule { }

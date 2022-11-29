import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { CreateTeamComponent } from '../create-team/create-team.component';
import { InviteTeammateComponent } from '../invite-teammate/invite-teammate.component';
import { MatDialogModule } from  '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CreateTeamComponent,
    InviteTeammateComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatDialogModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PeopleModule { }

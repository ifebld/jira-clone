import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { CreateTeamComponent } from '../create-team/create-team.component';
import { InviteTeammateComponent } from '../invite-teammate/invite-teammate.component';
import { MatDialogModule } from  '@angular/material/dialog'


@NgModule({
  declarations: [
    CreateTeamComponent,
    InviteTeammateComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatDialogModule
  ]
})
export class PeopleModule { }

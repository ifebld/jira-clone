import { Component, OnInit } from '@angular/core';
import { InviteTeammateComponent } from '../invite-teammate/invite-teammate.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { CreateDashboardComponent } from '../create-dashboard/create-dashboard.component';
import { CreateTeamComponent } from '../create-team/create-team.component';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  constructor(private dialogRef : MatDialog){}

  ngOnInit(): void {
  }

  openInviteTeamDialog(){
    this.dialogRef.open(InviteTeammateComponent, {
      backdropClass: 'backdropBackground'
    })
  }

  openCreateTeamDialog(){
    this.dialogRef.open(CreateTeamComponent, {
      backdropClass: 'backdropBackground'
    })
  }

  openDialog2(){
    this.dialogRef.open(CreateTaskComponent, {
      backdropClass: 'backdropBackground'
    })
  }

  openDialog3(){
    this.dialogRef.open(CreateDashboardComponent, {
      backdropClass: 'backdropBackground'
    })
  }

}

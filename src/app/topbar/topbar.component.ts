import { Component, OnInit } from '@angular/core';
import { InviteTeammateComponent } from '../invite-teammate/invite-teammate.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { CreateDashboardComponent } from '../create-dashboard/create-dashboard.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  constructor(private dialogRef : MatDialog){}

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(InviteTeammateComponent)
  }

  openDialog2(){
    this.dialogRef.open(CreateTaskComponent)
  }

  openDialog3(){
    this.dialogRef.open(CreateDashboardComponent)
  }

}

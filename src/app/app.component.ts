import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteTeammateComponent } from './invite-teammate/invite-teammate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jira-clone';

  // constructor(private dialogRef : MatDialog){}

  // openDialog(){
  //   this.dialogRef.open(InviteTeammateComponent)
  // }
}

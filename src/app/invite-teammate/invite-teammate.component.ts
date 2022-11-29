import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import axios from 'axios';

@Component({
  selector: 'app-invite-teammate',
  templateUrl: './invite-teammate.component.html',
  styleUrls: ['./invite-teammate.component.css']
})
export class InviteTeammateComponent implements OnInit {
  constructor(public managementService : ManagementService) { }

  ngOnInit(): void { 
  }

  username = "";

  submit(){   
    (async () => {
       try {
         const response = await axios.post('https://crudcrud.com/api/4ad07543d922423e989c8ffd8b2a9ef6/users',
         {
          username : this.username,
         });
         console.log(response);
       
        }  catch (error) {
          console.error(error);
        }
      })()}

}

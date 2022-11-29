import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ManagementService } from '../management.service';
import axios from 'axios';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  projects : Array<any> = [];
  selectedProject : any;
  users : Array<any> = [];
  selectedUser : any;

  constructor(public managementService : ManagementService ) { }

  text = "";
  type = "";

  ngOnInit(): void {
    (async () => {
      this.projects = await this.managementService.getProjects();
      console.log(this.projects)
    }) ();

    (async ()=> {
      this.users = await this.managementService.getUsers();
      console.log(this.projects)
    }) ();
  }

  onChangeofOptions(selected : any){
    console.log(selected)
  }

  submit(){(async () => {
    try {
      const response = await axios.post('https://crudcrud.com/api/4ad07543d922423e989c8ffd8b2a9ef6/tasks',
      {
        text : this.text,
        type: this.type
      });
      console.log(response);
    
     }  catch (error) {
       console.error(error);
     }
   })()}

  

}

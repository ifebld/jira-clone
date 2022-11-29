import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import  axios  from 'axios';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(public managementService : ManagementService ) { }

  ngOnInit(): void {
  }

  projectName = "";
  type = "";

  submit(){   
    (async () => {
       try {
         const response = await axios.post('https://crudcrud.com/api/4ad07543d922423e989c8ffd8b2a9ef6/projects',
         {
           projectName : this.projectName,
           type: this.type
         });
         console.log(response);
       
        }  catch (error) {
          console.error(error);
        }
      })()}

}

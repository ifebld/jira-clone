import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import axios from 'axios';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  projects: Array<any> = [];
  constructor(public managementService : ManagementService) { }

  project:any = {};

  ngOnInit(): void {
    (async () => { 
      this.projects = await this.managementService.getProjects();
      console.log(this.projects);
    }) ();
  }
  

}

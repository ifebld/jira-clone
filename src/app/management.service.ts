import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  user: any;

  constructor() { }


  users : Array<any> = [];
  projects: Array<any> = [];
  task : any = {};

  getUsers =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/4ad07543d922423e989c8ffd8b2a9ef6/users');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  getProjects =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/4ad07543d922423e989c8ffd8b2a9ef6/projects');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  getTask =  async  () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/4ad07543d922423e989c8ffd8b2a9ef6/tasks');
      console.log(response);
      this.users = response.data;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

}

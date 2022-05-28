import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  url:string = "http://localhost:8080/departments/"
  private departments:Department[] = [];

  getAllDepartments(){
    return this.http.get<Department[]>(this.url);
  }

  addDepartment(newDept:Department){
    return this.http.post<Department>(this.url,newDept);
  }

  getDepartment(id:number){
    return this.http.get<Department>(this.url+id)
  }

  constructor(public http:HttpClient) { }
}

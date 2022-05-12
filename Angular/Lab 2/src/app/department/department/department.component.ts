import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {

  newDept:Department = new Department(0,"","");
  viewDept:Department = new Department(0,"","");
  editDept:Department = new Department(0,"","");
  depts:Department[] = [];

  constructor() { }

  insert(){
    this.depts.push(new Department(this.newDept.id,this.newDept.deptName,this.newDept.location));
  }

  show(id:number){
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id == id){
        this.viewDept = this.depts[i];
      }
    }
  }

  edit(id:number){
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id == id){
        this.editDept = new Department(this.depts[i].id, this.depts[i].deptName, this.depts[i].location);
      }
    }
  }

  update(){
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id == this.editDept.id){
        this.depts[i].deptName = this.editDept.deptName;
        this.depts[i].location = this.editDept.location;
        break;
      }
    }
  }

  delete(id:number){
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id == id){
        this.depts.splice(i,1);
        break;
      }
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  newStudent:Student = new Student(0, "", 0, 0);
  viewStudent:Student = new Student(0, "", 0, 0);
  editStudent:Student = new Student(0, "", 0, 0);
  students:Student[] = [];

  constructor() { }

  insert(){
    this.students.push(new Student(this.newStudent.id,this.newStudent.name,this.newStudent.age,this.newStudent.deptno));
  }

  show(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id == id){
        this.viewStudent = this.students[i];
      }
    }
  }

  edit(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id == id){
        this.editStudent = new Student(this.students[i].id, this.students[i].name, this.students[i].age, this.students[i].deptno);
      }
    }
  }

  update(){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id == this.editStudent.id){
        this.students[i].name = this.editStudent.name;
        this.students[i].age = this.editStudent.age;
        this.students[i].deptno = this.editStudent.deptno;
        break;
      }
    }
  }

  delete(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id == id){
        this.students.splice(i,1);
        break;
      }
    }
  }
  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string = "http://localhost:8080/students/";
  private students:Student[] = []
  
  getAllStudents(){
    return this.http.get<Student[]>(this.url);
  }

  addStudent(newStudent:Student){
    return this.http.post<Student>(this.url,newStudent)
  }

  getStudent(id:number){
    return this.http.get<Student>(this.url+id)
  }
  constructor(public http:HttpClient) { }
}

import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService{

  path = 'https://utn2019-avanzada2-tp8.herokuapp.com/api/';
  pathStudents = this.path + 'students/';
  pathCareers = this.path +'careers/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll() : Promise<any>{
    return this.http.get(this.pathStudents).toPromise();
  }

  getById(id : string) : Promise<any>{
    return this.http.get(this.pathStudents + id).toPromise();
  }

  add(student : Student){ //hecho con observable
    return this.http.post(this.pathStudents,student,this.httpOptions);
  }

  delete(student : Student){
    return this.http.delete(this.pathStudents + student.studentId,this.httpOptions)
  }

  update(id:number, student : Student) : Promise<any>{
    return this.http.patch(this.pathStudents + id,student,this.httpOptions).toPromise();
  }

  getCareers() : Promise<any>{
    return this.http.get(this.pathCareers).toPromise();
  }

  getCareerById(id : number) : Promise<any>{
    return this.http.get(this.pathCareers + id).toPromise();
  }

  
}
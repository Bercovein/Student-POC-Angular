import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService extends Observable<any>{

  path = 'https://utn2019-avanzada2-tp8.herokuapp.com/api/';
  pathStudents = this.path + 'students/';
  pathCareers = this.path +'careers/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private service :Subject<any>) {
    super();
  }

  getAll() : Promise<any>{
    return this.http.get(this.pathStudents).toPromise();
  }

  getById(id : string) : Promise<any>{
    return this.http.get(this.pathStudents + id).toPromise();
  }

  add(student : Student) : Promise<any>{
    return this.http.post(this.pathStudents,student,this.httpOptions).toPromise();
  }

  update(id:number, student : Student) : Promise<any>{
    return this.http.patch(this.pathStudents + id,student,this.httpOptions).toPromise();
  }

  getCareers() : Promise<any>{
    return this.http.get(this.pathCareers).toPromise();
  }
}
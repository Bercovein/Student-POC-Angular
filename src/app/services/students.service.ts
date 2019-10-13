import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  path = 'https://utn2019-avanzada2-tp8.herokuapp.com/api/students/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll() : Promise<any>{
    return this.http.get(this.path).toPromise();
  }

  getById(id : number) : Promise<any>{
    return this.http.get(this.path + '{'+ id + '}').toPromise();
  }

  add(student : Student) : Promise<any>{
    return this.http.post(this.path,student,this.httpOptions).toPromise();
  }

  update(student : Student) : Promise<any>{
    return this.http.patch(this.path + student.studentId,student,this.httpOptions).toPromise();
  }
}
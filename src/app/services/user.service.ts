import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

  path = 'https://utn2019-avanzada2-tp8.herokuapp.com/';
  lin = 'login';
  sup = 'sign-up';

  redirectUrl : string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  //OBSERVABLE
  login(user : User){
    
    const observable = this.http.post(this.path + this.lin,user,this.httpOptions);
    
    observable.subscribe(
      response => {
        let token = response['jwt'];
        localStorage.setItem('token',token)
      },
      error => {
        console.log(error);
      }
    )
    return observable;
  }

  logout():void{
    localStorage.removeItem('token')
  }

  //PROMISE
  signup(user : User): Promise <any>{
    return this.http.post(this.path + this.sup,user,this.httpOptions).toPromise();
  }

}
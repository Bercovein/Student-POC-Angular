import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

  path = 'https://utn2019-avanzada2-tp8.herokuapp.com/';
  lin = 'login';
  sup = 'sign-up';

<<<<<<< HEAD
=======
  token = undefined;
>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0
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
<<<<<<< HEAD
        let token = response['jwt'];
        localStorage.setItem('token',token)
=======
        this.token = response['jwt'];
        console.log(this.token);
>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0
      },
      error => {
        console.log(error);
      }
    )
    return observable;
  }

  logout():void{
<<<<<<< HEAD
    localStorage.removeItem('token')
  }

  

=======
    this.token = undefined;
  }

>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0
  //PROMISE
  signup(user : User): Promise <any>{
    return this.http.post(this.path + this.sup,user,this.httpOptions).toPromise();
  }
}
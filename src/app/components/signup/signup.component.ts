import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user : User = new User();
  private repassword : string;

  constructor(private userService : UserService) { }

  ngOnInit() {

  }
  signup(){
    if(this.user.password == this.repassword){
      this.userService.signup(this.user)
      .then()
      .catch();
    }else{
      console.log('las contraseñas deben ser iguales');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.user).then().catch();
  }

  signup(){
    this.userService.signup(this.user).then().catch();
  }


}

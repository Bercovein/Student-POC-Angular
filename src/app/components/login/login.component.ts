import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();
  loginForm : FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      "email" : new FormControl(
        this.user.email,[Validators.required,Validators.email]),
      "password" : new FormControl(
        this.user.password,[Validators.required])
    });
  }

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  login(){

    this.user.email = this.email.value;
    this.user.password = this.password.value;

    this.userService.login(this.user)
      .then(()=>{
        this.router.navigate(['/list'])}
      )
      .catch(error => {
        console.log(error);
      }
    );
  }
}

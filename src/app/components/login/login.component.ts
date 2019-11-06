import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

    if(localStorage.getItem('token'))
      this.router.navigateByUrl('/list')

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

    this.userService.login(this.user).subscribe(
      response => {
<<<<<<< HEAD
        if(localStorage.getItem('token')){
=======
        if(this.userService.token){
>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0
          let redirect = this.userService.redirectUrl
          ? this.router.parseUrl(this.userService.redirectUrl) : '/list';
          
          Swal.fire({
            title: 'Bienvenido!',
            text: this.user.email,
            type: 'success'
          })

          this.router.navigateByUrl(redirect);
        }
      },
      error => {
        Swal.fire({
          title: 'Oops!',
          text: error,
          type: 'error'
        })
        console.log(error);
      },
      () =>{
        console.log('Papá hicimos algo muy malo!')
      }
    )
  }
}

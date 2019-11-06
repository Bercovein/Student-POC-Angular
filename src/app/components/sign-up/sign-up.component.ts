import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CustomValidator } from 'src/app/models/custom-validator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user: User = new User();
  private rePass : string;
  signupForm : FormGroup;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      "email" : new FormControl(
        this.user.email,[Validators.required,Validators.email]),
      "password" : new FormControl(
        this.user.password,[Validators.required,CustomValidator.forbiddenName(/[$%&|<>#]/)]),
      "rePassword" : new FormControl(
        this.rePass, [Validators.required,CustomValidator.forbiddenName(/[$%&|<>#]/)])
    });
  }

  get email(){return this.signupForm.get('email');}
  get password(){return this.signupForm.get('password')}
  get rePassword(){return this.signupForm.get('rePassword')}

  signup(){

    this.user.email =this.email.value;
    this.user.password = this.password.value;
    this.rePass= this.rePassword.value;

    if(this.user.password == this.rePass){
      this.userService.signup(this.user)
      .then( response => {
        Swal.fire({
          title: 'Bienvenido!',
          text: 'Estamos agradecidos!',
          type: 'success'
        })
        this.router.navigate(['list'])}
      )
      .catch(error =>{ 
        Swal.fire({
          title: 'Oops!',
          text: 'Ha ocurrido un error inesperado',
          type: 'error'
        })
        console.log('Error:' +  error)}
      );
    }else{
      Swal.fire({
        title: 'Oops...',
        text: '...las contraseñas deben ser iguales.',
        type: 'warning'
      })
    }
  }
}

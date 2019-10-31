import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CustomValidator } from 'src/app/models/custom-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user: User = new User();
  private rePassword : String;
  signupForm : FormGroup;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      "email" : new FormControl(
        this.user.email,[Validators.required,Validators.email]),
      "password" : new FormControl(
        this.user.password,[Validators.required,CustomValidator.forbiddenName(/[$%&|<>#]/)]),
      "rePassword" : new FormControl(
        this.rePassword, [Validators.required,CustomValidator.forbiddenName(/[$%&|<>#]/)])
    });
  }

  get email(){return this.signupForm.get('email');}
  get password(){return this.signupForm.get('password')}

  signup(){

    this.user.email =this.email.value;
    this.user.password = this.password.value;

    if(this.user.password == this.rePassword){
      this.userService.signup(this.user)
      .then( ()=>{
        this.router.navigate(['/list'])}
      )
      .catch(error =>{ console.log(error)}
      );
    }else{
      console.log('las contraseñas deben ser iguales');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/student';

import Swal from'sweetalert2';
import { Career } from 'src/app/models/career';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  successPop :  string = 'Agregado con éxito!'; 
  errorPop : string = 'Ha habido un problema..';

  private student : Student = new Student();
  private careers : Array<Career> = new Array();
  studentForm: FormGroup;

  constructor(private studentService : StudentsService) { }

  ngOnInit() {

    this.studentForm = new FormGroup({
      'dni' : new FormControl(
          this.student.dni,
          [Validators.required,Validators.minLength(10)],[]),
      'firstName' : new FormControl(
        this.student.firstName, [Validators.required, Validators.minLength(20)],[]),
      'lastName' : new FormControl(
        this.student.lastName,[Validators.required,Validators.minLength(20)],[]),
      'email' : new FormControl(
        this.student.email,[Validators.email,Validators.required],[]),
      'address' : new FormControl(
        this.student.address,[],[]),
      'careerId' : new FormControl(
        this.student.careerId, [Validators.required],[])
    });


    this.studentService.getCareers()
      .then(response =>{
        this.careers = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  get dni(){ return this.studentForm.get('dni')}
  get firstName(){ return this.studentForm.get('firstName')}
  get lastName(){ return this.studentForm.get('lastName')}
  get email(){ return this.studentForm.get('email')}
  get address(){ return this.studentForm.get('address')}
  get careerId(){ return this.studentForm.get('careerId')}

  add(){ 

    this.student.dni = this.dni.value;
    this.student.firstName = this.firstName.value;
    this.student.lastName = this.lastName.value;
    this.student.email = this.email.value;
    this.student.address = this.address.value;
    this.student.careerId = this.careerId.value;
    
    this.studentService.add(this.student).subscribe(
      response => {Swal.fire({
        title : this.successPop,
        type: 'success'
      });},
      error => {Swal.fire({
        title : this.errorPop,
        text: error,
        type: 'error'
      });
      console.log(error);  
    }
    );
    
  }
}
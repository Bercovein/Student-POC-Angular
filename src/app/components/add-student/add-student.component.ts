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
      'studentId' : new FormControl(
          this.student.studentId,
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

  get studentId(){ return this.studentForm.get('studentId')}
  get firstName(){ return this.studentForm.get('firstName')}
  get lastName(){ return this.studentForm.get('lastName')}
  get email(){ return this.studentForm.get('email')}
  get address(){ return this.studentForm.get('address')}
  get careerId(){ return this.studentForm.get('careerId')}

  add(){ 

    this.student.studentId = this.studentId.value;
    this.student.firstName = this.firstName.value;
    this.student.lastName = this.lastName.value;
    this.student.email = this.email.value;
    this.student.address = this.address.value;
    this.student.careerId = this.careerId.value;
    
    console.log(this.student);
    this.studentService.add(this.student)
      .then(response => {
        Swal.fire({
          title : this.successPop,
          type: 'success'
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Oops!..',
          text: error,
          type: 'warning'
        })
    });
  }


}
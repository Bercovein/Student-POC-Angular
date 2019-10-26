import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';

import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { ActivatedRoute } from '@angular/router';

import Swal from'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  successPop: String = 'Modificado Correctamente';
  errorPop: String = 'Ha habido un problema..';


  private student: Student = new Student();
  studentForm: FormGroup;

  constructor(private studentService : StudentsService, private route : ActivatedRoute) { }

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


    this.studentService
            .getById(this.route.snapshot.paramMap.get('id'))
            .then(response=>{
              this.student = response;
            })
            .catch(error =>{
              Swal.fire(
                {
                  title: 'Oops..',
                  text: error,
                  type: 'warning'
                }
              );
            });
  }


  get studentId(){ return this.studentForm.get('studentId')}
  get firstName(){ return this.studentForm.get('firstName')}
  get lastName(){ return this.studentForm.get('lastName')}
  get email(){ return this.studentForm.get('email')}
  get address(){ return this.studentForm.get('address')}
  get careerId(){ return this.studentForm.get('careerId')}
                                        
  update(){

    this.student.studentId = this.studentId.value;
    this.student.firstName = this.firstName.value;
    this.student.lastName = this.lastName.value;
    this.student.email = this.email.value;
    this.student.address = this.address.value;
    this.student.careerId = this.careerId.value;

    this.studentService.update(this.student.studentId,this.student)
        .then(response =>{
          Swal.fire({
            title : this.successPop,
            text: response,
            type: 'success'
          })
        })
        .catch(error =>{
            Swal.fire({
              title: this.errorPop,
              text: error,
              type: 'warning'
            });
        } );
  }
}

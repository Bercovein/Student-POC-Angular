import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';

import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from'sweetalert2';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  successPop: String = 'Modificado Correctamente';
  errorPop: String = 'Ha habido un problema..';


  private student: Student = new Student();

  constructor(private studentService : StudentsService, 
    private activeRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.studentService
      .getById(this.activeRoute.snapshot.paramMap.get('id'))
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

  update(){
    this.studentService.update(this.student.studentId,this.student)
        .then(response =>{
          Swal.fire({
            title : this.successPop,
            text: response,
            type: 'success'
          })
          this.router.navigate(['list']);
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

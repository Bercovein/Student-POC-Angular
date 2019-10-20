import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/student';

import Swal from'sweetalert2';
import { Career } from 'src/app/models/career';

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

  constructor(private studentService : StudentsService) { }

  ngOnInit() {
    this.studentService.getCareers()
      .then(response =>{
        this.careers = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  add(){ 
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
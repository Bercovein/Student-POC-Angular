import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

import Swal from'sweetalert2';
import { Button } from 'protractor';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students = new Array<Student>();

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.studentService.getAll()
    .then(response => {this.students = response})
    .catch(error => {console.log(error)});
  }

  delete(student : Student){
    Swal.fire({
      title: "Seguro que desea elimiar a..",
      text: student.firstName + ' ' + student.lastName + '?',
      type: "warning"
    }).then((willDelete) =>{
      if(willDelete){
        Swal.fire({
          title: "Te la kreiste weh",
          text: "Este boton no anda", 
          type: "success"
        });
      }
      else{
        Swal.fire({
          title: "Your imaginary file is safe!", 
          type: "success"
        });
      }
    })
      .catch(error => {
        Swal.fire({
          title: 'Oops!..',
          text: error,
          type: 'warning'
      })});
  }
}

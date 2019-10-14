import { Component, OnInit } from '@angular/core';

import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  successPop: String = 'Modificado Correctamente';
  errorPop: String = 'Ha habido un problema..';

  studentId : number;
  dni : number;
  firstName : string;
  lastName : string;
  email : string;
  address : string;

  constructor(private studentService : StudentsService) { }

  ngOnInit() {
  }

  update(){
    let student = new Student(this.dni,this.firstName,this.lastName,this.email,this.address);
    this.studentService.update(this.studentId,student);
  }
}

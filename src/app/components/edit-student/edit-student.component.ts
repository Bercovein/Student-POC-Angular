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

  private student: Student = new Student();

  constructor(private studentService : StudentsService) { }

  ngOnInit() {
  }

  update(){
    this.studentService.update(this.student.studentId,this.student);
  }
}

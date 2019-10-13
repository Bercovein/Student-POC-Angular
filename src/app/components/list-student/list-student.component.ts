import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

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

  getById(){

  }
}

import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  dni : number;
  firstName : string;
  lastName : string;
  email : string;
  address : string;

  constructor(private studentService : StudentsService) { }

  ngOnInit() {
  }

  add(){
    let student = new Student(this.dni,this.firstName,this.lastName, this.email, this.address); 
    console.log(student);
    this.studentService.add(student)
      .then(response => {console.log('Added: ' + 200)})
      .catch(error => {console.log(error)});
  }

}
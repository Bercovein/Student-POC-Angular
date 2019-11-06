import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { Career } from 'src/app/models/career';


import Swal from'sweetalert2';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  careers = new Array<Career>();
  students = new Array<Student>();

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.getAll();
  }

  async getAll(){
    await this.studentService.getCareers()
        .then(response => {this.careers = response})
        .catch(error => {console.log(error)});
    await this.studentService.getAll()
    .then(response => {
      this.students = response;
    })
    .catch(error => {console.log(error)});
  }

  delete(student : Student){ /*AGREGAR LA SUSCRIPCION AL DELETE*/
    Swal.fire({
      title: "Seguro que desea elimiar a..",
      text: student.firstName + ' ' + student.lastName + '?',
      type: "warning",
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33'
    }).then((willDelete) =>{
      if(willDelete){
        this.studentService.delete(student)
        Swal.fire({
<<<<<<< HEAD
          title: "Eliminado!",
          text: student.firstName + ' ' student.lastName, 
=======
          title: "Te la kreiste weh",
          text: "Esta funcionalidad todavia no está implementada", 
>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0
          type: "success"
        });
      }
      else{
        Swal.fire({
<<<<<<< HEAD
          title: "Fiuu..!",
          text: "Sus datos están a salvo",
=======
          title: "Te la kreiste weh",
          text: "Esta funcionalidad todavia no está implementada",
>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0
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
  
  edit(){
    Swal.fire({
      title: "Editar",
      type: "success"
    });
  }
}

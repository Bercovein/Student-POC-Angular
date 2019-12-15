import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {

  }

  isLogged(){
    return localStorage.getItem('token')? true: false;
  }

  logout(){
    this.userService.logout();

    Swal.fire({
      title: 'Gracias!',
      text: 'Vuelvas Prontos!',
      type: 'success',
      confirmButtonText: 'Bye Bye!'
    }).then((willDelete)=>{
      if(willDelete){
        this.router.navigate(['/login']);
      }
    })
  }
}
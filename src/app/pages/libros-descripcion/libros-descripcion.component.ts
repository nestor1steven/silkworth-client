import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros-descripcion',
  templateUrl: './libros-descripcion.component.html',
  styleUrls: ['./libros-descripcion.component.scss']
})
export class LibrosDescripcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se a agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  }

}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-meditacion-descripcion',
  templateUrl: './meditacion-descripcion.component.html',
  styleUrls: ['./meditacion-descripcion.component.scss']
})
export class MeditacionDescripcionComponent implements OnInit {

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

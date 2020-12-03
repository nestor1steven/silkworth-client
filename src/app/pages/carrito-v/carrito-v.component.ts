import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-v',
  templateUrl: './carrito-v.component.html',
  styleUrls: ['./carrito-v.component.scss']
})
export class CarritoVComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlert(){
    Swal.fire(
      'No se pudo hacer el pedido',
      'Tienes que agregar productos al carrito',
      'warning'
    )
  }

}

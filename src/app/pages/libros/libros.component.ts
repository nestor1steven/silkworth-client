import { Component } from '@angular/core';
import { producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent {

  public productos: producto[] = []
  public saludo:string = "Imprime esto!!"

  constructor( private productoService:ProductoService) { 
}

  /* cargarProductos(){
    this.productoService.cargarProductos()
    .subscribe( ({ total, productos }) => {
      this.productos = productos
      
        })

  } */

}

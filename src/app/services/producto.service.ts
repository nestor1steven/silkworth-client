import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { CargarProducto } from '../interfaces/cargar-productos.interface';
import { delay, map } from 'rxjs/operators';
import { producto } from '../models/producto.model';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( /* private http: HttpClient */ ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
      'x-token': this.token
      }
    }
  }

   /* cargarProductos() {

    const url = `${ base_url }/productos`
    return this.http.get<CargarProducto>( url, this.headers)
                .pipe(
                  delay(1000),
                  map( resp => {
                    
                    const productos = resp.productos.map( prod => 
                      new producto( prod.titulo, prod.tipo, prod.autor, 
                        prod.duracion, prod.precio, prod.stock, prod.fecha, 
                        prod.descripcion, prod.editorial, prod.categoria 
                            , prod.img, prod.uid ) );

                    return {
                      total: resp.total,
                      productos
                    }
                  })
                )
  }  */
}

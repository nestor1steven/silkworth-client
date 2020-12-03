import { Component, OnInit } from '@angular/core';
import { producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-meditacion',
  templateUrl: './meditacion.component.html',
  styleUrls: ['./meditacion.component.scss']
})
export class MeditacionComponent implements OnInit {

  constructor( private productoService: ProductoService) { }

  ngOnInit(): void {
  }

}

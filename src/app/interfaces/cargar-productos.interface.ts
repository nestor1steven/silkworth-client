import { producto } from '../models/producto.model';

export interface CargarProducto { 
    total: number, 
    productos: producto[] 
}
import { environment } from '../../environments/environment.prod';

const base_url = environment.base_url;

export class producto{

    constructor(
        public titulo: string,
        public tipo: string,
        public autor: number,
        public duracion: string,
        public precio: string,
        public stock: Date,
        public fecha: Date,
        public descripcion?: number,
        public editorial?: number,
        public categoria?: Date,
        
        public img?: string,
        public uid?: string
    ){}

    get imagenUrl() {

        if ( !this.img ) {
            return `${ base_url }/upload/internos/no-image`; 
        } else if ( this.img.includes('https') ) {
            return this.img;
        } else if ( this.img ) {
            return `${ base_url }/upload/internos/${ this.img}`; 
        } else {

            return `${ base_url }/upload/internos/no-image`; 
        }
        
    }
}
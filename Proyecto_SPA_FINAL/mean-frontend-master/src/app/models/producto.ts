export class Producto {
    _id?: number;
    nombre: string;
    apellido:string;
    idTipodocumento?:number;
    documento:number;
    idlugarResidencia?: number;
    fecha: string;
    email:string;
    telefono:number;
    usuario:string;
    password:string;

    constructor(nombre: string,apellido:string,
        documento:number,  fecha: string,telefono:number,
        email:string,usuario:string, password:string, ){
        this.nombre = nombre;
        this.apellido=apellido;
        this.documento=documento;
        this.fecha= fecha;
        this.email=email;
        this.telefono=telefono;
        this.usuario=usuario;
        this.password=password;
    }
}
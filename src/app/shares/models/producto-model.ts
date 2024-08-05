import { pregunta, respuesta } from "./preguntas-model";

export interface Producto{
    id:          number;
    nombre:       string;
    stock:       number;
    precio: number;
    descripcion:    string;
    image:       string;
    idProveedor: number;
    idCategoria: number;
    costo: 'vendedor' | 'comprador' | 'proveedor';
}

export interface estadoProducto{
    producto: Producto,
    cantidadProceso: number,
    cantidadCompletas: number,
    palabrasClaves: string[],
    cantidadLinks: number,
    interacciones: Boolean,
    preguntas: pregunta[],
    respuestas: respuesta[][]
}
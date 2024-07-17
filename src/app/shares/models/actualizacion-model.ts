import { IProduct } from "./producto-model";
import { pregunta, respuesta } from "./preguntas-model";
import { Subscription } from "rxjs";
import { Venta } from "./sales-model";

export type Actualizacion =
    | ActualizacionBase
    | VendedorActualizacionTipo0
    | ProveedorActualizacionTipo0
    | VendedorActualizacionTipo1o2

interface ActualizacionBase {
    tipo: number;
    idProducto: number;
    fecha: Date;
    idUsuario: number;
    isVendedor: boolean;
}

export interface VendedorActualizacionTipo0 extends ActualizacionBase {
    isVendedor: true
    tipo: 0;
    idPregunta: number;
    idRespuesta: number;
}

export interface ProveedorActualizacionTipo0 extends ActualizacionBase {
    isVendedor: false
    tipo: 0;
    idPregunta: number;
}

export interface VendedorActualizacionTipo1o2 extends ActualizacionBase {
    isVendedor: true
    tipo: 1 | 2;
    idVenta: number;
}

// Vendedores: 0-Pregunta respondida    1-Producto agregado para vender   2-Venta

//Proveedores: 0-Pregunta agregada    1-Producto agregado    2-Producto agregado para vender   3-Venta por vendedor


export interface ActualizacionCompleta {
    actualizacion: Actualizacion
    producto: IProduct;
    pregunta: pregunta | undefined;
    respuesta: respuesta | undefined;
    venta: Venta | undefined
}


//Type Guards

export function isVendedorActualizacionTipo0(actualizacion: Actualizacion): actualizacion is VendedorActualizacionTipo0 {
    return actualizacion.isVendedor && actualizacion.tipo === 0;
}

export function isProveedorActualizacionTipo0(actualizacion: Actualizacion): actualizacion is ProveedorActualizacionTipo0 {
    return !actualizacion.isVendedor && actualizacion.tipo === 0;
}

export function isVendedorActualizacionTipo1o2(actualizacion: Actualizacion): actualizacion is VendedorActualizacionTipo1o2 {
    return actualizacion.isVendedor && (actualizacion.tipo === 1 || actualizacion.tipo === 2) ;
}

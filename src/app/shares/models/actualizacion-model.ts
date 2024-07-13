import { IProduct } from "./producto-model";
import { pregunta, respuesta } from "./preguntas-model";
import { Subscription } from "rxjs";

export type Actualizacion =
    | ActualizacionBase
    | VendedorActualizacionTipo0
    | ProveedorActualizacionTipo0

interface ActualizacionBase {
    tipo: number;
    idProducto: number;
    fecha: Date;
    idUsuario: number;
    isVendedor: boolean
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

// Vendedores: 0-Pregunta respondida    1-Producto agregado para vender   2-Venta

//Proveedores: 0-Pregunta agregada    1-Producto agregado    2-Producto agregado para vender   3-Venta por vendedor


export interface ActualizacionCompleta {
    actualizacion: Actualizacion
    producto: IProduct;
    pregunta: pregunta | undefined;
    respuesta: respuesta | undefined;
}


//Type Guards

export function isVendedorActualizacionTipo0(actualizacion: Actualizacion): actualizacion is VendedorActualizacionTipo0 {
    return actualizacion.isVendedor && actualizacion.tipo === 0;
}

export function isProveedorActualizacionTipo0(actualizacion: Actualizacion): actualizacion is ProveedorActualizacionTipo0 {
    return !actualizacion.isVendedor && actualizacion.tipo === 0;
}
import { Producto } from "./producto-model";

export interface VentaBase {
    idVenta: number
    idProduct: number;
    idProveedor: number;
    idVendedor: number;
    quantity: number;
    method: 'repartidor' | 'mano' | 'vendedor';
    deadline: Date;
    correo: "Correo Argentino" | "Mercado Envios" | "Envios Flex" | null;
    precioVenta: number
}

export interface VentaProceso extends VentaBase {
    state: 'proceso';
}

export interface VentaCompleta extends VentaBase {
    state: 'completa';
    fechaEntrega: Date;
}

export type Venta = VentaProceso | VentaCompleta ;

export interface VentaProducto{
    venta: Venta
    producto: Producto
    rating?: number | null
}



import { IProduct, productoCompleto } from "./producto-model";

export interface VentaBase {
    idVenta: number
    idProduct: number;
    idProveedor: number;
    idVendedor: number;
    quantity: number;
    method: 'repartidor' | 'mano' | 'retirar';
    deadline: Date;
    correo: "Correo Argentino" | "Mercado Envios" | "Envios Flex" | null;
    costo: 'vendedor' | 'comprador' | 'proveedor'
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
    producto: IProduct
}

export interface VentaVendedor extends VentaProducto{
    precioVenta: number
}



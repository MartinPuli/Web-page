export interface VentaBase {
    product: string;
    price: number;
    quantity: number;
    imageUrl: string;
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

export type Venta = VentaProceso | VentaCompleta;

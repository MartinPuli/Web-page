import { IProduct, producto } from "./producto-model"

export interface link{
    idVendedor: number,
    idProduct: number,
    precio: number,
    costo: 'vendedor' | 'comprador' | 'proveedor',
    link: string
}

export interface linkCompleto{
    link: link,
    producto: producto
}
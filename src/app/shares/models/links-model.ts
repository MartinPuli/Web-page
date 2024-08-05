import { Producto } from "./producto-model"
import { Rates } from "./rates-model"

export interface link{
    idVendedor: number,
    idProduct: number,
    precio: number,
    costo: 'vendedor' | 'comprador' | 'proveedor',
    link: string
}

export interface linkCompleto{
    link: link,
    producto: Producto
    rating: number | null
}
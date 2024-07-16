import { Injectable } from '@angular/core';
import { link } from '../models/links-model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  ventasLink: link[] = [
    {
      idVendedor: 1,
      idProduct: 2,
      precio: 500,
      costo: 'vendedor',
      link: "https://linkEjemplo.com"
    },
    {
      idVendedor: 1,
      idProduct: 3,
      precio: 500,
      costo: 'proveedor',
      link: "https://linkEjemplo.com"
    },
    {
      idVendedor: 1,
      idProduct: 4,
      precio: 500,
      costo: 'comprador',
      link: "https://linkEjemplo.com"
    }]

  getLinksPorVendedor(id: Number): link[] {
    return this.ventasLink.filter(venta => venta.idVendedor === id)
  }

  getCantidadLinksProducto(id: number): number {
    let contador = 0
    this.ventasLink.forEach((link) => {
      if (link.idProduct === id) contador++
    })
    return contador
  }
  
}

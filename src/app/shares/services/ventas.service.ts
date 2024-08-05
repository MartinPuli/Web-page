import { Injectable } from '@angular/core';
import { Venta } from '../../shares/models/sales-model';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private ventas: Venta[] = [
    {
      idVenta: 1, 
      idProduct: 1,
      idProveedor: 2,
      idVendedor: 1,
      quantity: 5,
      state: 'proceso',
      method: "repartidor",
      deadline: new Date('December 17, 2024 16:24:00'),
      correo: "Mercado Envios",
      precioVenta: 1000
    },
    {
      idVenta: 2, 
      idProduct: 1,
      idProveedor: 2,
      idVendedor: 1,
      quantity: 3,
      state: 'proceso',
      method: "mano",
      deadline: new Date('December 16, 2024 18:00:00'),
      correo: "Envios Flex",
      precioVenta: 600
    },
    {
      idVenta: 3, 
      idProduct: 2,
      idProveedor: 2,
      idVendedor: 1,
      quantity: 5,
      state: 'completa',
      method: "repartidor",
      deadline: new Date('December 18, 2024 00:00:00'),
      correo: "Mercado Envios",
      fechaEntrega: new Date('December 19, 2024 00:00:00'),
      precioVenta: 750
    },
    {
      idVenta: 4, 
      idProduct: 7,
      idProveedor: 2,
      idVendedor: 1,
      quantity: 6,
      state: 'completa',
      method: "vendedor",
      deadline: new Date('December 18, 2024 00:00:00'),
      correo: null,
      fechaEntrega: new Date('December 20, 2024 00:00:00'),
      precioVenta: 500
    },
    {
      idVenta: 5, 
      idProduct: 7,
      idProveedor: 2,
      idVendedor: 2,
      quantity: 6,
      state: 'proceso',
      method: "vendedor",
      deadline: new Date('December 18, 2024 00:00:00'),
      correo: null,
      precioVenta: 500
    }
  ];

  constructor() { }

  getVentas(): Venta[] {
    return this.ventas;
  }

  getVentasPorId(id:number): Venta{
    return this.ventas.filter(venta => venta.idVenta === id)[0]
  }

  getVentasPorProveedor(id:number): Venta[]{
    return this.ventas.filter(venta => venta.idProveedor === id)
  }

  getVentasPorVendedor(id:number): Venta[]{
    return this.ventas.filter(venta => venta.idVendedor === id)
  }

  getVentasProcesoPorProducto(id: number): number{
    let contador: number  = 0

    this.ventas.forEach(venta=>{
      if(venta.idProduct === id && venta.state === "proceso") contador ++ 
    })

    return contador
  }

  getVentasCompletasPorProducto(id: number): number{
    let contador: number  = 0

    this.ventas.forEach(venta=>{
      if(venta.idProduct === id && venta.state === "completa") contador ++ 
    })

    return contador
  }
}

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
      idProveedor: 1,
      idVendedor: 2,
      quantity: 5,
      state: 'proceso',
      method: "repartidor",
      deadline: new Date('December 17, 2024 16:24:00'),
      correo: "Mercado Envios",
      costo: 'comprador'
    },
    {
      idVenta: 2, 
      idProduct: 1,
      idProveedor: 1,
      idVendedor: 2,
      quantity: 3,
      state: 'proceso',
      method: "mano",
      deadline: new Date('December 16, 2024 18:00:00'),
      correo: "Envios Flex",
      costo: 'proveedor'
    },
    {
      idVenta: 3, 
      idProduct: 2,
      idProveedor: 1,
      idVendedor: 2,
      quantity: 5,
      state: 'completa',
      method: "repartidor",
      deadline: new Date('December 18, 2024 00:00:00'),
      correo: "Mercado Envios",
      fechaEntrega: new Date('December 19, 2024 00:00:00'),
      costo: 'proveedor'
    },
    {
      idVenta: 4, 
      idProduct: 6,
      idProveedor: 1,
      idVendedor: 2,
      quantity: 6,
      state: 'completa',
      method: "retirar",
      deadline: new Date('December 18, 2024 00:00:00'),
      correo: null,
      fechaEntrega: new Date('December 20, 2024 00:00:00'),
      costo: 'vendedor'
    }
  ];

  constructor() { }

  getVentas(): Venta[] {
    return this.ventas;
  }
}

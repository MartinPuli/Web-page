import { Injectable } from '@angular/core';
import { Venta } from '../models/sales-model';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private ventas: Venta[] = [
    {
      product: 'Monitor Led Noblex 24x9/10p 23.8" FULL HD Antiglare Color Negro',
      price: 200000,
      quantity: 1,
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      state: 'proceso',
      method: "repartidor",
      deadline: new Date('December 17, 2024 16:24:00'),
      correo: "Mercado Envios",
      costo: 'comprador'
    },
    {
      product: 'Drone DJI Air 3 Fly More Combo + Control Remoto',
      price: 1200000,
      quantity: 5,
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      state: 'proceso',
      method: "mano",
      deadline: new Date('December 16, 2024 18:00:00'),
      correo: "Envios Flex",
      costo: 'proveedor'
    },
    {
      product: 'Auriculares In-ear Inalámbricos Xiaomi Redmi Buds 4 Lite',
      price: 50000,
      quantity: 10,
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      state: 'completa',
      method: "repartidor",
      deadline: new Date('December 18, 2024 00:00:00'),
      correo: "Mercado Envios",
      fechaEntrega: new Date('December 19, 2024 00:00:00'),
      costo: 'proveedor'
    },
    {
      product: 'Secador de Pelo Profesional',
      price: 20000,
      quantity: 1,
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
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

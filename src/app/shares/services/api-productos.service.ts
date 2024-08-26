import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../shares/models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  private _http = inject(HttpClient)
  private urlBase: string = 'https://fakestoreapi.com/products'

  private productos: Producto[] = [
    {
      id: 1,
      nombre: "bufandadsfsdfsdfsdfdfdsfsdsddfkjkjjcj",
      stock: 6,
      precio: 440,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 1,
      costo: "vendedor"
    },
    {
      id: 2,
      nombre: "monedero",
      stock: 0,
      precio: 576,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 13,
      costo: "comprador"
    },
    {
      id: 3,
      nombre: "monedero",
      stock: 4,
      precio: 655,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 4,
      costo: "proveedor"
    },
    {
      id: 4,
      nombre: "monedero",
      stock: 10,
      precio: 553,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 5,
      costo: "vendedor"
    },
    {
      id: 5,
      nombre: "pañuelo",
      stock: 10,
      precio: 265,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 6,
      costo: "comprador"
    },
    {
      id: 6,
      nombre: "anillo",
      stock: 9,
      precio: 337,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 8,
      costo: "proveedor"
    },
    {
      id: 7,
      nombre: "pendientes de Alta Calidad",
      stock: 0,
      precio: 167,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 13,
      costo: "comprador"
    },
    {
      id: 8,
      nombre: "pulsera Premium",
      stock: 7,
      precio: 158,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 15,
      costo: "comprador"
    },
    {
      id: 9,
      nombre: "llavero",
      stock: 1,
      precio: 462,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 1,
      costo: "proveedor"
    },
    {
      id: 10,
      nombre: "gafas de sol",
      stock: 3,
      precio: 476,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 1,
      costo: "proveedor"
    },
    {
      id: 11,
      nombre: "llavero",
      stock: 7,
      precio: 732,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 3,
      costo: "comprador"
    },
    {
      id: 12,
      nombre: "billetera",
      stock: 7,
      precio: 633,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 4,
      costo: "comprador"
    },
    {
      id: 13,
      nombre: "llavero",
      stock: 6,
      precio: 143,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 6,
      costo: "vendedor"
    },
    {
      id: 14,
      nombre: "pulsera",
      stock: 9,
      precio: 625,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 18,
      costo: "vendedor"
    },
    {
      id: 15,
      nombre: "funda de teléfono",
      stock: 4,
      precio: 862,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 20,
      costo: "comprador"
    },
    {
      id: 16,
      nombre: "auriculares",
      stock: 1,
      precio: 341,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 9,
      costo: "vendedor"
    },
    {
      id: 17,
      nombre: "billetera",
      stock: 2,
      precio: 295,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 20,
      costo: "proveedor"
    },
    {
      id: 18,
      nombre: "mochila",
      stock: 4,
      precio: 758,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 20,
      costo: "proveedor"
    },
    {
      id: 19,
      nombre: "billetera de Alta Calidad",
      stock: 6,
      precio: 571,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 19,
      costo: "comprador"
    },
    {
      id: 20,
      nombre: "billetera",
      stock: 6,
      precio: 257,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 1,
      costo: "proveedor"
    },
    {
      id: 21,
      nombre: "pulsera",
      stock: 8,
      precio: 894,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 2,
      costo: "vendedor"
    },
    {
      id: 22,
      nombre: "reloj de Alta Calidad",
      stock: 2,
      precio: 732,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 5,
      costo: "vendedor"
    },
    {
      id: 23,
      nombre: "auriculares",
      stock: 9,
      precio: 296,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 13,
      costo: "comprador"
    },
    {
      id: 24,
      nombre: "pulsera Premium",
      stock: 2,
      precio: 327,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 15,
      costo: "comprador"
    },
    {
      id: 25,
      nombre: "maletín",
      stock: 9,
      precio: 824,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 15,
      costo: "proveedor"
    },
    {
      id: 26,
      nombre: "pendientes Premium",
      stock: 1,
      precio: 212,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 14,
      costo: "proveedor"
    },
    {
      id: 27,
      nombre: "pulsera",
      stock: 4,
      precio: 262,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 19,
      costo: "comprador"
    },
    {
      id: 28,
      nombre: "auriculares",
      stock: 4,
      precio: 258,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 18,
      costo: "vendedor"
    },
    {
      id: 29,
      nombre: "pulsera",
      stock: 1,
      precio: 573,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 17,
      costo: "vendedor"
    },
    {
      id: 30,
      nombre: "auriculares Premium",
      stock: 6,
      precio: 686,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 16,
      costo: "comprador"
    },
    {
      id: 31,
      nombre: "collar",
      stock: 5,
      precio: 470,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 15,
      costo: "vendedor"
    },
    {
      id: 32,
      nombre: "gafas de sol Premium",
      stock: 5,
      precio: 643,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 15,
      costo: "comprador"
    },
    {
      id: 33,
      nombre: "mochila",
      stock: 2,
      precio: 141,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 14,
      costo: "comprador"
    },
    {
      id: 34,
      nombre: "llavero",
      stock: 4,
      precio: 268,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria:10,
      costo: "proveedor"
    },
    {
      id: 35,
      nombre: "sombrero",
      stock: 1,
      precio: 190,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 10,
      costo: "vendedor"
    },
    {
      id: 36,
      nombre: "auriculares Premium",
      stock: 10,
      precio: 520,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 9,
      costo: "vendedor"
    },
    {
      id: 37,
      nombre: "gafas de sol Compacto",
      stock: 10,
      precio: 546,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 13,
      costo: "proveedor"
    },
    {
      id: 38,
      nombre: "auriculares",
      stock: 8,
      precio: 195,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 1,
      idCategoria: 20,
      costo: "comprador"
    },
    {
      id: 39,
      nombre: "maletín",
      stock: 2,
      precio: 792,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 18,
      costo: "proveedor"
    },
    {
      id: 40,
      nombre: "pulsera",
      stock: 9,
      precio: 453,
      descripcion: "Descripción del producto aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      idProveedor: 2,
      idCategoria: 1,
      costo: "vendedor"
    }
  ];

  getProducts(): Producto[] {
    return this.productos
  }

  getProduct(id: number): Producto {
    return this.productos.filter((producto)=>producto.id === id)[0]
  }

  getProductsByProveedor(id: number): Producto[]{
    return this.productos.filter((producto)=>producto.idProveedor === id)
  }
}

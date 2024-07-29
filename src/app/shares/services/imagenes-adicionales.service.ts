import { Injectable } from '@angular/core';
import { ImagenAdicional } from '../models/imagenes-adicionales-model';

@Injectable({
  providedIn: 'root'
})
export class ImagenesAdicionalesService {

  private imagenesAdicionales: ImagenAdicional[] = [
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 1, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 2, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 2, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 4, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 4, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 4, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 4, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 5, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 5, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 5, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 5, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 5, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 6, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 6, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 6, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 6, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 6, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 6, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 7, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 7, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 7, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 7, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 8, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 9, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 9, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 10, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 10, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 10, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 11, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 11, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 11, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 12, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 12, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 12, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 13, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 13, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 14, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 14, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 14, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 15, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 15, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 15, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 16, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 16, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 16, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 17, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 17, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 17, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 18, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 18, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 18, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { idProducto: 19, url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }
  ]

  getImagenesPorId(id: number) {
    return this.imagenesAdicionales
      .filter(imagen=> imagen.idProducto === id)
      .map(imagen => imagen.url);
  }

}

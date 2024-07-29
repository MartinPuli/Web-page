import { inject, Injectable } from '@angular/core';
import { RelacionAtributo } from '../models/relacion-atributo-model';
import { AtributosService } from './atributos.service';

@Injectable({
  providedIn: 'root'
})
export class AtributosRelacionService {

  private _apiAtributos = inject(AtributosService)

  private relacionesAtributo: RelacionAtributo[] = [
    // Producto 1
    { idAtributo: 1, idProducto: 1, valor: 'Rojo' },
    { idAtributo: 2, idProducto: 1, valor: 'M' },
    { idAtributo: 3, idProducto: 1, valor: '500' },
    { idAtributo: 4, idProducto: 1, valor: 'Algodón' },
    { idAtributo: 5, idProducto: 1, valor: 'MarcaX' },
    { idAtributo: 11, idProducto: 1, valor: '15/03/2023' },
    { idAtributo: 14, idProducto: 1, valor: 'SN12345678' },
    { idAtributo: 29, idProducto: 1, valor: '120' },
    { idAtributo: 43, idProducto: 1, valor: 'Excelente producto' },
    { idAtributo: 44, idProducto: 1, valor: '4.5' },

    // Producto 2
    { idAtributo: 1, idProducto: 2, valor: 'Azul' },
    { idAtributo: 2, idProducto: 2, valor: 'L' },
    { idAtributo: 3, idProducto: 2, valor: '750' },
    { idAtributo: 4, idProducto: 2, valor: 'Plástico' },
    { idAtributo: 10, idProducto: 2, valor: '365' },
    { idAtributo: 25, idProducto: 2, valor: 'WiFi' },
    { idAtributo: 31, idProducto: 2, valor: 'HD' },
    { idAtributo: 35, idProducto: 2, valor: 'Muy fácil' },
    { idAtributo: 45, idProducto: 2, valor: '200' },
    { idAtributo: 47, idProducto: 2, valor: '1.0.1' },

    // Producto 3
    { idAtributo: 1, idProducto: 3, valor: 'Verde' },
    { idAtributo: 2, idProducto: 3, valor: 'S' },
    { idAtributo: 3, idProducto: 3, valor: '300' },
    { idAtributo: 5, idProducto: 3, valor: 'MarcaY' },
    { idAtributo: 6, idProducto: 3, valor: 'ModeloZ' },
    { idAtributo: 7, idProducto: 3, valor: 'Nuevo' },
    { idAtributo: 8, idProducto: 3, valor: '1500' },
    { idAtributo: 9, idProducto: 3, valor: 'En stock' },
    { idAtributo: 12, idProducto: 3, valor: '30/12/2024' },
    { idAtributo: 50, idProducto: 3, valor: 'Hogar' },

    // Producto 4
    { idAtributo: 1, idProducto: 4, valor: 'Negro' },
    { idAtributo: 2, idProducto: 4, valor: 'XL' },
    { idAtributo: 3, idProducto: 4, valor: '400' },
    { idAtributo: 4, idProducto: 4, valor: 'Metal' },
    { idAtributo: 13, idProducto: 4, valor: 'Argentina' },
    { idAtributo: 25, idProducto: 4, valor: 'Bluetooth' },
    { idAtributo: 30, idProducto: 4, valor: '1080p' },
    { idAtributo: 33, idProducto: 4, valor: 'Clásico' },
    { idAtributo: 39, idProducto: 4, valor: '3 días' },
    { idAtributo: 44, idProducto: 4, valor: '4.0' },

    // Producto 5
    { idAtributo: 1, idProducto: 5, valor: 'Blanco' },
    { idAtributo: 2, idProducto: 5, valor: 'M' },
    { idAtributo: 3, idProducto: 5, valor: '600' },
    { idAtributo: 4, idProducto: 5, valor: 'Vidrio' },
    { idAtributo: 20, idProducto: 5, valor: '10W' },
    { idAtributo: 27, idProducto: 5, valor: 'PDF' },
    { idAtributo: 28, idProducto: 5, valor: 'Inglés' },
    { idAtributo: 36, idProducto: 5, valor: 'Bajo' },
    { idAtributo: 40, idProducto: 5, valor: 'Sí' },
    { idAtributo: 43, idProducto: 5, valor: 'Buena calidad' },

    // Productos 6 a 40
    // ...

    // Ejemplo Producto 40
    { idAtributo: 1, idProducto: 40, valor: 'Amarillo' },
    { idAtributo: 2, idProducto: 40, valor: 'XXL' },
    { idAtributo: 3, idProducto: 40, valor: '1200' },
    { idAtributo: 4, idProducto: 40, valor: 'Madera' },
    { idAtributo: 8, idProducto: 40, valor: '3000' },
    { idAtributo: 9, idProducto: 40, valor: 'Disponible' },
    { idAtributo: 14, idProducto: 40, valor: 'SN87654321' },
    { idAtributo: 19, idProducto: 40, valor: '50Hz' },
    { idAtributo: 32, idProducto: 40, valor: 'Vintage' },
    { idAtributo: 48, idProducto: 40, valor: 'GPL' }
  ];

  getAtributosById(idProducto: number): Array<[string, any]> {
    return this.relacionesAtributo
      .filter(rel => rel.idProducto === idProducto)
      .map(rel => {
        const atributo = this._apiAtributos.getAtributoById(rel.idAtributo);
        if (!atributo) {
          return ['Atributo desconocido', rel.valor];
        }
        let valor: number | Date | boolean | string;
        switch (atributo.tipoValor) {
          case 'numero':
            valor = Number(rel.valor);
            break;
          case 'booleano':
            valor = rel.valor.toLowerCase() === 'sí' || rel.valor.toLowerCase() === 'true';
            break;
          case 'fecha':
            const [dd, mm, yyyy] = rel.valor.split('/');
            valor = new Date(`${mm}/${dd}/${yyyy}`);
            break;
          case 'cadena':
          default:
            valor = rel.valor;
            break;
        }
        return [atributo.nombre, valor];
      });
  }

}

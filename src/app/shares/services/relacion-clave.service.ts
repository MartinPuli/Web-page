import { Injectable } from '@angular/core';
import { PalabraClave } from '../models/palabras-clave-model';

@Injectable({
  providedIn: 'root'
})
export class RelacionClaveService {
  private palabrasClaves: PalabraClave[] = [
    // Producto 1
    { palabra: 'smartphone', idProducto: 1 },
    { palabra: 'tecnología', idProducto: 1 },
    { palabra: 'móvil', idProducto: 1 },
    { palabra: 'electrónica', idProducto: 1 },
    { palabra: 'comunicación', idProducto: 1 },
    { palabra: 'teléfono', idProducto: 1 },

    // Producto 2
    { palabra: 'camisa', idProducto: 2 },
    { palabra: 'moda', idProducto: 2 },
    { palabra: 'ropa', idProducto: 2 },
    { palabra: 'algodón', idProducto: 2 },
    { palabra: 'vestimenta', idProducto: 2 },

    // Producto 3
    { palabra: 'sofá', idProducto: 3 },
    { palabra: 'muebles', idProducto: 3 },
    { palabra: 'hogar', idProducto: 3 },
    { palabra: 'comodidad', idProducto: 3 },
    { palabra: 'sala', idProducto: 3 },

    // Producto 4
    { palabra: 'juguete', idProducto: 4 },
    { palabra: 'niños', idProducto: 4 },
    { palabra: 'diversión', idProducto: 4 },
    { palabra: 'educación', idProducto: 4 },
    { palabra: 'creatividad', idProducto: 4 },

    // Producto 5
    { palabra: 'bicicleta', idProducto: 5 },
    { palabra: 'deportes', idProducto: 5 },
    { palabra: 'aire libre', idProducto: 5 },
    { palabra: 'ejercicio', idProducto: 5 },
    { palabra: 'salud', idProducto: 5 },

    // Producto 6
    { palabra: 'novela', idProducto: 6 },
    { palabra: 'literatura', idProducto: 6 },
    { palabra: 'libro', idProducto: 6 },
    { palabra: 'lectura', idProducto: 6 },
    { palabra: 'ficción', idProducto: 6 },

    // Producto 7
    { palabra: 'maquillaje', idProducto: 7 },
    { palabra: 'cosméticos', idProducto: 7 },
    { palabra: 'belleza', idProducto: 7 },
    { palabra: 'cuidado personal', idProducto: 7 },
    { palabra: 'moda', idProducto: 7 },

    // Producto 8
    { palabra: 'auto', idProducto: 8 },
    { palabra: 'vehículo', idProducto: 8 },
    { palabra: 'transporte', idProducto: 8 },
    { palabra: 'motor', idProducto: 8 },
    { palabra: 'carro', idProducto: 8 },

    // Producto 9
    { palabra: 'guitarra', idProducto: 9 },
    { palabra: 'instrumento', idProducto: 9 },
    { palabra: 'música', idProducto: 9 },
    { palabra: 'arte', idProducto: 9 },
    { palabra: 'cuerdas', idProducto: 9 },

    // Producto 10
    { palabra: 'consola', idProducto: 10 },
    { palabra: 'videojuegos', idProducto: 10 },
    { palabra: 'diversión', idProducto: 10 },
    { palabra: 'gaming', idProducto: 10 },
    { palabra: 'entretenimiento', idProducto: 10 },

    // Producto 11
    { palabra: 'plantas', idProducto: 11 },
    { palabra: 'jardinería', idProducto: 11 },
    { palabra: 'verde', idProducto: 11 },
    { palabra: 'naturaleza', idProducto: 11 },
    { palabra: 'exterior', idProducto: 11 },

    // Producto 12
    { palabra: 'perro', idProducto: 12 },
    { palabra: 'mascotas', idProducto: 12 },
    { palabra: 'cuidado', idProducto: 12 },
    { palabra: 'alimentos', idProducto: 12 },
    { palabra: 'juguetes', idProducto: 12 },

    // Producto 13
    { palabra: 'silla', idProducto: 13 },
    { palabra: 'oficina', idProducto: 13 },
    { palabra: 'ergonómica', idProducto: 13 },
    { palabra: 'trabajo', idProducto: 13 },
    { palabra: 'comodidad', idProducto: 13 },

    // Producto 14
    { palabra: 'suplemento', idProducto: 14 },
    { palabra: 'salud', idProducto: 14 },
    { palabra: 'nutrición', idProducto: 14 },
    { palabra: 'vitaminas', idProducto: 14 },
    { palabra: 'bienestar', idProducto: 14 },

    // Producto 15
    { palabra: 'taladro', idProducto: 15 },
    { palabra: 'herramienta', idProducto: 15 },
    { palabra: 'bricolaje', idProducto: 15 },
    { palabra: 'construcción', idProducto: 15 },
    { palabra: 'eléctrico', idProducto: 15 },

    // Producto 16
    { palabra: 'piano', idProducto: 16 },
    { palabra: 'instrumento', idProducto: 16 },
    { palabra: 'música', idProducto: 16 },
    { palabra: 'teclas', idProducto: 16 },
    { palabra: 'arte', idProducto: 16 },

    // Producto 17
    { palabra: 'pintura', idProducto: 17 },
    { palabra: 'arte', idProducto: 17 },
    { palabra: 'creatividad', idProducto: 17 },
    { palabra: 'artesanía', idProducto: 17 },
    { palabra: 'manualidades', idProducto: 17 },

    // Producto 18
    { palabra: 'cuna', idProducto: 18 },
    { palabra: 'bebé', idProducto: 18 },
    { palabra: 'niños', idProducto: 18 },
    { palabra: 'dormir', idProducto: 18 },
    { palabra: 'mobiliario', idProducto: 18 },

    // Producto 19
    { palabra: 'reloj', idProducto: 19 },
    { palabra: 'accesorios', idProducto: 19 },
    { palabra: 'moda', idProducto: 19 },
    { palabra: 'tiempo', idProducto: 19 },
    { palabra: 'estilo', idProducto: 19 },

    // Producto 20
    { palabra: 'cámara', idProducto: 20 },
    { palabra: 'fotografía', idProducto: 20 },
    { palabra: 'tecnología', idProducto: 20 },
    { palabra: 'imagen', idProducto: 20 },
    { palabra: 'video', idProducto: 20 },

    // Producto 21
    { palabra: 'televisión', idProducto: 21 },
    { palabra: 'entretenimiento', idProducto: 21 },
    { palabra: 'pantalla', idProducto: 21 },
    { palabra: 'hogar', idProducto: 21 },
    { palabra: 'smart tv', idProducto: 21 },

    // Producto 22
    { palabra: 'vestido', idProducto: 22 },
    { palabra: 'ropa', idProducto: 22 },
    { palabra: 'moda', idProducto: 22 },
    { palabra: 'mujer', idProducto: 22 },
    { palabra: 'elegante', idProducto: 22 },

    // Producto 23
    { palabra: 'mesa', idProducto: 23 },
    { palabra: 'muebles', idProducto: 23 },
    { palabra: 'comedor', idProducto: 23 },
    { palabra: 'hogar', idProducto: 23 },
    { palabra: 'decoración', idProducto: 23 },

    // Producto 24
    { palabra: 'robot', idProducto: 24 },
    { palabra: 'juguete', idProducto: 24 },
    { palabra: 'tecnología', idProducto: 24 },
    { palabra: 'niños', idProducto: 24 },
    { palabra: 'educación', idProducto: 24 },

    // Producto 25
    { palabra: 'patines', idProducto: 25 },
    { palabra: 'deportes', idProducto: 25 },
    { palabra: 'exterior', idProducto: 25 },
    { palabra: 'diversión', idProducto: 25 },
    { palabra: 'ejercicio', idProducto: 25 },

    // Producto 26
    { palabra: 'poesía', idProducto: 26 },
    { palabra: 'libro', idProducto: 26 },
    { palabra: 'literatura', idProducto: 26 },
    { palabra: 'arte', idProducto: 26 },
    { palabra: 'lectura', idProducto: 26 },

    // Producto 27
    { palabra: 'perfume', idProducto: 27 },
    { palabra: 'fragancia', idProducto: 27 },
    { palabra: 'belleza', idProducto: 27 },
    { palabra: 'cuidado personal', idProducto: 27 },
    { palabra: 'moda', idProducto: 27 },

    // Producto 28
    { palabra: 'motocicleta', idProducto: 28 },
    { palabra: 'vehículo', idProducto: 28 },
    { palabra: 'transporte', idProducto: 28 },
    { palabra: 'motor', idProducto: 28 },
    { palabra: 'aventura', idProducto: 28 },

    // Producto 29
    { palabra: 'batería', idProducto: 29 },
    { palabra: 'instrumento', idProducto: 29 },
    { palabra: 'música', idProducto: 29 },
    { palabra: 'percusión', idProducto: 29 },
    { palabra: 'arte', idProducto: 29 },

    // Producto 30
    { palabra: 'auriculares', idProducto: 30 },
    { palabra: 'tecnología', idProducto: 30 },
    { palabra: 'música', idProducto: 30 },
    { palabra: 'audio', idProducto: 30 },
    { palabra: 'sonido', idProducto: 30 },

    // Producto 31
    { palabra: 'maceta', idProducto: 31 },
    { palabra: 'jardinería', idProducto: 31 },
    { palabra: 'plantas', idProducto: 31 },
    { palabra: 'exterior', idProducto: 31 },
    { palabra: 'decoración', idProducto: 31 },

    // Producto 32
    { palabra: 'gato', idProducto: 32 },
    { palabra: 'mascotas', idProducto: 32 },
    { palabra: 'alimentos', idProducto: 32 },
    { palabra: 'juguetes', idProducto: 32 },
    { palabra: 'cuidado', idProducto: 32 },

    // Producto 33
    { palabra: 'escritorio', idProducto: 33 },
    { palabra: 'oficina', idProducto: 33 },
    { palabra: 'trabajo', idProducto: 33 },
    { palabra: 'muebles', idProducto: 33 },
    { palabra: 'ergonómico', idProducto: 33 },

    // Producto 34
    { palabra: 'proteína', idProducto: 34 },
    { palabra: 'suplemento', idProducto: 34 },
    { palabra: 'nutrición', idProducto: 34 },
    { palabra: 'salud', idProducto: 34 },
    { palabra: 'ejercicio', idProducto: 34 },

    // Producto 35
    { palabra: 'destornillador', idProducto: 35 },
    { palabra: 'herramienta', idProducto: 35 },
    { palabra: 'bricolaje', idProducto: 35 },
    { palabra: 'manualidades', idProducto: 35 },
    { palabra: 'construcción', idProducto: 35 },

    // Producto 36
    { palabra: 'violín', idProducto: 36 },
    { palabra: 'instrumento', idProducto: 36 },
    { palabra: 'música', idProducto: 36 },
    { palabra: 'cuerdas', idProducto: 36 },
    { palabra: 'arte', idProducto: 36 },

    // Producto 37
    { palabra: 'acuarela', idProducto: 37 },
    { palabra: 'arte', idProducto: 37 },
    { palabra: 'pintura', idProducto: 37 },
    { palabra: 'manualidades', idProducto: 37 },
    { palabra: 'creatividad', idProducto: 37 },

    // Producto 38
    { palabra: 'biberón', idProducto: 38 },
    { palabra: 'bebé', idProducto: 38 },
    { palabra: 'niños', idProducto: 38 },
    { palabra: 'alimentación', idProducto: 38 },
    { palabra: 'maternidad', idProducto: 38 },

    // Producto 39
    { palabra: 'pulsera', idProducto: 39 },
    { palabra: 'joyería', idProducto: 39 },
    { palabra: 'accesorios', idProducto: 39 },
    { palabra: 'moda', idProducto: 39 },
    { palabra: 'estilo', idProducto: 39 },

    // Producto 40
    { palabra: 'trípode', idProducto: 40 },
    { palabra: 'fotografía', idProducto: 40 },
    { palabra: 'tecnología', idProducto: 40 },
    { palabra: 'video', idProducto: 40 },
    { palabra: 'imagen', idProducto: 40 },
  ];

  getPalabrasClavePorProducto(idProducto: number): string[] {
    return this.palabrasClaves
      .filter(palabraClave => palabraClave.idProducto === idProducto)
      .map(palabraClave => palabraClave.palabra);
  }
}

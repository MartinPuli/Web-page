import { Injectable } from '@angular/core';
import { Categorias } from '../models/categorias-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: Categorias[] = [
    { id: 1, categoria: 'Electrónica' },
    { id: 2, categoria: 'Ropa' },
    { id: 3, categoria: 'Hogar' },
    { id: 4, categoria: 'Juguetes' },
    { id: 5, categoria: 'Deportes' },
    { id: 6, categoria: 'Libros' },
    { id: 7, categoria: 'Belleza' },
    { id: 8, categoria: 'Automóviles' },
    { id: 9, categoria: 'Música' },
    { id: 10, categoria: 'Videojuegos' },
    { id: 11, categoria: 'Jardinería' },
    { id: 12, categoria: 'Mascotas' },
    { id: 13, categoria: 'Oficina' },
    { id: 14, categoria: 'Salud' },
    { id: 15, categoria: 'Herramientas' },
    { id: 16, categoria: 'Instrumentos Musicales' },
    { id: 17, categoria: 'Arte y Artesanía' },
    { id: 18, categoria: 'Bebés' },
    { id: 19, categoria: 'Accesorios' },
    { id: 20, categoria: 'Fotografía' },
  ];

  constructor() { }

  getCategorias(): string[] {
    return this.categorias
      .map(categoria => categoria.categoria);
  }

  getCategoriaPorId(id: number): Categorias | undefined {
    return this.categorias.find(categoria => categoria.id === id);
  }
}


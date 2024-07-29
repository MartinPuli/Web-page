import { Injectable } from '@angular/core';
import { Atributo } from '../models/atributo-model';

@Injectable({
  providedIn: 'root'
})
export class AtributosService {

  private atributos: Atributo[] = [
    { id: 1, nombre: 'Color', tipoValor: 'cadena' },
    { id: 2, nombre: 'Tamaño', tipoValor: 'cadena' },
    { id: 3, nombre: 'Peso', tipoValor: 'numero' },
    { id: 4, nombre: 'Material', tipoValor: 'cadena' },
    { id: 5, nombre: 'Marca', tipoValor: 'cadena' },
    { id: 6, nombre: 'Modelo', tipoValor: 'cadena' },
    { id: 7, nombre: 'Condición', tipoValor: 'cadena' },
    { id: 8, nombre: 'Precio', tipoValor: 'numero' },
    { id: 9, nombre: 'Disponibilidad', tipoValor: 'cadena' },
    { id: 10, nombre: 'Garantía', tipoValor: 'numero' },
    { id: 11, nombre: 'Fecha de fabricación', tipoValor: 'fecha' },
    { id: 12, nombre: 'Fecha de caducidad', tipoValor: 'fecha' },
    { id: 13, nombre: 'País de origen', tipoValor: 'cadena' },
    { id: 14, nombre: 'Número de serie', tipoValor: 'cadena' },
    { id: 15, nombre: 'Dimensiones', tipoValor: 'cadena' },
    { id: 16, nombre: 'Capacidad', tipoValor: 'numero' },
    { id: 17, nombre: 'Potencia', tipoValor: 'numero' },
    { id: 18, nombre: 'Voltaje', tipoValor: 'numero' },
    { id: 19, nombre: 'Frecuencia', tipoValor: 'numero' },
    { id: 20, nombre: 'Consumo energético', tipoValor: 'numero' },
    { id: 21, nombre: 'Resistencia al agua', tipoValor: 'cadena' },
    { id: 22, nombre: 'Temperatura de funcionamiento', tipoValor: 'numero' },
    { id: 23, nombre: 'Compatibilidad', tipoValor: 'cadena' },
    { id: 24, nombre: 'Software incluido', tipoValor: 'cadena' },
    { id: 25, nombre: 'Conectividad', tipoValor: 'cadena' },
    { id: 26, nombre: 'Velocidad', tipoValor: 'numero' },
    { id: 27, nombre: 'Formato', tipoValor: 'cadena' },
    { id: 28, nombre: 'Idioma', tipoValor: 'cadena' },
    { id: 29, nombre: 'Duración', tipoValor: 'numero' },
    { id: 30, nombre: 'Resolución', tipoValor: 'cadena' },
    { id: 31, nombre: 'Calidad', tipoValor: 'cadena' },
    { id: 32, nombre: 'Estilo', tipoValor: 'cadena' },
    { id: 33, nombre: 'Diseño', tipoValor: 'cadena' },
    { id: 34, nombre: 'Usabilidad', tipoValor: 'cadena' },
    { id: 35, nombre: 'Seguridad', tipoValor: 'cadena' },
    { id: 36, nombre: 'Mantenimiento', tipoValor: 'cadena' },
    { id: 37, nombre: 'Accesorios incluidos', tipoValor: 'cadena' },
    { id: 38, nombre: 'Manual de usuario', tipoValor: 'cadena' },
    { id: 39, nombre: 'Tiempo de entrega', tipoValor: 'numero' },
    { id: 40, nombre: 'Política de devolución', tipoValor: 'cadena' },
    { id: 41, nombre: 'Opciones de pago', tipoValor: 'cadena' },
    { id: 42, nombre: 'Impuestos aplicables', tipoValor: 'cadena' },
    { id: 43, nombre: 'Comentarios de usuarios', tipoValor: 'cadena' },
    { id: 44, nombre: 'Calificación', tipoValor: 'numero' },
    { id: 45, nombre: 'Número de descargas', tipoValor: 'numero' },
    { id: 46, nombre: 'Requisitos del sistema', tipoValor: 'cadena' },
    { id: 47, nombre: 'Actualizaciones disponibles', tipoValor: 'cadena' },
    { id: 48, nombre: 'Licencia', tipoValor: 'cadena' },
    { id: 49, nombre: 'Proveedor', tipoValor: 'cadena' },
    { id: 50, nombre: 'Categoría', tipoValor: 'cadena' }
];

  getAtributos(){
    return this.atributos
  }

  getAtributoById(id: number){
    return this.atributos.filter(atributo=> atributo.id === id)[0]
  }
}

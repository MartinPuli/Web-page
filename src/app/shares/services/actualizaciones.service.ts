import { Injectable } from '@angular/core';
import { Actualizacion } from '../models/actualizacion-model';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionesService {

  actualizaciones: Actualizacion[] = [
    {
      isVendedor: true,
      tipo: 0,
      idProducto: 1,
      fecha: new Date('2023-01-01T10:00:00Z'),
      idUsuario: 1,
      idPregunta: 1,
      idRespuesta: 1
    },
    {
      isVendedor: true,
      tipo: 0,
      idProducto: 2,
      fecha: new Date('2023-02-01T11:00:00Z'),
      idUsuario: 1,
      idPregunta: 2,
      idRespuesta: 2
    },
    {
      isVendedor: true,
      tipo: 1,
      idProducto: 2,
      fecha: new Date('2023-03-01T12:00:00Z'),
      idUsuario: 1,
      idVenta: 3
    },
    {
      isVendedor: true,
      tipo: 2,
      idProducto: 6,
      fecha: new Date('2023-04-01T13:00:00Z'),
      idUsuario: 1,
      idVenta: 4
    },
    {
      isVendedor: true,
      tipo: 2,
      idProducto: 1,
      fecha: new Date('2023-05-01T14:00:00Z'),
      idUsuario: 1,
      idVenta: 2
    },
    {
      isVendedor: false,
      tipo: 0,
      idProducto: 2,
      fecha: new Date('2023-06-01T15:00:00Z'),
      idUsuario: 2,
      idPregunta: 2
    },
    {
      isVendedor: false,
      tipo: 0,
      idProducto: 1,
      fecha: new Date('2023-07-01T16:00:00Z'),
      idUsuario: 2,
      idPregunta: 2
    },
    {
      isVendedor: false,
      tipo: 1,
      idProducto: 8,
      fecha: new Date('2023-08-01T17:00:00Z'),
      idUsuario: 2,
    },
    {
      isVendedor: false,
      tipo: 1,
      idProducto: 9,
      fecha: new Date('2023-09-01T18:00:00Z'),
      idUsuario: 2
    },
    {
      isVendedor: false,
      tipo: 2,
      idProducto: 9,
      fecha: new Date('2023-09-01T18:00:00Z'),
      idUsuario: 2
    },
    {
      isVendedor: false,
      tipo: 3,
      idProducto: 10,
      fecha: new Date('2023-09-01T18:00:00Z'),
      idUsuario: 2
    }
  ]

  getActualizacionesUsuario(id:number){
    return this.actualizaciones.filter(actualizacion =>actualizacion.idUsuario === id)
  }

}
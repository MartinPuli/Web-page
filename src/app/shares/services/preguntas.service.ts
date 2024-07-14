import { Injectable } from '@angular/core';
import { pregunta, respuesta } from '../models/preguntas-model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  
  preguntas: pregunta[] = [
    {
      idPregunta: 1,
      idProducto: 1,
      idConsultador: 1,
      pregunta: "Cuanto pesa?"
    },
    {
      idPregunta: 2,
      idProducto: 1,
      idConsultador: 1,
      pregunta: "Cuanto mide?"
    },
    {
      idPregunta: 3,
      idProducto: 3,
      idConsultador: 3,
      pregunta: "Que colores hay?"
    },
    {
      idPregunta: 4,
      idProducto: 7,
      idConsultador: 1,
      pregunta: "De que esta hecho?"
    },
    {
      idPregunta: 5,
      idProducto: 8,
      idConsultador: 1,
      pregunta: "Cuando se fabricaran mas?"
    },
    {
      idPregunta: 6,
      idProducto: 10,
      idConsultador: 2,
      pregunta: "Cuanto tarda en enviar los productos?"
    },
    {
      idPregunta: 7,
      idProducto: 11,
      idConsultador: 3,
      pregunta: "Donde se fabricaron?"
    },
    {
      idPregunta: 8,
      idProducto: 2,
      idConsultador: 3,
      pregunta: "Cual es tu nombre?"
    },
    {
      idPregunta: 9,
      idProducto: 2,
      idConsultador: 3,
      pregunta: "Polimardo buenardopolis breeeeother?"
    }
  ]

  respuestas: respuesta[] = [
    {
      idRespuesta: 1,
      idPregunta: 1,
      respuesta: "dsjaklllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllldskfakhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjllllllllllllllllllllllllllllll"
    },
    {
      idRespuesta: 2,
      idPregunta: 1,
      respuesta: "En China"
    },
    {
      idRespuesta: 3,
      idPregunta: 8,
      respuesta: "Lucas"
    },
    {
      idRespuesta: 4,
      idPregunta: 8,
      respuesta: "Juan"
    }
  ]

  getPreguntasPorProducto(id:number){
    return this.preguntas.filter(pregunta => pregunta.idProducto === id);
  }

  getPreguntaPorId(id:number){
    return this.preguntas.filter(pregunta => pregunta.idPregunta === id)[0];
  }

  getRespuestasPorPregunta(id:number){
    return this.respuestas.filter(respuesta => respuesta.idPregunta === id);
  }

  getRespuestasPorId(id:number){
    return this.respuestas.filter(respuesta => respuesta.idRespuesta === id)[0];
  }

  constructor() { }
}

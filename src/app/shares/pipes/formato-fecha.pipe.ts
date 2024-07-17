import { Pipe, PipeTransform } from '@angular/core';
import { Actualizacion } from '../models/actualizacion-model';

@Pipe({
  name: 'formatoFecha',
  standalone: true
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha: Actualizacion['fecha']): string {
    let yearString: string = fecha.getFullYear() >= 10?fecha.getFullYear().toString():`0${fecha.getFullYear()}`
    let mesString: string = fecha.getMonth() >= 10? (fecha.getMonth() + 1).toString():`0${fecha.getMonth() + 1}`
    let diaString: string = fecha.getDate() >= 10?fecha.getDate().toString():`0${fecha.getDate()}`
    let horaString: string = fecha.getHours() >= 10?fecha.getHours().toString():`0${fecha.getHours()}`
    let minutosString: string = fecha.getMinutes() >= 10?fecha.getMinutes().toString():`0${fecha.getMinutes()}`

    return Number(minutosString) == 0 && Number(horaString)
      ? `${diaString}/${mesString}/${yearString} ${horaString}:${minutosString}` 
      : `${diaString}/${mesString}/${yearString}`
  }

}

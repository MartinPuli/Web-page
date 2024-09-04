import { Pipe, PipeTransform } from '@angular/core';
import { Venta } from '../models/sales-model';

@Pipe({
  name: 'formatoFechaVentas',
  standalone: true
})
export class FormatoFechaVentasPipe implements PipeTransform {

  transform(fecha: Date): string {
    let yearString: string = fecha.getFullYear() >= 10?fecha.getFullYear().toString():`0${fecha.getFullYear()}`
    let mesString: string = fecha.getMonth() >= 10?fecha.getMonth().toString():`0${fecha.getMonth()}`
    let diaString: string = fecha.getDate() >= 10?fecha.getDate().toString():`0${fecha.getDate()}`
    let horaString: string = fecha.getHours() >= 10?fecha.getHours().toString():`0${fecha.getHours()}`
    let minutosString: string = fecha.getMinutes() >= 10?fecha.getMinutes().toString():`0${fecha.getMinutes()}`

    return Number(minutosString) == 0 && Number(horaString)
      ? `${diaString}/${mesString}/${yearString} a las ${horaString}:${minutosString}hrs` 
      : `${diaString}/${mesString}/${yearString}`
  }

}

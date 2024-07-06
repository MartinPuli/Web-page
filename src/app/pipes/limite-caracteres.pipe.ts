import { Pipe, PipeTransform } from '@angular/core';
import { Venta } from '../models/sales-model';

@Pipe({
  name: 'limiteCaracteres',
  standalone: true
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(cadena: Venta['product']): string {
    return cadena.length > 28 ? cadena.slice(0,25) + '...' : cadena
  }

}

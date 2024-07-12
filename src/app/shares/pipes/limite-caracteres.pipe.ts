import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/producto-model';

@Pipe({
  name: 'limiteCaracteres',
  standalone: true
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(cadena: IProduct['title']): string {
    return cadena.length > 28 ? cadena.slice(0,25) + '...' : cadena
  }

}

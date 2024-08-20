import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto-model';

@Pipe({
  name: 'limiteCaracteres',
  standalone: true
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(cadena: Producto['nombre']): string {
    return cadena.length > 28 ? cadena.slice(0,25) + '...' : cadena  
  }

}

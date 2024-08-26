import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto-model';

@Pipe({
  name: 'limiteCaracteres',
  standalone: true
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(cadena: Producto['nombre'], args: number): string {
    return cadena.length > args ? cadena.slice(0,args-3) + '...' : cadena  
  }

}

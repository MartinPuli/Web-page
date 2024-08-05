import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agregar0',
  standalone: true
})
export class Agregar0Pipe implements PipeTransform {

  transform(numero: number): string {
    return numero >= 10? numero.toString() : `0${numero}`;
  }

}

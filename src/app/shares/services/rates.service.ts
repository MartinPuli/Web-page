import { Injectable } from '@angular/core';
import { Rates } from '../models/rates-model';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  private rates: Rates[] = [
    {
      id: 1,
      rate: 6,
      idProducto: 1,
      idVendedor: 1
    },
    {
      id: 2,
      rate: 4,
      idProducto: 1,
      idVendedor: 2
    },
    {
      id: 3,
      rate: 10,
      idProducto: 2,
      idVendedor: 1
    },
    {
      id: 4,
      rate: 8,
      idProducto: 4,
      idVendedor: 1
    },
    {
      id: 5,
      rate: 6,
      idProducto: 3,
      idVendedor: 2
    },
    {
      id: 6,
      rate: 2,
      idProducto: 8,
      idVendedor: 2
    },
    {
      id: 7,
      rate: 7.5,
      idProducto: 8,
      idVendedor: 1
    },
    {
      id: 8,
      rate: 9,
      idProducto: 3,
      idVendedor: 1
    },
    {
      id: 9,
      rate: 6,
      idProducto: 10,
      idVendedor: 1
    },
    {
      id: 10,
      rate: 6.6,
      idProducto: 13,
      idVendedor: 1
    },
    {
      id: 11,
      rate: 8,
      idProducto: 20,
      idVendedor: 2
    },
  ]

  getRatesVendedor(id: number){
    return this.rates.filter(rate=> rate.idVendedor === id)
  }

  getRatesProducto(id: number){
    let arrayParcial: number[] = []
    this.rates.filter(rate=> rate.idProducto === id).forEach((rate)=>{
      arrayParcial.push(rate.rate)
    })
    return arrayParcial

  }
}

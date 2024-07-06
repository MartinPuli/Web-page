import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  private _http = inject(HttpClient)
  private urlBase: string = 'https://fakestoreapi.com/products'

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase)
  }

  getProduct(id:number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`)
  }
}

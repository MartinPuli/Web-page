import { Injectable } from '@angular/core';
import { Logros } from '../../shares/models/logros-model';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  private logrosProveedor:Logros[] = [
    { descripcion: "Tu publicación consiguió", logro: "100 visitas", estado: true },
    { descripcion: "Tu publicación consiguió", logro: "1000 visitas", estado: false },
    { descripcion: "Lograste", logro: "20 ventas", estado: true },
    { descripcion: "Lograste", logro: "100 ventas", estado: false },
    { descripcion: "Te convertiste en", logro: "Proveedor", estado: true },
    { descripcion: "Conseguiste 1 mes", logro: "Sin Reclamos", estado: true },
    { descripcion: "Entregaste a tiempo", logro: "5 pedidos", estado: true },
    { descripcion: "Entregaste a tiempo", logro: "50 pedidos", estado: false },
    { descripcion: "Has cargado", logro: "4 productos", estado: true },
    { descripcion: "Conseguiste un mes", logro: "Sin reclamos", estado: false },
    { descripcion: "Visitaste nuestro", logro: "Instagram", estado: false },
    { descripcion: "Entregaste a tiempo", logro: "10 pedidos", estado: false }
  ];

  private logrosVendedor:Logros[] = [
    { descripcion: "LLevas vendiendo por", logro: "1 mes", estado: true },
    { descripcion: "LLevas vendiendo por", logro: "1 año", estado: false },
    { descripcion: "Vendiste de todas las", logro: "Categorías", estado: true },
    { descripcion: "Encontraste un producto sin", logro: "Vendedores", estado: true },
    { descripcion: "Te convertiste en", logro: "Vendedor", estado: true },
    { descripcion: "Visitaste nuestro", logro: "Instagram", estado: true },
    { descripcion: "Hiciste", logro: "1 pregunta", estado: true },
    { descripcion: "Hiciste", logro: "5 preguntas", estado: false },
    { descripcion: "Vendiste", logro: "3 producto", estado: true },
    { descripcion: "Vendistes", logro: "10 productos", estado: true },
    { descripcion: "Vendiste", logro: "50 productos", estado: false },
    { descripcion: "Vendiste", logro: "100 pedidos", estado: false }
  ];

  getLogrosVendedor(){
    return this.logrosVendedor
  }

  getLogrosProveedor(){
    return this.logrosProveedor
  }
}

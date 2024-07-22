import { Injectable } from '@angular/core';
import { Logros } from '../../shares/models/logros-model';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  private logros:Logros[] = [
    { id: "prov01", descripcion: "Tu publicación consiguió", logro: "100 visitas"},
    { id: "prov02", descripcion: "Tu publicación consiguió", logro: "1000 visitas"},
    { id: "prov03", descripcion: "Lograste", logro: "20 ventas"},
    { id: "prov04", descripcion: "Lograste", logro: "100 ventas"},
    { id: "prov05", descripcion: "Te convertiste en", logro: "Proveedor"},
    { id: "prov06", descripcion: "Conseguiste 1 mes", logro: "Sin Reclamos"},
    { id: "prov07", descripcion: "Entregaste a tiempo", logro: "5 pedidos"},
    { id: "prov08", descripcion: "Entregaste a tiempo", logro: "50 pedidos"},
    { id: "prov09", descripcion: "Has cargado", logro: "4 productos"},
    { id: "prov10", descripcion: "Conseguiste un mes", logro: "Sin reclamos"},
    { id: "prov11", descripcion: "Visitaste nuestro", logro: "Instagram"},
    { id: "prov12", descripcion: "Entregaste a tiempo", logro: "10 pedidos"},
    { id: "ven01", descripcion: "LLevas vendiendo por", logro: "1 mes"},
    { id: "ven02", descripcion: "LLevas vendiendo por", logro: "1 año"},
    { id: "ven03", descripcion: "Vendiste de todas las", logro: "Categorías"},
    { id: "ven04", descripcion: "Encontraste un producto sin", logro: "Vendedores"},
    { id: "ven05", descripcion: "Te convertiste en", logro: "Vendedor"},
    { id: "ven06", descripcion: "Visitaste nuestro", logro: "Instagram"},
    { id: "ven07", descripcion: "Hiciste", logro: "1 pregunta"},
    { id: "ven08", descripcion: "Hiciste", logro: "5 preguntas"},
    { id: "ven09", descripcion: "Vendiste", logro: "3 producto"},
    { id: "ven10", descripcion: "Vendistes", logro: "10 productos"},
    { id: "ven11", descripcion: "Vendiste", logro: "50 productos"},
    { id: "ven12", descripcion: "Vendiste", logro: "100 pedidos"}
  ];

  getLogrosVendedor(){
    return this.logros.filter(logro => logro.id.includes("ven"))
  }

  getLogrosProveedor(){
    return this.logros.filter(logro => logro.id.includes("prov"))
  }
}

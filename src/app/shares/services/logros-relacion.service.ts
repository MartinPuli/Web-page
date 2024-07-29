import { Injectable } from '@angular/core';
import { RelLogro } from '../models/relacion-logro-usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LogrosRelacionService {

  private logrosConseguidos:RelLogro[] = [
    { idLogro: "prov01", idusuario: 1},
    { idLogro: "prov01", idusuario: 2},
    { idLogro: "prov02", idusuario: 1},
    { idLogro: "prov03", idusuario: 2},
    { idLogro: "prov04", idusuario: 1},
    { idLogro: "prov05", idusuario: 1},
    { idLogro: "prov05", idusuario: 2},
    { idLogro: "prov07", idusuario: 1},
    { idLogro: "prov08", idusuario: 2},
    { idLogro: "prov09", idusuario: 2},
    { idLogro: "prov09", idusuario: 1},
    { idLogro: "prov10", idusuario: 1},
    { idLogro: "prov10", idusuario: 2},
    { idLogro: "prov12", idusuario: 2},
    { idLogro: "ven01", idusuario: 2},
    { idLogro: "ven02", idusuario: 1},
    { idLogro: "ven04", idusuario: 2},
    { idLogro: "ven02", idusuario: 2},
    { idLogro: "ven05", idusuario: 1},
    { idLogro: "ven06", idusuario: 2},
    { idLogro: "ven07", idusuario: 2},
    { idLogro: "ven06", idusuario: 1},
    { idLogro: "ven09", idusuario: 1},
    { idLogro: "ven10", idusuario: 2},
    { idLogro: "ven10", idusuario: 1},
    { idLogro: "ven12", idusuario: 1},
  ];

  getLogrosConseguidosVendedor(id:number){
    return this.logrosConseguidos.filter(logro => logro.idLogro.includes("ven") && logro.idusuario === id )
  }

  getLogrosConseguidosProveedor(id:number){
    return this.logrosConseguidos.filter(logro => logro.idLogro.includes("prov") && logro.idusuario === id)
  }
}

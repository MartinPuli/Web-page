import { Component, inject, input, output } from '@angular/core';
import { UsuariosService } from '../../shares/services/usuarios.service';
import { ActivatedRoute, Params, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Router } from 'express';
import { Usuario, Vendedor } from '../../shares/models/usuario-model';
import { LogrosComponent } from '../logros/logros.component';
import { ValueChangeEvent } from '@angular/forms';
import { PanelGananciasComponent } from '../panel-ganancias/panel-ganancias.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, LogrosComponent, PanelGananciasComponent, HeaderComponent],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {
  private _apiUsuarios = inject(UsuariosService)
  private _route = inject(ActivatedRoute)
  isVendedor!: Boolean
  usuario!: Usuario | null
  idUsuario!: number

  constructor(private _location: Location){}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.isVendedor = params['tipo'] == 'vendedor'
          ? true
          : false
        this.idUsuario = Number(params['idUsuario'])
        this.usuario = this.isVendedor ? this._apiUsuarios.getVendedor(this.idUsuario) : this._apiUsuarios.getProveedor(this.idUsuario)
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  tipoUsuario(user: Usuario | null): user is Vendedor {
    return this.isVendedor? true : false;
  }

  goBack(){
    this._location.back();
  } 

}

import { Component, inject, input, output } from '@angular/core';
import { UsuariosService } from '../../shares/services/usuarios.service';
import { ActivatedRoute, Params, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { User } from '../../shares/models/usuario-model';
import { LogrosComponent } from '../logros/logros.component';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, LogrosComponent],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {
  private _apiUsuarios = inject(UsuariosService)
  private _route = inject(ActivatedRoute)
  isVendedor!: Boolean
  usuario!: User | null

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.isVendedor = params['tipo'] == 'vendedor'
          ? true
          : false
      },
      error: (error: any) => {
        console.log(error)
      }
    })
    this.usuario = this.isVendedor? this._apiUsuarios.getUsuario(1) : this._apiUsuarios.getUsuario(2)
  }
}

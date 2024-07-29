import { Component, inject, Input, input } from '@angular/core';
import { Logros } from '../../shares/models/logros-model';
import { CommonModule } from '@angular/common';
import { LogrosService } from '../../shares/services/logros.service';
import { RelLogro } from '../../shares/models/relacion-logro-usuario-model';
import { LogrosRelacionService } from '../../shares/services/logros-relacion.service';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.scss'
})
export class LogrosComponent {
  @Input() isVendedor!: Boolean
  @Input() idUsuario!: number

  private _apiLogros = inject(LogrosService)
  private _apiLogrosObtenidos = inject(LogrosRelacionService)
  arrayObtenidos: string[] = []

  logros!: Logros[]

  ngOnInit(): void {
    this.logros = this.isVendedor
      ? this._apiLogros.getLogrosVendedor()
      : this._apiLogros.getLogrosProveedor()
    this.isVendedor
      ? this._apiLogrosObtenidos.getLogrosConseguidosVendedor(this.idUsuario).forEach((logro) => this.arrayObtenidos.push(logro.idLogro))
      : this._apiLogrosObtenidos.getLogrosConseguidosProveedor(this.idUsuario).forEach((logro) => this.arrayObtenidos.push(logro.idLogro))

  }
}

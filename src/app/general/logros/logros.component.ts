import { Component, inject, Input, input } from '@angular/core';
import { logros } from './logros-data.';
import { Logros } from '../../shares/models/logros-model';
import { CommonModule } from '@angular/common';
import { LogrosService } from '../../shares/services/logros.service';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.scss'
})
export class LogrosComponent {
  @Input () isVendedor!: Boolean

  private _apiLogros = inject(LogrosService)

  logrosObtenidos!:Logros[]

  ngOnInit(): void {
    this.logrosObtenidos = this.isVendedor
      ? this._apiLogros.getLogrosVendedor()
      : this._apiLogros.getLogrosProveedor()
    
  }
}

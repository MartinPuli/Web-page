import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ScriptsService } from '../../shares/services/js/scripts.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _route = inject(ActivatedRoute)
  private _scripts = inject(ScriptsService)

  @Input() isVendedor!: Boolean
  @Input() idUsuario!: number
  @Input() inicio: Boolean = false
  @Input() ventas: Boolean = false
  @Input() publicaciones: Boolean = false
  @Input() perProv: Boolean = false
  @Input() perVend: Boolean = false
  @Input() actualizaciones: Boolean = false
  @Input() miCuenta: Boolean = false
  @Input() main: Boolean = false

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') this._scripts.loadScript(["menu"])
  }

}

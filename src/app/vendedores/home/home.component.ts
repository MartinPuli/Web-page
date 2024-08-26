import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { objetoProducto, Producto } from '../../shares/models/producto-model';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoriasService } from '../../shares/services/categorias.service';
import { HeaderComponent } from '../../general/header/header.component';
import { EstrellasComponent } from '../../general/estrellas/estrellas.component';
import { RatesService } from '../../shares/services/rates.service';
import { LimiteCaracteresPipe } from '../../shares/pipes/limite-caracteres.pipe';
import { ScriptsService } from '../../shares/services/js/scripts.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, LimiteCaracteresPipe, HeaderComponent, EstrellasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private _apiProductos = inject(ApiProductosService)
  private _apiCategorias = inject(CategoriasService)
  private _apiRating = inject(RatesService)
  private _scripts = inject(ScriptsService)
  private breakpointObserver = inject(BreakpointObserver)

  valorFiltrado: string = ''
  productos: Producto[] = []
  categorias!: string[]
  inputBusqueda: FormGroup
  idVendedor: number = 2
  productosInspirados: objetoProducto[] = []
  productoParecido!: objetoProducto
  productosVendidos: objetoProducto[] = []
  productosOportunidad: objetoProducto[] = []
  productosVendidosMes: objetoProducto[] = []
  cargadoInsp: Boolean = false
  cargadoUlt: Boolean = true
  cargadoVend: Boolean = false
  cargadoOpor: Boolean = false
  cargadoMes: Boolean = false
  responsiveLimit!: number

  constructor(private form: FormBuilder) {
    this.inputBusqueda = this.form.group({
      busqueda: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.productos = this._apiProductos.getProducts()
    this.categorias = this._apiCategorias.getCategorias()
  }

  ngAfterContentInit(): void {

    switch (true) {
      case this.breakpointObserver.isMatched('(min-width: 600px)'):
        this.responsiveLimit = 35
        break;
      default:
        this.responsiveLimit = 33
        break;
    }

    for (let i = 0; i < 4; i++) {
      let ratesTraidos = this._apiRating.getRatesProducto(this.productos[i].id)
      this.productosInspirados.push({
        producto: this.productos[i],
        rating: ratesTraidos.length ? ratesTraidos.reduce((a, b) => a + b, 0) / ratesTraidos.length : 0,
        cantRates: ratesTraidos.length
      })
    }
    this.cargadoInsp = true
    let ratesParecido = this._apiRating.getRatesProducto(6)
    this.productoParecido = {
      producto: this.productos[6],
      rating: ratesParecido.length ? ratesParecido.reduce((a, b) => a + b, 0) / ratesParecido.length : 0,
      cantRates: ratesParecido.length
    }
    this.cargadoUlt = true;
    for (let i = 0; i < 8; i++) {
      let ratesTraidos = this._apiRating.getRatesProducto(this.productos[i].id)
      this.productosVendidos.push({
        producto: this.productos[i],
        rating: ratesTraidos.length ? ratesTraidos.reduce((a, b) => a + b, 0) / ratesTraidos.length : 0,
        cantRates: ratesTraidos.length
      })
    }
    this.cargadoVend = true;
    for (let i = 10; i < 14; i++) {
      let ratesTraidos = this._apiRating.getRatesProducto(this.productos[i].id)
      this.productosOportunidad.push({
        producto: this.productos[i],
        rating: ratesTraidos.length ? ratesTraidos.reduce((a, b) => a + b, 0) / ratesTraidos.length : 0,
        cantRates: ratesTraidos.length
      })
    }
    this.cargadoOpor = true;
    for (let i = 0; i < 8; i++) {
      let ratesTraidos = this._apiRating.getRatesProducto(this.productos[i].id)
      this.productosVendidosMes.push({
        producto: this.productos[i],
        rating: ratesTraidos.length ? ratesTraidos.reduce((a, b) => a + b, 0) / ratesTraidos.length : 0,
        cantRates: ratesTraidos.length
      })
    }
    this.cargadoMes = true;

  }

  filtrar() { }
}


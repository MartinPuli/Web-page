import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../shares/models/producto-model';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoriasService } from '../../shares/services/categorias.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private _apiProductos = inject(ApiProductosService)
  private _apiCategorias = inject(CategoriasService)

  valorFiltrado: string = ''
  productos: Producto[] = []
  productosMostrados = signal(this.productos)
  categorias!: string[]

  inputBusqueda: FormGroup
  idVendedor: null | number = 2

  productosInspirados: Signal<Producto[]> = computed(() => {
    let arrayParcial: Producto[] = []
    for (let i = 0; i < 5; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  productoParecido: Signal<Producto> = computed(() => {
    return this.productosMostrados()[6]
  })

  productosVendidos: Signal<Producto[]> = computed(() => {
    let arrayParcial: Producto[] = []
    for (let i = 0; i < 10; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  productosOportunidad: Signal<Producto[]> = computed(() => {
    let arrayParcial: Producto[] = []
    for (let i = 10; i < 14; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  productosVendidosMes: Signal<Producto[]> = computed(() => {
    let arrayParcial: Producto[] = []
    for (let i = 0; i < 13; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  constructor(private form: FormBuilder) {
    this.inputBusqueda = this.form.group({
      busqueda: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.productosMostrados.set(this._apiProductos.getProducts())
    this.categorias = this._apiCategorias.getCategorias()
  }

  filtrar() { }
}


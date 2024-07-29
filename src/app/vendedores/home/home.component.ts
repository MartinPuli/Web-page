import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { producto } from '../../shares/models/producto-model';
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
  productos: producto[] = []
  productosMostrados = signal(this.productos)
  categorias!: string[]

  inputBusqueda: FormGroup
  idVendedor: null | number = 2

  productosInspirados: Signal<producto[]> = computed(() => {
    let arrayParcial: producto[] = []
    for (let i = 0; i < 5; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  productoParecido: Signal<producto> = computed(() => {
    return this.productosMostrados()[6]
  })

  productosVendidos: Signal<producto[]> = computed(() => {
    let arrayParcial: producto[] = []
    for (let i = 0; i < 10; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  productosOportunidad: Signal<producto[]> = computed(() => {
    let arrayParcial: producto[] = []
    for (let i = 10; i < 14; i++) {
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  })

  productosVendidosMes: Signal<producto[]> = computed(() => {
    let arrayParcial: producto[] = []
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


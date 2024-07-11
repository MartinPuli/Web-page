import { Component, OnInit, signal, inject, computed, OnDestroy, Signal } from '@angular/core';
import { IProduct} from '../shares/models/producto-model'; // Asegúrate de que el modelo esté correctamente importado
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiProductosService } from '../shares/services/api-productos.service';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatSlideToggleModule, MatPaginatorModule, MatProgressSpinnerModule, NgOptimizedImage] // Importar módulos necesarios aquí
})
export class ProductosComponent implements OnInit{

  private _apiProductos = inject(ApiProductosService)

  productos: IProduct[] = []
  valorFiltrado:string = ''

  productosMostrados = signal(this.productos)
  objetoIterableAMostrar:Signal<IProduct[][]> = computed(()=>{
    let arrayParcial: IProduct[][] = []
    for(let i = 0; i < Math.ceil(this.productosMostrados().length / 10); i++){
      let productoParcial: IProduct[] = []
      for(let j = 0; j < 10 && (j + i * 10) < this.productosMostrados().length; j ++){
        productoParcial.push(this.productosMostrados()[(i * 10) + j])
      }
      arrayParcial.push(productoParcial)
    }
    return arrayParcial
  })
  cantidadProductos = computed(()=>{
    return this.productosMostrados().length
  })
  NumPaginaMostrada = signal(0)
  paginaMostrada = computed(()=>{
    return this.objetoIterableAMostrar()[this.NumPaginaMostrada()]
  })

  inputBusqueda: FormGroup

  constructor(private form: FormBuilder){
    this.inputBusqueda= this.form.group({
      busqueda: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this._apiProductos.getProducts().subscribe((data)=>{
      this.productos = data
      this.productosMostrados.set(this.productos)
    })
  }

  filtrar(){
    this.valorFiltrado = this.inputBusqueda.get('busqueda')?.value.toLowerCase(); 
    this.productosMostrados.set(this.productos.filter((producto) => {
      return producto.title.toLowerCase().includes(this.valorFiltrado);
    }))
    this.NumPaginaMostrada.set(0)
  }

  destacarTermino(texto: string, terminoBuscado: string): string {
    if (!terminoBuscado) return texto;
    
    const regex = new RegExp(`(${terminoBuscado})`, 'gi'); 
    return texto.replace(regex, `<b>$1</b>`);
  }

  editarProducto(productoID: number){
    productoID
  }

  cambioDePagina(e: PageEvent){
    this.NumPaginaMostrada.set(e.pageIndex)
  }
}

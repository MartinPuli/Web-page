import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct} from '../../shares/models/producto-model'; 
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private _apiProductos = inject(ApiProductosService)

  valorFiltrado:string = ''
  productos: IProduct[] = []
  productosMostrados = signal(this.productos)

  inputBusqueda: FormGroup

  productosInspirados:Signal<IProduct[]> = computed(()=>{
    let arrayParcial: IProduct[] = []
    for(let i = 0; i < 5; i++){
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  }) 

  productoParecido: Signal<IProduct> = computed(()=>{
    return this.productosMostrados()[6]
  })

  productosVendidos:Signal<IProduct[]> = computed(()=>{
    let arrayParcial: IProduct[] = []
    for(let i = 0; i < 10; i++){
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  }) 

  productosOportunidad:Signal<IProduct[]> = computed(()=>{
    let arrayParcial: IProduct[] = []
    for(let i = 10; i < 14; i++){
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  }) 

  productosVendidosMes:Signal<IProduct[]> = computed(()=>{
    let arrayParcial: IProduct[] = []
    for(let i = 0; i < 13; i++){
      arrayParcial.push(this.productosMostrados()[i])
    }
    return arrayParcial
  }) 

  categorias: string[] = ["Celulares y teléfonos", "Belleza y Cuidado Personal", "Bebes", "Accesorios para vehículos", "Electrónica, Audio y Video", "Deporte y Fitness", "Hogar, Mueble y Jardín", "Electrodomésticos", "Herramientas", "Computación", "Arte, Librería y Mercería", "Indumenaria y Accesorios", "Construcción", "Mascotas", "Industrias y Oficinas", "Consolas y Videojuegos", "Fotografía y Video"]

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

  filtrar(){}
}


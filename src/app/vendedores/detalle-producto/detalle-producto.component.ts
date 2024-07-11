import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IProduct} from '../../shares/models/producto-model'; 
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,  RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent implements OnInit{
  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiProductosService)

  preguntar: FormGroup

  constructor(private form: FormBuilder){
    this.preguntar= this.form.group({
      pregunta: ["", Validators.required]
    })
  }

  producto?: IProduct

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProduct(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.producto = data
          },
          error: (error: any) => {
            console.log(error)
          }
        })
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  hacerPregunta(){

  }
}

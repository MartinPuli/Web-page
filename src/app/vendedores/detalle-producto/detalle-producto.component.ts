import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IProduct} from '../../shares/models/producto-model'; 
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { pregunta, respuesta } from '../../shares/models/preguntas-model';

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
  private _apiPreguntas = inject(PreguntasService)

  producto!: IProduct
  preguntas!: pregunta[]
  respuestas: respuesta[][] = []

  preguntar: FormGroup

  constructor(private form: FormBuilder){
    this.preguntar= this.form.group({
      pregunta: ["", Validators.required]
    })
  }

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

        this.preguntas = this._apiPreguntas.getPreguntasPorProducto(Number(params['productId']))
        
        this.preguntas.forEach((pregunta)=>{
          this.respuestas.push(this._apiPreguntas.getRespuestasPorPregunta(pregunta.idPregunta))
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

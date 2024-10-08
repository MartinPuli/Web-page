import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Producto } from '../../shares/models/producto-model';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { pregunta, respuesta } from '../../shares/models/preguntas-model';
import { CategoriasService } from '../../shares/services/categorias.service';
import { RelacionClaveService } from '../../shares/services/relacion-clave.service';
import { AtributosRelacionService } from '../../shares/services/atributos-relacion.service';
import { ImagenesAdicionalesService } from '../../shares/services/imagenes-adicionales.service';
import { HeaderComponent } from '../../general/header/header.component';
import { LinksService } from '../../shares/services/links.service';
import { EstrellasComponent } from '../../general/estrellas/estrellas.component';
import { RatesService } from '../../shares/services/rates.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, EstrellasComponent],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent implements OnInit {
  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiProductosService)
  private _apiPreguntas = inject(PreguntasService)
  private _apiCategorias = inject(CategoriasService)
  private _apiPalabras = inject(RelacionClaveService)
  private _apiAtributos = inject(AtributosRelacionService)
  private _apiImagenes = inject(ImagenesAdicionalesService)
  private _apiLinks = inject(LinksService)
  private _apiRating = inject(RatesService)


  producto!: Producto
  preguntas!: pregunta[]
  respuestas: respuesta[][] = []
  categoria!: string | undefined
  palabrasClave!: string[]
  atributos!: [string, number | Date | boolean | string][]
  imagenesAdicionales!: string[]
  cantLinks!: number
  ratesTraidos!: number[]
  rating!: number
  arrayCarrusel!: string[]
  i!: string

  preguntar: FormGroup

  constructor(private form: FormBuilder, private _location: Location) {
    this.preguntar = this.form.group({
      pregunta: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {

        this.producto = this._apiService.getProduct(Number(params['productId']))

        this.preguntas = this._apiPreguntas.getPreguntasPorProducto(Number(params['productId']))

        this.preguntas.forEach((pregunta) => {
          this.respuestas.push(this._apiPreguntas.getRespuestasPorPregunta(pregunta.idPregunta))
        })

        this.categoria = this._apiCategorias.getCategoriaPorId(this.producto.idCategoria)?.categoria

        this.palabrasClave = this._apiPalabras.getPalabrasClavePorProducto(this.producto.id)

        this.atributos = this._apiAtributos.getAtributosById(this.producto.id)

        this.imagenesAdicionales = this._apiImagenes.getImagenesPorId(this.producto.id)

        this.cantLinks = this._apiLinks.getCantidadLinksProducto(this.producto.id)

        this.ratesTraidos = this._apiRating.getRatesProducto(this.producto.id)

        if (this.ratesTraidos.length) {
          this.rating = this.ratesTraidos.reduce((a, b) => a + b, 0) / this.ratesTraidos.length
        }

        this.arrayCarrusel = [this.producto.image, ...this.imagenesAdicionales]
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  hacerPregunta() {

  }

  goBack() {
    this._location.back();
  }
}

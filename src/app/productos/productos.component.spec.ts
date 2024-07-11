import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComponent } from './productos.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ApiProductosService } from '../shares/services/api-productos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Category, IProduct } from '../modelos/producto.model';
import { By } from '@angular/platform-browser';

describe('ProductosComponent', () => {
  let component: ProductosComponent
  let fixture: ComponentFixture<ProductosComponent>
  let httpMock: HttpTestingController
  let apiProductosService: ApiProductosService
  const urlBase = 'https://fakestoreapi.com/products'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        ProductosComponent
      ],
      providers: [ApiProductosService],
    }).compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent)
    component = fixture.componentInstance
    httpMock = TestBed.inject(HttpTestingController)
    apiProductosService = TestBed.inject(ApiProductosService)
  })

  afterEach(() => {
    httpMock.verify();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should fetch products from the service on init', () => {
    const dummyProducts: IProduct[] = [
      { 
        id: 1, 
        title: 'Product 1', 
        price: 10, 
        description: 'Description 1', 
        category: Category.Electronics, 
        image: 'Image 1', 
        rating: { rate: 4.5, count: 10 }
      },
      { 
        id: 2, 
        title: 'Product 2', 
        price: 20, 
        description: 'Description 2', 
        category: Category.Jewelery, 
        image: 'Image 2', 
        rating: { rate: 3.5, count: 5 }
      }
    ]

    // Procesa la suscripción y actualiza el componente
    fixture.detectChanges()

    // Simula la llamada al servicio
    const req = httpMock.expectOne(urlBase)
    expect(req.request.method).toBe('GET')
    req.flush(dummyProducts)

    // Procesa la suscripción y actualiza el componente
    fixture.detectChanges()

    // Verifica que los productos se han cargado correctamente en el componente
    expect(component.productos.length).toBe(2)
    expect(component.productos).toEqual(dummyProducts)
  });

  it('should return 8 products', ()=>{

    component.productos = [
      { 
        id: 1, 
        title: 'Product 1', 
        price: 10, 
        description: 'Description 1', 
        category: Category.Electronics, 
        image: 'Image 1', 
        rating: { rate: 4.5, count: 10 }
      },
      { 
        id: 2, 
        title: 'Product 2', 
        price: 20, 
        description: 'Description 2', 
        category: Category.Jewelery, 
        image: 'Image 2', 
        rating: { rate: 3.5, count: 5 }
      }
    ]

    fixture.detectChanges();

    const req = httpMock.expectOne(urlBase)
    expect(req.request.method).toBe('GET')
    req.flush(component.productos)
    component.inputBusqueda.get('busqueda')?.setValue("2")
    fixture.detectChanges()

    component.filtrar()
    expect(component.productosMostrados().length).toBe(1)
  });

});


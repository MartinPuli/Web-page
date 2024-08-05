import { TestBed } from '@angular/core/testing';

import { ApiProductosService } from './api-productos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Producto } from '../models/producto-model';

describe('ApiProductosService', () => {
  let service: ApiProductosService;
  let httpMock: HttpTestingController;
  const urlBase = 'https://fakestoreapi.com/products';

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [ApiProductosService]});
    service = TestBed.inject(ApiProductosService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should fetch products using getProducts', () => {
  //   const dummyProducts: Producto[] = [
  //     { 
  //       id: 1, 
  //       title: 'Product 1', 
  //       price: 10, 
  //       description: 'Description 1', 
  //       category: Category.Electronics, 
  //       image: 'Image 1', 
  //       rating: { rate: 4.5, count: 10 }
  //     },
  //     { 
  //       id: 2, 
  //       title: 'Product 2', 
  //       price: 20, 
  //       description: 'Description 2', 
  //       category: Category.Jewelery, 
  //       image: 'Image 2', 
  //       rating: { rate: 3.5, count: 5 }
  //     }
  //   ];

    // service.getProducts().for(products => {
    //   expect(products.length).toBe(2);
    //   expect(products).toEqual(dummyProducts);
    // });

  //   const req = httpMock.expectOne(`${urlBase}`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(dummyProducts);
  // });

  // it('should fetch a single product using getProduct', () => {
  //   const dummyProduct: IProduct = { 
  //     id: 1, 
  //     title: 'Product 1', 
  //     price: 10, 
  //     description: 'Description 1', 
  //     category: Category.Electronics, 
  //     image: 'Image 1', 
  //     rating: { rate: 4.5, count: 10 }
  //   };

  //   // service.getProduct(1).subscribe(product => {
  //   //   expect(product).toEqual(dummyProduct);
  //   // });

  //   const req = httpMock.expectOne(`${urlBase}/1`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(dummyProduct);
  // });
});

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from './product';
import { ProductService } from './product.service';

describe('ProductService', () => {
  const testProducts: Product[] = [
    {
      _id: 'apple_id',
      name:'Apple',
      brand: 'UMM',
      quantity: 3,
      comment: 'Apples are cool'
    },
    {
      _id: 'grape_id',
      name:'Grape',
      brand: 'UMM',
      quantity: 1,
      comment: 'Grapes are cooler than apple'
    },
    {
      _id: 'potato_id',
      name:'Potato',
      brand: 'Conner\'s Potatoes',
      quantity: 12,
      comment: 'These happen to be 12 of Conner\'s potatos'
    }
  ];
  let productService: ProductService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    // Set up the mock handling of the HTTP requests
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    // Construct an instance of the service with the mock
    // HTTP client.
    productService = new ProductService(httpClient);
  });


  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  fdescribe('Filtering by name', () => {

    it('filterProducts() filters by name', () => {
    expect(testProducts.length).toBe(3);
    const productName = 'a';
    expect(productService.filterProducts(testProducts, { name: productName }).length).toBe(3);
    });

    it('filterProducts() filters by specific name', () => {
    expect(testProducts.length).toBe(3);
    const productName = 'Grape';
    expect(productService.filterProducts(testProducts, { name: productName }).length).toBe(1);
    });
  });

});

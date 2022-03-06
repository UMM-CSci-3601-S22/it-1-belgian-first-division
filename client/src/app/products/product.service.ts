import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly productUrl: string = environment.apiUrl + 'products';

  constructor(private httpClient: HttpClient ) {
  }

  filterProducts(products: Product[], filters: { name?: string }): Product[] {

    let filteredProducts = products;

    // Filter by name
    if (filters.name) {

      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().indexOf(filters.name) !== -1);
    }

    return filteredProducts;
  }

  getProducts(filters?: { name?: string }): Observable<Product[]> {
    let httpParams: HttpParams = new HttpParams();

    if (filters) {
      if (filters.name) {
        httpParams = httpParams.set('productName', filters.name);
      }
    }

    return this.httpClient.get<Product[]>(this.productUrl, {
      params: httpParams,
    });
  }
}

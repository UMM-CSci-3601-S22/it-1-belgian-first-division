import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly productUrl: string = environment.apiUrl + 'products';

  constructor(private httpClient: HttpClient ) {
  }

  filterProducts(products: Product[], filters: { title: string }): Product[] {

    let filteredProducts = products;

    // Filter by title
    if (filters.title) {
      filters.title = filters.title.toLowerCase();

      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().indexOf(filters.title) !== -1);
    }

    return filteredProducts;
  }

  getProducts(filters?: { title?: string }): Observable<Product[]> {
    let httpParams: HttpParams = new HttpParams();

    if (filters) {
      if (filters.title) {
        httpParams = httpParams.set('title', filters.title);
      }
    }

    return this.httpClient.get<Product[]>(this.productUrl, {
      params: httpParams,
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private API_PRODUCT = 'http://localhost:3000/products/';

  constructor(
    private http: HttpClient
  ) { }
  

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_PRODUCT);
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_PRODUCT + id);
  }

  getProductsByCategory(category_id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_PRODUCT}/?category=${category_id}`)
  } 
}

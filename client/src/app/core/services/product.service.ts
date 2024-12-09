import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    baseUrl='http://localhost:5000/api/';
    private http=inject(HttpClient);
  
    // getProducts(brands?:string[],types?:string[],sort?:string){
        addProduct(product: Product): Observable<Product> {
            return this.http.post<Product>(this.baseUrl+ 'products', product);
          }
    constructor() { }
  }
  
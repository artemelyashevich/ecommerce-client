import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<ProductDto[]> { 
    return this.http.get<ProductDto[]>('http://localhost:8222/api/v1/products');
  }
}

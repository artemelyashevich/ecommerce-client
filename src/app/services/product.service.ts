import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto, ProductPage } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(page: number, size: number): Observable<ProductPage> {
    return this.http.get<ProductPage>(`http://localhost:8222/api/v1/products?page=${page}&size=${size}`);
  }

  public findById(id: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`http://localhost:8222/api/v1/products/${id}`)
  }
}

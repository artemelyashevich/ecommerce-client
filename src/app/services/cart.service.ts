import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartDto } from '../model/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  public saveCart(cart: CartDto): Observable<CartDto> {
    return this.http.post<CartDto>('http://localhost:8222/api/v1/cart', cart);
  }

  public findAll(userId: number): Observable<Array<CartDto>> {
    return this.http.get<Array<CartDto>>(`http://localhost:8222/api/v1/cart/${userId}`);
  }
}

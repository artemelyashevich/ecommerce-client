import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<CategoryDto[]>{
    return this.http.get<CategoryDto[]>('http://localhost:8222/api/v1/categories');  
  }
}

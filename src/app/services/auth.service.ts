import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../model/login.model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../model/auth.model';
import { RegisterDto } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(loginDto: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8222/api/v1/auth/login', loginDto);
  }

  public register(registerDto: RegisterDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8222/api/v1/auth/register', registerDto);
  }
  
  public refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8222/api/v1/auth/refresh', {});
  }
}

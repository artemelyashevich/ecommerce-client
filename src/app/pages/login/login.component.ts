import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../model/login.model';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styles: ['form {width: 50%; margin: 4rem auto;} .link {text-align: center}'],
  standalone: true
})
export class LoginComponent {

  loginDto: LoginDto = {
    "email": '',
    "password": ''
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    console.log("ds");
    
    this.authService.login(this.loginDto).subscribe(
      (response) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      }
    )
  }
}

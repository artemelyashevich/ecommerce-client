import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterDto } from '../../model/register.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styles: ['form {width: 50%; margin: 4rem auto;} .link {text-align: center}'],
})
export class RegisterComponent {

  registerDto: RegisterDto = {
    "email": '',
    "password": '',
    "firstName": '',
    "lastName": '',
    "birthDate": new Date()
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  register(){
    this.authService.register(this.registerDto).subscribe(
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

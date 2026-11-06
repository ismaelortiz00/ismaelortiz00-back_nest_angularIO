import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public layoutService = inject(LayoutService);
  private authService = inject(AuthService);
  private router = inject(Router);

  mensajeError = '';
  cargando = false;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  funIngresar() {
    this.mensajeError = '';
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.mensajeError = 'Ingrese un correo válido y la contraseña.';
      return;
    }
    this.cargando = true;
    this.authService.loginConNest(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        // El backend (Nest) responde { token: '...' }
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }
        this.cargando = false;
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.log(error);
        this.cargando = false;
        this.mensajeError = error.status === 0
          ? 'No se pudo conectar con el servidor (¿está corriendo el backend en el puerto 3000?).'
          : 'Correo o contraseña incorrectos.';
      }
    });
  }
}

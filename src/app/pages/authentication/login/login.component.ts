// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required  ]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('User login data:', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successfully!', response);

          // Optionally, perform actions after successful login
          this.router.navigate(['/']).then(() => window.location.reload());

          const UserData = JSON.stringify(response.data);
          localStorage.setItem('UserToken', response.token);
          localStorage.setItem('UserData', UserData);
        },
        (error) => {
          alert('Login Failed');
          console.error('Login failed:', error);
          // Handle login error
        }
      );
    } else {
      // Mark fields as touched to display validation messages
      this.loginForm.markAllAsTouched();
    }
  }
}

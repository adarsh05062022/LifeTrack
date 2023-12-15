// register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userData = {
    username: '',
    email: '',
    password: ''
  };

  registrationForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('User registration data:', this.userData);
      this.authService.registerUser(this.userData).subscribe(
        (response) => {
          console.log('User registered successfully!', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Registration Failed');
          console.error('Registration failed:', error);
        }
      );
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}

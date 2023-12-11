import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthenticationService,
    private router :Router) { }

  onSubmit() {
    
    console.log('User registration data:', this.userData);
    this.authService.registerUser(this.userData).subscribe(
      (response) => {
        console.log('User registered successfully!', response);
        // Optionally, perform actions after successful registration

        this.router.navigate(["/login"])
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle registration error
       
      }
    );
  }
    
  }


  


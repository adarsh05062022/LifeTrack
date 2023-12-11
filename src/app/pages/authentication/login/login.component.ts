import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {

  userData = {
    email: '',
    password: ''
  };


  constructor(private router: Router,private authService:AuthenticationService) {}

  onSubmit() {
   
    console.log('User login data:', this.userData);
    this.authService.login(this.userData).subscribe(
      (response) => {
        console.log('Login successfully!', response);
        // Optionally, perform actions after successful registration

        this.router.navigate(["/"]).then(()=> window.location.reload())
        const UserData = JSON.stringify(response.data)
          localStorage.setItem("UserToken",response.token)
          localStorage.setItem("UserData",UserData)
      },
      (error) => {
        alert("Login Failed")
        console.error('Login failed:', error);
        // Handle registration error
       
      }
    );
    
  }
}

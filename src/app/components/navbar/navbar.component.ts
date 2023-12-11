import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean=false;
  constructor(private router:Router){}

   ngOnInit(){
       let data = localStorage.getItem("UserData");
       if(data){
        data = JSON.parse(data);
        this.isLoggedIn  = true;
       }
   }


   logout(){
    console.log("hello")
    localStorage.removeItem("UserData")
    localStorage.removeItem("UserToken")
    this.router.navigate(["/"]).then(()=> window.location.reload())

   }
}

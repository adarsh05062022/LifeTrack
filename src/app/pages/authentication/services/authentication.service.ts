import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  private apiUrl = 'http://localhost:4000/auth'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }
  login(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userData);
  }
}

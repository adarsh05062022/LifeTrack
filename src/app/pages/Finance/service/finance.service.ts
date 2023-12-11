import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:4000/finance/';
  private addApiUrl = 'http://localhost:4000/finance/add-transaction';

  getTransactions(): Observable<any[]> {
    const token = localStorage.getItem('UserToken');

    // Create headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Include headers in the request options
    const requestOptions = { headers: headers };

    return this.http.get<any[]>(this.apiUrl,requestOptions);
  }

  addTransaction(transactionData: any): Observable<any> {
    // const token = this.authService.getToken();
    const token = localStorage.getItem('UserToken');

    // Create headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Include headers in the request options
    const requestOptions = { headers: headers };

    return this.http.post<any>(this.addApiUrl, transactionData, requestOptions);
  }

  getTransaction(transactionId: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + transactionId);
  }
  updateTransaction(transactionId: any,transactionData:any): Observable<any[]> {


    const token = localStorage.getItem('UserToken');

    // Create headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Include headers in the request options
    const requestOptions = { headers: headers };


    return this.http.put<any[]>(this.apiUrl + transactionId,transactionData,requestOptions);
  }
  deleteTransaction(transactionId: any): Observable<any[]> {


    const token = localStorage.getItem('UserToken');

    // Create headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Include headers in the request options
    const requestOptions = { headers: headers };


    return this.http.delete<any[]>(this.apiUrl + transactionId,requestOptions);
  }
}

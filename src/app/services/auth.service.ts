import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRequest, UserRequestLogin } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: UserRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}register`, user);
  }

  signIn(user: UserRequestLogin) {
    return this.http.post<any>(`${this.apiUrl}login`, user);
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5001/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: {username: string; password: string; nom: string ; prenom: string; dateN: string; }): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username : user.username,
      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      dateN: user.dateN
    }, httpOptions);
  }

}

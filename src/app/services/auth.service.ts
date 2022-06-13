import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Registro } from '../models/registro';
import { Up } from '../models/up';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  // URL = 'https://apidazabi.azurewebsites.net/users';
  // URL = 'http://localhost:3000/users';
  // URL = 'http://dazabi.azurewebsites.net';
  URL = 'http://127.0.0.1/backendLavaautos/';

  login(login: Login): Observable<Request> {
    return this.http.get<Request>(
      `${this.URL}/auth/login.php?correo=${login.correo}&password=${login.password}`
    );
  }

  loginE(login: Login): Observable<Request> {
    return this.http.get<Request>(
      `${this.URL}/auth/loginE.php?correo=${login.correo}&password=${login.password}`
    );
  }

  registro(registro: Registro): Observable<Request>{
    return this.http.post<Request>(
      `${this.URL}/users/`, registro
    );
  }

  update(id: number, up: Up){
    return this.http.put(
      `${this.URL}/users/${id}`, up
    );
  }

}

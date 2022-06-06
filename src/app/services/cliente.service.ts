import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { LoginCliente } from '../models/dto/login-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = 'http://localhost:8090/api/clientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  create(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, Cliente, {
      headers: this.httpHeaders,
    });
  }

  getById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }
  get(LoginCliente: LoginCliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      `${this.url}/login`,
      LoginCliente,
      { headers: this.httpHeaders }
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`,Cliente, {headers: this.httpHeaders});
  }
}

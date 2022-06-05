import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

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

  get(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`,Cliente, {headers: this.httpHeaders});
  }
}

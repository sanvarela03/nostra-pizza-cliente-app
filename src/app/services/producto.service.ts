import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 //ATRIBUTOS
 constructor(private http : HttpClient) { }
 private url: string = 'http://localhost:8090/api/productos';
 private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


 //METODOS
 create(producto:Producto): Observable<Producto> {
   return this.http.post<Producto>(this.url, producto, {headers : this.httpHeaders})
 }

 get(id: any): Observable<Producto>{
   return this.http.get<Producto>(`${this.url}/${id}`)
 }

 update(producto: Producto): Observable<Producto> {
   return this.http.put<Producto>(`${this.url}/${producto.id}`,Producto, {headers: this.httpHeaders});
 }

 getAll(): Observable<Producto[]> {
   return this.http.get<Producto[]>(this.url);
 }
}

import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  itemsDelCarrito: Producto[] = [];

  constructor() { }

  agregarAlCarrito(producto: Producto): void {
    this.itemsDelCarrito.push(producto);
  }

  obtenerItems(): Producto[] {
    return this.itemsDelCarrito
  }

  limpiarCarrito(): Producto[] {
    this.itemsDelCarrito = [];
    return this.itemsDelCarrito;
  }
}

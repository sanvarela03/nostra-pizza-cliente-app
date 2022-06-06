import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../services/producto.service';
import { ItemCarrito } from '../../../models/dto/item-carrito';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  idProducto: number = -1;
  cantidad: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductoService,
    private router: Router,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.onLoad();
    //alert("id producto:"+this.idProducto)
  }

  onLoad(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idProducto = params['id'];
      this.cantidad = params['n'];
      this.service.get(this.idProducto).subscribe((data) => {
        let productoNuevo = new Producto();
        productoNuevo = data;
        productoNuevo.cantidad = this.cantidad;
        this.carritoService.agregarAlCarrito(productoNuevo);
      });
    });
  }

  cargarItems(): Producto[] {
    return this.carritoService.obtenerItems();
  }

  calcularTotal(): number {
    let sum = 0;

    for (let i of this.carritoService.obtenerItems()) {
      sum = sum + i.cantidad * i.precio;
    }
    return sum;
  }
}

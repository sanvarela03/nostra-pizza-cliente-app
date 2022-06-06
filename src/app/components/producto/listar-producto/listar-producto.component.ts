import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {


  constructor(private service: ProductoService, private router: Router) { }
  productos: Producto[] = [];
  ngOnInit(): void {
    this.onGetAll();
  }
  onGetAll(): void {
    this.service.getAll().subscribe(
      data => {
        this.productos = data;
      }
    );
  }
  enviarObjeto() {

    let producto = this.productos[0];
    const dato: NavigationExtras = { state: { example: producto} };
    console.log("el producto es: ");
    console.log(producto);
    console.log("el dato es: ");
    console.log(dato);
    this.router.navigate(['/carrito'], dato);
  }
}

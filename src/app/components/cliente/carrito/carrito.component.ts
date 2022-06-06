import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../services/producto.service';
import { ItemCarrito } from '../../../models/dto/item-carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  idProducto: number = -1;
  carrito: Producto[] = [];
  cantidad: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private service: ProductoService, private router: Router) { }

  ngOnInit(): void {
   // this.onLoad();
    this.recibirObjeto();
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
        this.carrito.push(productoNuevo);
      });
    });
  }
  recibirObjeto(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state != null) {
      let objeto = navigation.extras.state as { example: Producto };
      let productoRecibido: Producto = objeto.example as Producto;
      console.info(productoRecibido);
    }
    else{
      console.info("No se pudo cargar");
    }

  }
}

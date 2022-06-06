import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service';
import { NavigationExtras, Router } from '@angular/router';
>>>>>>> d86897c76ca84586493278f7f5e32094c8f7f2eb

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======

  constructor(private service: ProductoService, private router: Router) {
    this.onGetAll();
   }
  productos: Producto[] = [];
  ngOnInit(): void {
    
  }
  onGetAll(): void {
    this.service.getAll().subscribe(
      data => {
        this.productos = data;
      }
    );
  }
>>>>>>> d86897c76ca84586493278f7f5e32094c8f7f2eb
}

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
}

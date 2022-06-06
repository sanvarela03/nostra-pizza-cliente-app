import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/listarProductos', pathMatch: 'full' },
  { path: 'carrito/producto/:id/:n', component: CarritoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'listarProductos', component: ListarProductoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

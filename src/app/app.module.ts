import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ConsultarClienteComponent } from './components/cliente/consultar-cliente/consultar-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
<<<<<<< HEAD
import { ConsultarProductoComponent } from './components/producto/consultar-producto/consultar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { HeaderComponent } from './components/general/header/header.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { FooterComponent } from './components/general/footer/footer.component';
>>>>>>> d86897c76ca84586493278f7f5e32094c8f7f2eb

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    CrearClienteComponent,
    ConsultarClienteComponent,
    ActualizarClienteComponent,
<<<<<<< HEAD
    ConsultarProductoComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    ActualizarProductoComponent
=======
    HomeClienteComponent,
    ListarProductoComponent,
    HeaderComponent,
    CarritoComponent,
    FooterComponent
>>>>>>> d86897c76ca84586493278f7f5e32094c8f7f2eb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

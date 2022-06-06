import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ConsultarClienteComponent } from './components/cliente/consultar-cliente/consultar-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { HeaderComponent } from './components/general/header/header.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { FooterComponent } from './components/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    CrearClienteComponent,
    ConsultarClienteComponent,
    ActualizarClienteComponent,
    HomeClienteComponent,
    ListarProductoComponent,
    HeaderComponent,
    CarritoComponent,
    FooterComponent
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

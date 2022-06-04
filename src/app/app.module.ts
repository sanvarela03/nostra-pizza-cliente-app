import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ConsultarClienteComponent } from './components/cliente/consultar-cliente/consultar-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    CrearClienteComponent,
    ConsultarClienteComponent,
    ActualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

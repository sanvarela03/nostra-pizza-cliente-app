import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCliente } from 'src/app/models/dto/login-cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  loginCliente: LoginCliente = new LoginCliente();
  
  constructor(private service: ClienteService, private r: Router) {}

  ngOnInit(): void {}

  onGet(): void {
    this.service.get(this.loginCliente).subscribe((data) => {
 //     this.r.navigate([`/home/${data.id}`]);
    });
  }
}

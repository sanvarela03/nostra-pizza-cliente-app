import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  constructor(private service: ClienteService) { }
  clientes: Cliente[] = [];
  ngOnInit(): void {
    this.onGetAll();
  }
  onGetAll(): void {
    this.service.getAll().subscribe(data => { 
      this.clientes = data;
    })
  }
}

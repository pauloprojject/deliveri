import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../../shared/model/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes: Array<Cliente> = new Array<Cliente>();
  constructor() {
    this.clientes.push({
      nome: "Paulo",
      cpf: "123",
      idade: 35
    })
  }

  ngOnInit(): void {

  }

}

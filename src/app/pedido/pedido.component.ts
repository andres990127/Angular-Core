import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  constructor() { }

  ngOnInit() {
  }

}

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

  agregarProducto()
  {
    this.pedido.pedidoDetalle.push({
      cantidad: 20,
      precio: 15,
      producto: 'Agua',
      total: 300
    })
  }

  elHijoEliminoAlgo(evento)
  {
    this.pedido.pedidoDetalle.splice(evento.id,1)
    console.log(evento.id);
  }

}

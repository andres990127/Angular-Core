import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoDetalle } from '../models/pedido-detalle';


@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.scss']
})
export class PedidoDetalleComponent implements OnInit {
  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() seEliminoUnProducto = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  eliminar(posicion: number)
  {
    this.seEliminoUnProducto.emit({id: posicion})
  }
}

import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import Swal from 'sweetalert2' /* Importo SweetAlert */
/* Se instala por la terminal con el codigo: npm install sweetalert2  */

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
    Swal.fire( /* Test SweetAlert */
      {
        title: 'Producto agregado',
        text: 'Se agrego correctamente',
        icon: 'success'
      }
    )
  }

  elHijoEliminoAlgo(evento)
  {
    this.pedido.pedidoDetalle.splice(evento.id,1)
    Swal.fire({ /* Test SweetAlert */
      title: 'Producto Eliminado',
      text: 'Se elimino correctamente',
      icon: 'warning'
    })
  }

}

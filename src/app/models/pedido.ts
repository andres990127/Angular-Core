import { stringify } from 'querystring'
import { PedidoDetalle } from './pedido-detalle';

export class Pedido
{
    cliente: string;
    direccion: string;
    pedidoDetalle: PedidoDetalle[]

    constructor()
    {
        this.cliente = this.cliente
        this.direccion = this.direccion
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
}
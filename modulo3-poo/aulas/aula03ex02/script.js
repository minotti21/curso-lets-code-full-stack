
class Restaurante {
    constructor(cidade) {
        this.cidade = cidade
        this.delivery = false
        this.pedidosPendentes = 0
        this.tempoDeEntrega = 0
    }

    recebePedido(cidade) {
        if (cidade === this.cidade && this.delivery === true) {
            this.pedidosPendentes += 1
            this.tempoDeEntrega += 15
            return `O tempo de entrega é de ${this.tempoDeEntrega} minutos.`
        } else if(cidade === this.cidade && this.delivery === false) {
            return 'O estabelecimento está fechado'
        } else {
            return 'Não é possível realizar a entrega para essa cidade.'
        }

    }

    entregaPedido() {
        if (this.pedidosPendentes <= 0) {
            return `Não há pedidos para entregar.`
        } else {
            this.pedidosPendentes -= 1
            this.tempoDeEntrega -= 15
            return 'Pedido entregue!'
        }
    }

    abreRestaurante() {
        this.delivery = true
    }

    fechaRestaurante() {
        this.delivery = false
    }

}

const restaurante = new Restaurante('São Paulo', false, 0)

console.log(restaurante) // situação atual restaurante

console.log(restaurante.recebePedido('São Paulo')) // fez pedido porém restaurante está fechado

restaurante.abreRestaurante() // abre restaurante

console.log(restaurante.recebePedido('São Paulo')) //fez pedido
console.log(restaurante.recebePedido('São Paulo')) //fez pedido

console.log(restaurante) // situação atual restaurante

console.log(restaurante.recebePedido('Rio de Janeiro')) // fez pedido, porém não entrega nessa cidade

console.log(restaurante.entregaPedido()) // entrega pedido
console.log(restaurante.entregaPedido()) // entrega pedido
console.log(restaurante.entregaPedido()) // não é possível fazer entrega, pois não há pedidos pendentes 


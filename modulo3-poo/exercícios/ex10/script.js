
class Veiculo {
    constructor(rodas, usaCombustivel) {
        this.rodas = rodas
        this.usaCombustivel = usaCombustivel
    }
}

class Carro extends Veiculo {
    constructor(rodas, usaCombustivel, tipoDeCombustivel) {
        super(rodas, usaCombustivel)
        this.tipoDeCombustivel = tipoDeCombustivel
    }
}

class Bicicleta extends Veiculo {
    constructor(rodas, usaCombustivel, infantil) {
        super(rodas, usaCombustivel)
        this.infantil = infantil
    }
}

const caminhao = new Veiculo(4, true)

console.log(caminhao)

const carro = new Carro(4, true, 'gasolina')

console.log(carro)

const bicicleta = new Bicicleta(2, false, true)

console.log(bicicleta)



class Cnh {
    constructor(pais) {
        this.pais = pais
        this.idade = 18
    }

    verificarPais() {
        switch (this.pais) {
            case 'US':
                this.idade = 16
                break;

            case 'CA':
                this.idade = 16
                break;
      
            case 'CH':
                this.idade = 21
                break;
    
            case 'RU':
                this.idade = 21
                break;

            case 'BR':
                const tipos = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE']
                this.carteira = tipos[Math.floor(Math.random() * tipos.length)]

            default:
                break;
        }
    }
}

const carteiraUs = new Cnh('US')

carteiraUs.verificarPais()

console.log(carteiraUs)


const carteiraCh = new Cnh('CH')

carteiraCh.verificarPais()

console.log(carteiraCh)

const carteiraBr = new Cnh('BR')

carteiraBr.verificarPais()

console.log(carteiraBr)

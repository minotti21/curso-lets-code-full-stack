
class Sorteio {
    constructor(quantPessoas) {
        this.quantPessoas = quantPessoas
    }

    sorteiaPremio() {
        for(let i = 1; i < this.quantPessoas; i++) {
            console.log(`O ganhador do sorteio foi a pessoa de número ${Math.floor(Math.random() * this.quantPessoas + 1)}`) 
        }

    }

}

const sorteio = new Sorteio(40)

sorteio.sorteiaPremio()

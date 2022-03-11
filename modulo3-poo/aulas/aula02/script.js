
const carro = {
    
    set getSetMarca (marca) {
        this.marca = marca
    },

    get getSetMarca() {
        return (`Marca do Carro: ${this.marca}`)
    },

    set getSetCor (cor) {
        this.cor = cor
    },

    get getSetCor() {
        return (`Cor do Carro: ${this.cor}`)
    }

}

console.log(carro)

carro.getSetMarca = 'Onix'
carro.getSetCor = 'Preto'


console.log(carro)


console.log(carro.getSetMarca)
console.log(carro.getSetCor)

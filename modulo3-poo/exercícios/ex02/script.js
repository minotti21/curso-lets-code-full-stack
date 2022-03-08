
const Ave = {
    especie: 'Beija-Flor',
    returnEspecie: function() {
        return this.especie;
    }
}


console.log(Ave.returnEspecie());

const Peixe = {
    especie: 'Peixe-Palhaço'
}

console.log(Ave.returnEspecie.bind(Peixe)())


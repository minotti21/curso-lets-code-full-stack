const tv = {
    canal: 'Globo',
    volume: 25,
    ligada: false,

    liga: function() {
        this.ligada = true
    },

    desliga: function() {
        this.ligada = false
    },

    mudaDeCanal: function(canal) {
        this.canal = canal
    },

    aumentaVolume: function() {
        this.volume += 1
    },

    diminuiVolume: function() {
        this.volume -= 1
    },

}


console.log(tv)

tv.liga() //ligou tv

console.log(tv)

tv.mudaDeCanal('Sbt') //trocou de canal

console.log(tv)

for (let i = 0; i < 5; i++) { //aumentou volume para 30
    tv.aumentaVolume() 
}

console.log(tv)

for (let i = 0; i < 10; i++) { //diminuiu volume pra 20
    tv.diminuiVolume()
}

console.log(tv)

tv.desliga //desligou tv
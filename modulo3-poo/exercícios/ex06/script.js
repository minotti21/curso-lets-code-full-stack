
function Tv1 (canal, volume, ligada) {
    this.canal = canal
    this.volume = volume
    this.ligada = ligada

    this.liga = function() {
        this.ligada = true
    }

    this.desliga = function() {
        this.ligada = false
    }

    this.mudaDeCanal = function(canal) {
        this.canal = canal
    }

    this.aumentaVolume = function() {
        this.volume += 1
    }

    this.diminuiVolume = function() {
        this.volume -= 1
    }
    
}

const tv1 = new Tv1('Band', 50, false) 

console.log(tv1)

class Tv2 {
    constructor(canal, volume, ligada) {
        this.canal = canal
        this.volume = volume
        this.ligada = ligada
    }

    liga() {
        this.ligada = true
    }

    desliga() {
        this.ligada = false
    }

    mudaDeCanal(canal) {
        this.canal = canal
    }

    aumentaVolume() {
        this.volume += 1
    }

    diminuiVolume() {
        this.volume -= 1
    }

} 

const tv2 = new Tv2('RedeTv', 50, true)

console.log(tv2)
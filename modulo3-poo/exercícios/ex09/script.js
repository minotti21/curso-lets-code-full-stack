
class SmartWatch {
    constructor(pedometro) {
        this.pedometro = pedometro
    }

    set incrementaPasso(numPassos) {
        if (numPassos < 0) {
            console.log('Passos podem ser apenas incrementados.')
        } else {
            this.pedometro += numPassos
        }
    }

    resetOnMidnight() {
        this.pedometro = 0
    }

}

const smartWatch = new SmartWatch(30)

console.log(smartWatch)

smartWatch.incrementaPasso = 20

console.log(smartWatch)

smartWatch.incrementaPasso = -6

smartWatch.resetOnMidnight()

console.log(smartWatch)


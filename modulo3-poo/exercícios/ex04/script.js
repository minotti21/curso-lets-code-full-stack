const dadosAluno = {

    set defineNome(nome) {
        this.nome = nome
    },

    set defineP1(p1) {
        this.p1 = p1
    },

    set defineP2(p2) {
        this.p2 = p2
    },

    set defineMedia(media) {
        if (this.p1 > 0) {
            this.media = (this.p1 + this.p2) / 2 
        } else {
            this.media = ('A nota da p1 foi 0, não vai ser possível fazer uma média.')
        }
    },

    get retornaDados() {
        return (`Nome do curso: ${this.nome}\nMédia das Notas: ${this.media}`)
    }
}

console.log(dadosAluno)

dadosAluno.defineNome = 'Programação Orientada a Objetos'
dadosAluno.defineP1 = 0
dadosAluno.defineP2 = 10
dadosAluno.defineMedia = ''

console.log(dadosAluno)

console.log(dadosAluno.retornaDados)

dadosAluno.defineNome = 'Biblioteca React'
dadosAluno.defineP1 = 7
dadosAluno.defineP2 = 10
dadosAluno.defineMedia = ''

console.log(dadosAluno)

console.log(dadosAluno.retornaDados)
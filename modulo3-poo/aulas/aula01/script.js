const pessoa = {
    nome: 'Vinicius',
    idade: 21,
    cumprimentaPessoa(nome = 'Fulano') {
        return console.log(`Seja bem vindo ${nome}`)
    },
}



const mensagem = pessoa.cumprimentaPessoa('Vinicius')



const counter = {
    count: 0,
    next: function() {
        return this.count++;
    }
}

console.log(counter.count)

counter.next()
counter.next()
counter.next()
counter.next()

console.log(counter.count) 


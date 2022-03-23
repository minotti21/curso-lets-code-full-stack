const carros = []

function adicionar() {
    const modelo = document.getElementById('modelo')
    const id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    const ano = document.getElementById('ano')
    const cor = document.getElementById('cor')
    const situacao = document.getElementById('situacao')
    const preco = document.getElementById('preco')

     const carro = {
        modelo: modelo.value,
        id: id,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value,
        preco: preco.value
    }

    carros.push(carro)
    
    const lista = document.getElementById('lista')

    lista.innerHTML = carros.map(function(carro) {

    return `<tr>
     <td>${carro.modelo}</td>
     <td>${carro.id}</td>
     <td>${carro.ano}</td>
     <td>${carro.cor}</td>
     <td>${carro.situacao}</td>
     <td>${carro.preco}</td>
    </tr>`
    }).join("")

    const total = document.getElementById('cars-quantity').innerHTML = (carros.reduce((cont) => {
        return cont + 1
    }, 0))
        

}

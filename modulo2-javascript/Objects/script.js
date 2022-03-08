const carros = []

function adicionar() {
    const modelo = document.getElementById('modelo')
    const ano = document.getElementById('ano')
    const cor = document.getElementById('cor')
    const situacao = document.getElementById('situacao')

     const carro = {
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value
    }

    carros.push(carro)
    
    const lista = document.getElementById('lista')

    lista.innerHTML = carros.map(function(carro) {

    return `<tr>
     <td>${carro.modelo}</th>
     <td>${carro.ano}</th>
     <td>${carro.cor}</th>
     <td>${carro.situacao}</th>
    </tr>`
    }).join("")
}

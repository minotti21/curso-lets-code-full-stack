
const myFunction = () => {

    const age = parseInt(document.getElementById('age').value)
    let result = document.getElementById('result')

    if (age >= 60) {
        result.value = 'Você é idoso!'
    } else if (age >= 18) {
        result.value = 'Você é adulto!'
    } else if (age >= 13) {
        result.value = 'Você é adolescente!'
    } else if (age >= 0) {
        result.value = 'Você é criança!'
    } else {
        result.value = 'Você não é humano'
    }
    
}

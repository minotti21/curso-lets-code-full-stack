console.log('=== CALCULADORA ===');

const calcular = function() {
    
    //entrada de dados
    const firstNum = parseFloat(document.getElementById('firstNum').value);
    const secondNum = parseFloat(document.getElementById('secondNum').value);

    //processamento
    const result = firstNum + secondNum;

    //saída de dados
    document.getElementById('result').value = result;

}

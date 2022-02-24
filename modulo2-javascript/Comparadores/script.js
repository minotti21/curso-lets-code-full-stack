

function test()  {
    const firstNum = parseInt(document.getElementById('firstNum').value)
    const secondNum = parseInt(document.getElementById('secondNum').value) 
    const operators = document.getElementById('operators').value
    let result = document.getElementById('result').value
    
    switch (operators) {

        case '<':
            result = firstNum < secondNum
            break;

        case '>':
            result = firstNum > secondNum
            break;

        case '=':
            result = firstNum == secondNum
            break;

        case '>=':
            result = firstNum >= secondNum
            break;

        case '<=':
            result = firstNum <= secondNum
            break;
            
        case '!=':
            result = firstNum != secondNum
            break;
    }

    document.getElementById('result').value = result
}

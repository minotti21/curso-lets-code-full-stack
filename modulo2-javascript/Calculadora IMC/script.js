

function myFunction() {

    const height = document.getElementById('height').value;

    const weight = document.getElementById('weight').value;

    let result = document.getElementById('result');

    const imc = weight / ( height * height );
  
    document.getElementsByTagName('body')[0].style.cursor = 'auto'
        
    if (imc < 18.5) {
        result.innerHTML = 'Você está magro!';
    } else if (imc < 25) {
        result.innerHTML = 'Você está saudável!';
    } else if (imc < 30) {
        result.innerHTML = 'Você está gordinho!';
    } else {
        result.innerHTML = 'Você está obeso!';
    }
}

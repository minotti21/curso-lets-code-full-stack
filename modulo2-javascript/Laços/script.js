
document.write('<h1>Números 50 à 1</h1>')

let i = 50

while (i >= 1) {
    document.write(i, ' ')
    i--
}

document.write('<hr>')

document.write('<h1>Números pares 0 à 100</h1>')

i = 0

while (i <= 100) {
    document.write(i, ' ')
    i += 2
}

document.write('<hr>')

document.write('<h1>Números ímpares de 100 à 0</h1>')

i = 99

while (i >= 1) {

    switch (i) {
        case 1:
            document.write(i)
            break;
    
        default:
            document.write(i, ' - ')
            break;
    }

    i -= 2

}

document.write('<hr>')

/*document.write('<h1>Números digitados</h1>')

let num

while (true) {

    num = prompt('Digite um número: ')
    document.write(num, ' ')

    if (num == 0) {
        break
    }
}


document.write('<hr>')

document.write('<h1>Asteriscos</h1>')

for (let i = 0; i < 5; i++) {

    for(let num = 0; num < 10; num++) {
        document.write('*')
    }
}*/

for (let i = 10; i >= 0; i--) {
    for (let x = 0; x < i; x++) {
        document.write('*')
    }
    document.write('<br>')
}

// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *

// Importa os módulos necessários
import fs from 'fs'
import http from 'http'

// Cria o servidor
http.createServer((req, res) => {

    // Trata a URL para pegar apenas os dados depois da barra
    const data = req.url.substring(req.url.lastIndexOf('/')).replace('/', '')

    // Trata a URL para pegar apenas o método escrito
    const formatedUrl = req.url.replace(data, '')

    // Verifica se a URL e o metódo eram um POST
    if (formatedUrl === '/POST/' && req.method === 'POST') {

        // Adiciona o texto da URL ao arquivo.txt
        fs.appendFile('arquivo.txt', `${data}\n`, (err) => {
            if (err) throw err
            console.log('Arquivo salvo com sucesso!')
        })

    }

    // Verifica se a URL e o metódo eram um GET
    if (formatedUrl === '/GET/' && req.method === 'GET') {


        
        // Lê o texto do arquivo.txt
        fs.readFile('./arquivo.txt', 'utf8', (err, data) => {
            if (err) throw err
            console.log(data)

        })

    }

    console.log(http.METHODS)

    // Finaliza a resposta do servidor
    res.end()
}).listen(8080)



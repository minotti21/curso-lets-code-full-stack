
const aluno = {
    nome: 'Vinicius',
    idade: 21,
    matricula: 2022,
    getCurso: function(curso = 'Desenvolvimento Full Stack') {
        this.curso = curso
    }
}

console.log(aluno)

aluno.getCurso('Analise de Dados Backend')

console.log(aluno)

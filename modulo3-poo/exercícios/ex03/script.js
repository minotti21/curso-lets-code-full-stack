

function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso
}

const aluno = new Aluno('Vinicius', 21, 'vinicius.minotti21@gmail.com', 2022, 'Web Full Stack')

console.log(aluno)

Aluno.prototype.getCurso = function() {
    return this.curso
}

console.log(aluno.getCurso())


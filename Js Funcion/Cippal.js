class Cippal {
    constructor(nome, funcao, projetos) {
        this.nome = nome;
        this.funcao = funcao;
        this.projetos = projetos;
    }

    get getProjeto() {
        return this.projetos;
    }

    set novoProjeto(projetos) {
        this.projetos = projetos;
    }
}

let nome = prompt("Informe seu nome: ");
let funcao = prompt("Informe seu cargo na CIPPAL: ");
let projetos = prompt("Nome do projeto a ser feito: ");

let pessoa = new Cippal(nome, funcao, projetos);
console.log("O seu nome é: " + pessoa.nome);
console.log("Seu projeto é: " + pessoa.projetos);
console.log("O seu cargo: " + pessoa.funcao);

// Herança
class Funcionario extends Cippal {
    constructor(nome, funcao, projetos) {
        super(nome, funcao, projetos);
    }
}

let funcionario = new Funcionario('Jair', 'Gerente', 'Novo Projeto');
console.log(funcionario.nome);

console.log(funcionario instanceof Cippal);  // Correção aqui

import User from "./User.js"; //para importar módulos (devo criar o package.json com o comando no terminal nom init -y. Dentro do json criado devo colocar/digitar (em cima de main) "type": "module")

export default class Admin extends User { //extends pois ela está buscando informações da classe User, importada do outro arquivo
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo) //Superclasse é como chamamos a classe que está fornecendo os parâmetros e os métodos para a outra classe herdar. Então user é uma superclasse de Admin e a Admin é uma subclasse de user. Pode se usar somente os parametros que forem necessários
    }

    criarCurso(nomeDoCurso, vagas){
        return`Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}


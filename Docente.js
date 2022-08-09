import User from "./User.js";


export default class Docente extends User { //extends pois ela está buscando informações da classe User, importada do outro arquivo
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

aprovaEstudante(estudante, curso){
    return `Estudante ${estudante} aprovado no curso ${curso}.`
}
}


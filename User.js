export default class User { //classes começam com letra maiscula
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){  //em uma classe eu não preciso digitar a palavra function antes de uma função (método)
        return `${this.nome}, ${this.email}`
    }
}











// const novoUser = new User ('Juliana', 'j@j.com', '2021-01-01') //new User está instanciando a classe User acima, ou seja, por meio dos parametros digitados entre parenteses está se criando uma novo objeto. 
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));
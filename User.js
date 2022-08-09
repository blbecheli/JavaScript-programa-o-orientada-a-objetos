export default class User { //classes começam com letra maiscula
    #nome //O # indica que uma variável é privada, ou seja, ela não pode ser alterada no decorrer do código. Além de usar # deve a variável ser declarada antes do construtor
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() { //retornam valores. Utilizados em classes privadas (não exclusivamente) para retornar valores, no modo de somente leitura. Parecem uma função, mas são métodos. Para cada elemento que se quer exportar deve ser criado um get. Não recebem parametros
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) { //permite alterar uma classe privada. Recebe um parametro, que é a informação que será alterada. Pode ser usado validações para controlar as mudanças
        if(novoNome === ""){
            throw new Error ('formato não válido')
        }
        this.#nome = novoNome
    }

    exibirInfos() {  //em uma classe eu não preciso digitar a palavra function antes de uma função (método)
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}` //retornam os parametros do get, e não da classe privada
    }
}











// const novoUser = new User ('Juliana', 'j@j.com', '2021-01-01') //new User está instanciando a classe User acima, ou seja, por meio dos parametros digitados entre parenteses está se criando uma novo objeto.
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));
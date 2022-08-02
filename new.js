//A função abaixo cria um prototipo de um elemento. O nome da função está em maiusculo, pois é o padrão para criação de protótipos e classes
// function User (nome, email){
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

// const novoUser = new User ("Juliana", "j@j.com")
// console.log(novoUser.exibirInfos())

// function Admin(role){
//     User.call(this, "Juliana", "j@j.com"); //this é o contexto e está se referindo a User que será reaproveitado
//     this.role = role || "estudante" //se receber o parametro salve-o, senão o valor será "estudante"
// }


// Admin.prototype  =Object.create(User.prototype)
// const novoUser = new Admin ('admin')
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);


//Utilizando um objeto literal para criar modelos
const user = {
    init: function(nome, email){ //função construtora que recebe os parametros a serem utilizados
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')

console.log(novoUser.exibirInfos());
// console.log(user.isPrototypeOf(novoUser)); //verifica se é relamente um protótipo

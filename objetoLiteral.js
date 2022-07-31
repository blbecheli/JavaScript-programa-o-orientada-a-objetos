const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email); 
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado!");
    }
}

//Modo antigo protótipo. Os protótipos são a forma do JavaScript fazer com que objetos herdem recursos uns dos outros. São dois parametros para ele: primeiro parâmetro o objeto que vai herdar propriedades e o segundo parâmetro o objeto que vai dar, que vai ceder essas propriedades que vão ser herdadas.
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()












// user.exibirInfos()
// const exibir = user.exibirInfos

// const exibir = function(){
//     console.log(this.nome);
// }

// const exibNome = exibir.bind(user) //faz uma ligação, um contexto com um outro elemento. No caso a função exibir será ligada (bind) com a const bind
// exibNome()
// exibir()
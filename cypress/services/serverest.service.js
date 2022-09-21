const URL_USUARIOS   = '/usuarios'
const URL_LOGIN      = '/login'
const URL_PRODUTOS  = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {
    //Açoes que podemos realizar na API
    //Buscar usuarios
    //Cadastrar novos usuarios
    //Realizar login 

    static buscarUsuarios(){
        return cy.rest('GET', URL_USUARIOS)
    }

    static buscarUsuarioParaLogin(){
       cy.request(URL_USUARIOS).then( res => {
        cy.wrap({
            email: res.body.usuarios[0].email,
            password: res.body.usuarios[0].password
        }).as('usuarioLogin') 
      
       })
        }
    
    static logar(usuario){
        return cy.rest('POST', URL_LOGIN, usuario)

    }

    static salvarBearer(resposta){
        Cypress.env('bearer', resposta.body.authorization.slice(7))
      
    }
// Produtos //


static buscarProdutos(){
    return cy.rest('GET', URL_PRODUTOS)
}

static cadastrarProdutoComSucesso(resposta){
    cy.log(Cypress.env("bearer"))
    return crypto.request({
    method: 'POST',
    url:  URL_PRODUTOS,
    failOnStatusCode: false,   
    headers: {
        authorization: Cypress.env("bearer")
    },
    body: {
        "nome": "Logitech MV Horizontal",
        "preco": 350,
        "descricao": "Carro",
        "quantidade": 7

    }
        
    })

}
}
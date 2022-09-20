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
        Cypress.env('bearer', resposta.body.authorization)
        cy.log(">>>>" + Cypress.env('bearer'))
       

    }


}
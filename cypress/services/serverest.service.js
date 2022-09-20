const URL_USUARIOS   = '/usuarios'
const URL_LOGIN      = '/login'
const URL_PRODUTOS  = '/produtos'
const URL_CARRINHOS = '/carrinhos '



export default class Serverest {
    //Açoes que podemos realizar na API
    //Buscar usuarios
    //Cadastrar novos usuarios
    //Realizar login 

    static buscarUsuarios(){
        return cy.rest('GET', URL_USUARIOS)
    }
    


}
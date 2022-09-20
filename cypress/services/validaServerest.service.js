export default class ValidaServerest {
//Validações das açoes que podemos realizar na API
//Validar a buscar deusuarios
//Validar o cadastro novos usuarios
//Realizar login 

static validarBuscarDeUsuarios(resposta){
    expect(resposta).to.be.a('object')
    expect(resposta.body.quantidade).to.be.a('number')
    expect(resposta.body.quantidade).to.be.greaterThan(3)
           
}

static validarLoginComSucesso(resposta){
    expect(resposta).to.be.a('object')
    expect(resposta.body.message).to.be.a('string')
    expect(resposta.body).to.haveOwnProperty('authorization')
}

}


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

static validarBuscaDeProdutos(resposta){
    expect(resposta).to.be.a('object')
    expect(resposta.body.quantidade).to.be.a('number')
    expect(resposta.body.produtos[0]).to.haveOwnProperty('nome')
    expect(resposta.body.produtos[0]).to.haveOwnProperty('preco')
    expect(resposta.body.produtos[0]).to.haveOwnProperty('descricao')
    

}

static validarCadastroDeProdutoComSucesso(resposta){
    expect(resposta).to.be.a('object')
    expect(resposta.body.message).to.be.a('string')
    expect(resposta.body.message).to.be.equal('Cadastro realizado com sucesso')
    expect(resposta.body.message).to.haveOwnProperty('_id')
    


}   
}

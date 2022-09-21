import {faker} from '@faker-js/faker';

export default class Factory {

    static gerarProduto(){
        return {
            "nome" : faker.commerce.productName(),
            "preco" : faker.datatype.number(),
            "descricao" : faker.commerce.productDescricao(),
            "quantidade" : faker.datatype.number(),
        }

    }        
   

        }

 
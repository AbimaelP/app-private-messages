import User from '../models/users/User.js'
import Token from '../models/tokens/Token.js'
import { v4 as uuidv4 } from 'uuid';

class UserController {

    index(data){
        
    }

    async create(data){
        //criação de codigo com 32 caracteres para o token
        const tokenCod = await uuidv4()
        //cria um usuario, e insere os dados que foram gravados, dentro de uma variavel
        const userCreated = await User.create(data).then((response) => {
            return response
        }).catch((error) => {
            return error
        })
        //verifica se o usuario foi criado com sucesso, se não, retorna um erro
        if(userCreated.errors){
            return {
                codRequest: 401,
                error: 'Esse email ja está cadastrado'
            }
        }
        //cria um token utilizando o ID do usuario que foi criado como chave estrangeira
        const token = await Token.create({ token_cod: tokenCod, UserId: userCreated.id })
        //retorna a resposta para a rota que chamou o método
        return {
            codRequest: 200,
            token_cod: token.token_cod
        }
    }

    update(data){

    }

    delete(data){

    }
}

export default new UserController
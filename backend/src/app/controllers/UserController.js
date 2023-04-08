import User from '../models/users/User.js'
import Token from '../models/tokens/Token.js'
import { v4 as uuidv4 } from 'uuid';

class UserController {

    async authenticate(data)
    {
        const isAuth = await Token.findOne({
            token_cod: data
        }).then((response) => {
            return {
                codRequest: 200,
                isValid: response.token_cod,
            }
        }).catch((error) => {
            return {
                codRequest: 401,
                error
            }
        })

        return isAuth
    }

    async index(data)
    {
        const user = await Token.findOne({
            where: {
                token_cod: data,
            },
            include: [{model: User}]
        }).then((response) => {
            return {
                codRequest: 200,
                response
            }
        }).catch((error) => {
            return {
                codRequest: 401,
                error
            }
        })

        return user
    }

    async create(data)
    {
        const tokenCod = await uuidv4()
        const userCreated = await User.create(data).then((response) => {
            return response
        }).catch((error) => {
            return error
        })
        
        if(userCreated.errors){
            return {
                codRequest: 401,
                error: 'Esse email ja está cadastrado'
            }
        }
        
        const token = await Token.create({ token_cod: tokenCod, UserId: userCreated.id })
        return {
            codRequest: 200,
            token_cod: token.token_cod
        }
    }

    update(data)
    {

    }

    delete(data)
    {

    }
}

export default new UserController
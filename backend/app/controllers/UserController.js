import User from '../models/users/User.js'
import Token from '../models/tokens/Token.js'
import crypto from 'crypto'
class UserController {

    async getAllUsers(){

        return await User.findAll()
        
    }

    async createUser(user){

        const tokenCod = await crypto.randomBytes(16).toString('hex')
        
        User.create(user).then((userResponse)=>{
            Token.create({ token_cod: tokenCod, UserId: userResponse.id })
        })
        
        return tokenCod
    }
}

export default new UserController
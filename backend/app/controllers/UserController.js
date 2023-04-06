import User from '../models/users/User.js'

class UserController {
    async getAllUsers(){
        return await User.findAll() 
    }
}

export default new UserController
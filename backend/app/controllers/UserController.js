import User from '../models/users/User.js'

class UserController {
    async getAllUsers(){
        return await User.findAll() 
    }
    createUser(data){
        return 'success'
    }
}

export default new UserController
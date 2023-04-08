import express from 'express'
import UserController from './app/controllers/UserController.js'
import sequelize from './config/db/database.js'

const app = express()

app.use(express.json())

app.get('/get-users',async (req,res)=>{

    const userList = await UserController.getAllUsers()

    res.json(userList)

})

app.post('/register', async (req, res) => {

    const userData = await req.body;

    const token = UserController.createUser(userData)
    
    res.json(token);

  });

app.listen(3000,()=>{

    console.log('SERVER IS RUNNING')

})
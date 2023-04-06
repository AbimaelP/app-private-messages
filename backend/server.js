import express from 'express'
import UserController from './app/controllers/UserController.js'


const app = express()

app.use(express.json())

app.get('/get-users',async (req,res)=>{
    const userList = await UserController.getAllUsers()
    res.json(userList)
})

app.post('/register', (req, res) => {
    const nome = req.body;

    res.json(nome);
  });

app.listen(3000,()=>{
    console.log('SERVER IS RUNNING')
})
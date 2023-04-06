
import UserController from './app/controllers/UserController.js'
import express from 'express'
const app = express()

app.get('/get-users',async (req,res)=>{
    const userList = await UserController.getAllUsers()
    res.json(userList[0])
})

app.listen(3000,()=>{
    console.log('SERVER IS RUNNING')
})
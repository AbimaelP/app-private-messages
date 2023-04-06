
import UserController from './app/controllers/UserController.js'
import express from 'express'
const app = express()

app.listen(3000, async ()=>{
    const userList = await UserController.getAllUsers()
    console.log(userList[0])
})
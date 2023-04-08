import express from 'express'
import router from './routes/index.js'

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use(router)

app.listen(port,()=>{
  console.log(`server is running in port ${port}`)
})
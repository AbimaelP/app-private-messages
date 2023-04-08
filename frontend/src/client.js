const express = require('express')
const path = require('path')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views',path.join(__dirname,'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (req,res)=>{
    res.render('index.html')
})

let messages = []

io.on('connection', socket => {
    console.log('Socket conectado:' + socket.id)

    if(messages != ''){
        socket.emit('previousMessages',messages)
    }
    socket.on('sendMessage', data => {
        if(data != '' && data != 0){
            messages[0] = data 
            socket.broadcast.emit('receivedMessage', data)    
        }else {
            messages[0] = ''
            socket.broadcast.emit('receivedMessage', 0)
        }
    })
    
})

server.listen(80)
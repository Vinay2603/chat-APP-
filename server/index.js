const http = require("http")
const express = require("express")
const cors = require("cors")
const socketIO = require("socket.io")
const { Socket } = require("engine.io")


const app = express()
const port = 4500 || process.env.PORT

const users=[{}]

app.use(cors())
app.get("/",(req,res)=>{
    res.send("yupp is is working ")
})

const server = http.createServer(app)

const io = socketIO(server)

io.on("connection",(socket)=>{
    console.log("New Connection")

    socket.on("joined",(user)=>{
        users[socket.id] = user
        console.log(  users[socket.id])
        console.log(`${user.user } has joined`)
        socket.broadcast.emit("userJoined",{user:'Admin',message:`${users[socket.id]} has Joined`})
    })

    socket.emit("welcome",{user:"Admin",message:`welcome to the chat `})
   
})

server.listen(port ,()=>{
    console.log(`server is runing on http://localhost:${port}`)
})

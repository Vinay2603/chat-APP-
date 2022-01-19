import { user } from "../Join/Join"
import socketIO from "socket.io-client"
import { useEffect, useState } from "react"
import "./Chat.css"
import { Message } from "../Message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom"

const ENDPOINT = "http://localhost:4500/"
let socket
const Chat =()=>{

  const [id,setId ]= useState("")
  const [messages,setMessages] = useState([])

  const send=()=>{
     const message = document.getElementById("chatInput").value
    // console.log("demo",message )
    // console.log("demo id",id)
     socket.emit("message",{message ,id})
     document.getElementById("chatInput").value = ""
 }
 
  useEffect(() => {
     socket = socketIO(ENDPOINT , {transports: ["websocket"]} )
  
  
    socket.on("connect",()=>{
        alert("connected")
        setId(socket.id)
    })
console.log(socket)
socket.emit("joined",{user})

   socket.on("welcome",(data)=>{
       setMessages([...messages,data])
       console.log(data.user, data.message)
   })

   

    socket.on('userJoined',(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message)
    })

    socket.on("leave",(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message)
    })

      return () => {
        socket.emit("disconnect")
        socket.off()
      }
  }, [])

useEffect(() => {
    socket.on("sendMessage",(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message,data.id)
    })
    return () => {
       socket.off()  
    }
}, [messages])
    return <div className="chatPage">
        
        <div className="chatContainer">
            <div className="header" > {user}</div>
            <ReactScrollToBottom className="chatBox">
                {messages.map((el)=> <Message  user={el.id === id ? "": el.user} message={el.message} classs={el.id ===id ?"right":"left"} />)}
            </ReactScrollToBottom>
            <div className="inputBox">
                <input  id="chatInput" onKeyPress={(e)=> e.key === "Enter"? send() : null} type="text"/>
                <button className="button" onClick={send}>SEND</button>
            </div>
        </div>
    </div>
}

export {Chat}
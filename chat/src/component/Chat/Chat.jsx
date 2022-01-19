import { user } from "../Join/Join"
import socketIO from "socket.io-client"
import { useEffect } from "react"
import "./Chat.css"

const ENDPOINT = "http://localhost:4500/"

const Chat =()=>{

  const socket = socketIO(ENDPOINT , {transports: ["websocket"]} )
 
  useEffect(() => {
    
    socket.on("connect",()=>{
        alert("connected")
    })

   socket.on("welcome",(data)=>{
    
       console.log(data.user, data.message)
   })

    socket.emit("joined",{user})

    socket.on('userJoined',(data)=>{
        console.log(data.user,data.message)
    })
      return () => {
        
      }
  }, [socket])


    return <div className="chatPage">
        
        <div className="chatContainer">
            <div className="header" > {user}</div>
            <div className="chatBox"></div>
            <div className="inputBox">
                <input id="chatInput" />
                <button>SEND</button>
            </div>
        </div>
    </div>
}

export {Chat}
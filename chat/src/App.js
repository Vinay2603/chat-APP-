//import socketIO from "socket.io-client";
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Join from "./component/Join/Join"
import { Chat } from './component/Chat/Chat';
//const ENDPOINT = "http://localhost:4500/"
//const socket = socketIO(ENDPOINT , {transport:["websocket"]} )


function App() {

  // socket.on("connect" ,()=>{

  // })
  return (
    <div className="App">
   
<Routes>
   <Route path="/" element={ <Join/> } > </Route>
   <Route path="/chat" element={ <Chat/>} ></Route> 
</Routes>
    
   

    </div>
  );
}

export default App;

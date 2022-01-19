import React from "react";
import { Link } from "react-router-dom";
import "./Join.css"

var user 
export const Join=()=>{

const sendUser=()=>{
    user= document.getElementById("joinInput").value
}
    return  <div className="JoinPage">
        
        <div className="JoinContainer">
            <h1>Join page</h1>
            <input type="text" placeholder="Enter Name" id="joinInput"/>
           
        <Link to={"/chat"} > <button onClick={sendUser} >Login</button></Link>
        
        </div>

    </div>
}

export default Join
export {user}

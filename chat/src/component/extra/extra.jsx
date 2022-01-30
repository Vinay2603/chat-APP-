

import React, { Component } from 'react'

const ass= "https://masai-course.s3.ap-south-1.amazonaws.com/users/806/submissions/107528/253477/d28b85bee79eef87fd2a8913d6fee1c0/zoom_8.mp4"
 const Extra =()=>{
    return (
        <div className="App">
        <p>hello</p>
        <video src={ass} width="750" height="500" controls>
       </video>
        </div>
      );
}

export {Extra}
   
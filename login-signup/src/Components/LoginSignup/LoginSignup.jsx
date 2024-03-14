import React, { useState } from 'react'
import './LoginSignup.css'

//designing of component
// import user_icon from '../Assets'
// import email_icon from '../Assets'
// import password_icon from '../Assets'

const LoginSignup = () => {

    const [action, setAction]= useState("Sign Up");





  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div> 
            <div className="underline"></div>       
        </div>
        <div className="inputs">
            {/* here we will return input div with text if action is Sign Up else return an empty div */}
            {action==="Login"?<div></div>:
            <div className="input">
                {/* <img src={user_icon} alt="" />  */}
                <input type="text" placeholder='Enter your name' /></div>
            }
            <div className="input">
                {/* <img src={email_icon} alt="" /> */}
                 <input type="email" placeholder='Enter your email' /></div>
            <div className="input">
                {/* <img src={password_icon} alt="" */}
                 <input type="password" placeholder='Create new password'/></div>
        </div>
        {/* Goal: Hide forgot password from signup form using ternary operator'?' */}
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        }
        <div className="submit-container">
            {/* dynamic classname using ternary operator */}
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} >Login</div>  
        </div>
    </div>
  )
}

export default LoginSignup
import React from 'react'
import './LoginSignup.css'

//designing of component
// import user_icon from '../Assets'
// import email_icon from '../Assets'
// import password_icon from '../Assets'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">SignUp</div> 
            <div className="underline"></div>       
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" /> 
                <input type="text" /></div>
            <div className="input">
                <img src={email_icon} alt="" />
                 <input type="email" /></div>
            <div className="input">
                <img src={password_icon} alt=""
                 /> <input type="password" /></div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>  
        </div>
    </div>
  )
}

export default LoginSignup
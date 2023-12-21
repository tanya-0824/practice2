import React from 'react'
import './pr.css'
import user_icon from '../assests/person.png'
import email_icon from '../assests/email.png'
import password_icon from '../assests/password.png'

export function Practice () 
{return (
    <div classname='container'>
        <div classname="header">
            <div classname="text" style={{color:"red"}}>sign up</div>
            <div class name="underline"></div>
        </div>
        <div classname="inputs">
            <div classname="inputs">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="name" />
            </div>
            <div classname="inputs">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="email id" />
            </div>
            <div classname="inputs">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="password" />
            </div>
        </div>
        <div classname="forgot-password">lost password?<span>Click Here!</span></div>
        <div classname="submit-container">
            <div classname="submit">sign up</div>
            <div classname="submit">login</div>
        </div>
      
    </div>
  )
    
}



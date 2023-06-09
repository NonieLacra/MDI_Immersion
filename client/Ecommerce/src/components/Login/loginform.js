import React from "react";
import '../../styles/loginform.css';



const LoginForm = () => {
    return(
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <div className="login-btn" > Login</div>
            
            <div className="register-btn" >Register</div>
            
            
            <p className="text">Login using </p>
            <div className="alt-login">
                <div className="google"></div>
            </div>
        </div>

        
    )
}

export default LoginForm
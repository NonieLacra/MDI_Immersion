import React from "react";
<<<<<<< Updated upstream
import '../styles/loginform.css';
import { Link } from "react-router-dom";
=======
import "../styles/loginform.css";
>>>>>>> Stashed changes


const LoginForm = () => {
    return(
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <div className="login-btn" > Login</div>
            
            <div className="register-btn" ><Link to='/register'>Register</Link></div>
            
            
            <p className="text">Login using </p>
            <div className="alt-login">
                <div className="google"></div>
            </div>
        </div>

        
    )
}

export default LoginForm
import React from 'react'
import '../../styles/RegistrationForm.css'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {
  return (
    <div>
        <div className='registration-container'>
            <div className='inner-container'>

            <h1 className='title'>Register</h1>

            <div>
            <input className='email' type='email' placeholder='Email' required/>
            </div>

            <div>
            <input className='username' type='text' placeholder='Username' required/>
            </div>

            <div>
            <input className='password' type='password' placeholder='Password' required/>
            </div>

            <div>
            <input className='confirm-password' type='password' 
            placeholder='Confirm Password' required/>
            </div>

            <div>
            <button className='register'>Register</button>
            </div>
            
            
            <div>
            <span>Already have an account yet? </span>
            <Link to='/login'>
            <a class="sign-up" href="">Login</a>
            </Link>
            
            </div>

            </div>

        </div>
      
    </div>
  )
}

export default RegistrationForm


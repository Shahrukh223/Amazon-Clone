import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className = 'login'>
            <Link to = '/'>
            <img className = 'login_logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png' />
            </Link>

        <div className='login_container'>

            <h1>Sign-in</h1>

            <form>

                <h5>E-mail</h5>
                <input type = 'text'/>

                <h5>Password</h5>
                <input type = 'password'/>

                <button className='signin'>Sign In</button>

            </form>

            <p>

                By Signing in you agree to the terms and conditions. 
                Please see our Privacy Notice, our Cookies Notice, and our Interest Based Ads Notice 

            </p>

            <button className='register'>Create your Account</button>

        </div>

        
        </div>
    )
}

export default Login

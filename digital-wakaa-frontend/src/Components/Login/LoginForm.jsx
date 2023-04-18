import React from 'react'
import "./login.css"

const LoginForm = () => {
  return (
    <section id='login__form'>
          <div class="container loginform__wrapper">
            <form className="login__form">
                <h4>Login</h4>
                <div>
                    <label>Username</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <p><a href="">Forgot Password?</a></p>
                <div>
                    <button className='btn btn-primary'>
                      Login
                    </button>
                </div>
                <p>Not Registered? <a href="#">Create Account </a></p>
            </form>
          </div>
    </section>
  )
}

export default LoginForm
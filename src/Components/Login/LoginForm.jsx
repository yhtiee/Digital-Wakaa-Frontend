import React, {useContext, useRef} from 'react'
import "./login.css"
import AuthContext from '../../Context API/AuthContext'

const LoginForm = () => {
  let {loginUser} = useContext(AuthContext)

  let username = useRef()
  let password = useRef()

  let SubmitInfo = (e) => {
    e.preventDefault()
    let USERNAME = username.current.value
    let PASSWORD = password.current.value
    loginUser(USERNAME, PASSWORD)
  }

  return (
    <section id='login__form'>
          <div class="container loginform__wrapper">
            <form className="login__form" onSubmit={SubmitInfo}>
                <h4>Login</h4>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" ref={username} required/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" ref={password}required/>
                </div>
                <p><a href="">Forgot Password?</a></p>
                <div>
                    <button className='btn btn-primary'>
                      Login
                    </button>
                </div>
                <p>Not Registered? <a href="/signup">Create Account </a></p>
            </form>
          </div>
    </section>
  )
}

export default LoginForm
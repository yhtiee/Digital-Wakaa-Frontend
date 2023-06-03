import React, {useContext, useRef} from 'react'
import "./login.css"
import AuthContext from '../../Context API/AuthContext'
import { Link } from 'react-router-dom'

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
                <h2>Welcome Back</h2>
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
                <p>Not Registered? <Link to="/signup">Create Account </Link></p>
            </form>
          </div>
    </section>
  )
}

export default LoginForm
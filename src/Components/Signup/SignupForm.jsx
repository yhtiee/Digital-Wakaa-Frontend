import React, {useContext, useRef} from 'react'
import "./signup.css"
import AuthContext from '../../Context API/AuthContext'
import { Link } from 'react-router-dom'

const SignupForm = () => {

  let {SignupUser} = useContext(AuthContext)

  let last_name = useRef()
  let first_name = useRef()
  let username = useRef()
  let email = useRef()
  let password = useRef()

  let SubmitInfo = (e) => {
    e.preventDefault()
    let LAST_NAME = last_name.current.value
    let FIRST_NAME = first_name.current.value
    let USERNAME = username.current.value
    let EMAIL = email.current.value
    let PASSWORD = password.current.value
    SignupUser(LAST_NAME, FIRST_NAME, USERNAME, EMAIL, PASSWORD)
  }

  return (
    <section id='signup__form'>
      <div className=" container signup__container">
        <div className="form__wrapper">
            <form className='signup__form' onSubmit={SubmitInfo}>
                <h4>Create Account</h4>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="last_name" ref={last_name} required/>
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" name="first_name" ref={first_name} required/>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" ref={username} required/>
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" name="email" ref={email} required/>
                </div>
                <div>
                    <label for="">Password</label>
                    <input type="password" name="password" ref={password} required/>
                </div>
                <div>
                    <button className='btn btn-primary'>
                      Create Account 
                    </button>
                </div>
                <p>Already Created? <Link to="/login">login</Link></p>
            </form>
          </div>
        </div>
    </section>
  )
}

export default SignupForm
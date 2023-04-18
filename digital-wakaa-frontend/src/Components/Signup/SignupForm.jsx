import React from 'react'
import "./signup.css"

const SignupForm = () => {
  return (
    <section id='signup__form'>
      <div className=" container signup__container">
        <div className="form__wrapper">
            <form className='signup__form'>
                <h4>Create Account</h4>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="last_name"/>
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" name="first_name"/>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label for="">Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button className='btn btn-primary'>
                      Create Account 
                    </button>
                </div>
                <p>Already Created? <a href="">login</a></p>
            </form>
          </div>
        </div>
    </section>
  )
}

export default SignupForm
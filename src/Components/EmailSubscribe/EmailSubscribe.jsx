import React from 'react'
import "./emailSubscribe.css"

const EmailSubscribe = () => {
  return (
    <div id='email__subscribe'>
      <div className="container enail__container">
        <div>
          <h4>Subscribe to get Latetst Updates on Digital Wakaa Services</h4>
        </div>
        <div className='form__wrapper'>
          <form>
              <input type="email" placeholder="Email Address"/>
              <button className='btn'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailSubscribe
import React from 'react'
import "./plans.css"

const PlansCard = () => {
  let plans = JSON.parse(localStorage.getItem("plans"))

  const colors = ['orange', 'green', '#0288D1']

  return (
    <section id='plans'>
      <div className="container plans__container">
        <div className="plans__wrapper">
          {plans.map((items, index) => {
            return (
              <div className='plan' style={{border: `1px solid ${colors[index]}`}}>
                <div style={{background: colors[index]}}>
                  <h3>{items.plan}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PlansCard
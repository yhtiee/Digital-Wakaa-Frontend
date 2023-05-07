import React, { useContext, useState } from 'react'
import "./plans.css"
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import API_URL from '../../Context API/API';
import { PaystackButton } from 'react-paystack'
import AuthContext from '../../Context API/AuthContext';

const Blogwritingplans = () => {

  let navigate = useNavigate()
  let [price, setPrice] = useState(`$${100}`)
  let [pricePro, setPricePro] = useState(`$${200}`)
  let [priceMaster, setPriceMaster] = useState(`$${400}`)
  let {user} = useContext(AuthContext)
  
  let changeToNaira = () => {
    if (price[0] === "₦"){
      setPrice(price)
    }
    else{
      let len = price.length
      let currentPrice = price.slice(1,len)
      let newPrice = parseInt(currentPrice)
      let finalPrice = newPrice * 750
      setPrice(`₦${finalPrice}`)
    }
  }

  let changeToNairaPro = () => {
    if (pricePro[0] === "₦"){
      setPricePro(pricePro)
    }
    else{
      let len = pricePro.length
      let currentPrice = pricePro.slice(1,len)
      let newPrice = parseInt(currentPrice)
      let finalPrice = newPrice * 750
      setPricePro(`₦${finalPrice}`)
    }
  }

  let changeToNairaMaster = () => {
    if (priceMaster[0] === "₦"){
      setPriceMaster(priceMaster)
    }
    else{
      let len = priceMaster.length
      let currentPrice = priceMaster.slice(1,len)
      let newPrice = parseInt(currentPrice)
      let finalPrice = newPrice * 750
      setPriceMaster(`₦${finalPrice}`)
    }
  }

  let Payment = () => {
    navigate("/payment")
  }

  let checkPay = () => {
    navigate("/login")
  }

  let publicKey = "pk_test_f17a7430a2ad1631ac37e78fe8e0527b096e1b58"
  let email = JSON.parse(localStorage.getItem("email"))

  let paymentMini = {
    email,
    amount:7500000,
    publicKey,
    text: "Paystack",
    // onSuccess: () =>
    //   alert("Thanks for doing business with us! Come back soon!!"),
    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

  let changeToDollar = () => {
    setPrice(`$${100}`)
  }

  let changeToDollarPro = () => {
    setPricePro(`$${200}`)
  }

  let changeToDollarMaster = () => {
    setPriceMaster(`$${400}`)
  }

  let Check = () =>{
    if (user){
      return
    }
    else{
      navigate("/login")
    }
  }


  return (
    <section id='plans'>
      <div className="container plans__container">
        <div className="plans__wrapper">
          <div className='plan__mini'>
              <div className='plan__header'>
                  <h3>Mini Plan</h3>
              </div>
              <div className="other__wrapper">
                <div className="plan__mini__descriptions">
                    <ul>
                      <li><TiTick color='orange' size={25}/><p>great</p></li>
                      <li><TiTick color='orange' size={25}/><p>great</p></li>
                      <li><TiTick color='orange' size={25}/><p>great</p></li>
                      <li><TiTick color='orange' size={25}/><p>great</p></li>
                      <li><TiTick color='orange' size={25}/><p>great</p></li>
                    </ul>
                </div>
                <div className="currency">
                  <button className='btn currency_btn' onClick={changeToDollar}>$</button>
                  <button className='btn currency_btn' onClick={changeToNaira}>₦</button>
                  {/* <button className='btn currency_btn' onClick={changeToEuro}>€</button>
                  <button className='btn currency_btn' onClick={changeToPounds}>£</button> */}
                </div>
                <div className="plan__mini__cost">
                  <h2>{price}</h2>
                </div>
                <div className='payment__button__wrapper'>
                  <form action={user? `${API_URL}/api/stripe/content_management_mini/create-checkout-session`: ""} onSubmit={Check} method="POST">
                    <button type="submit" className='btn'>
                      Stripe
                    </button>
                  </form>
                  {user? <PaystackButton {...paymentMini} className='btn'/>:
                  <button className='btn' onClick={checkPay}>
                    Paystcak
                  </button>}
                </div>
                <p>Speedy Delivery Between 2-3 Days</p>
              </div>
          </div>
          <div className='plan__pro'>
              <div className='plan__header'>
                  <h3>Pro Plan</h3>
              </div>
              <div className="other__wrapper">
              <div className="plan__pro__descriptions">
                  <ul>
                    <li><TiTick color='green' size={25}/><p>great</p></li>
                    <li><TiTick color='green' size={25}/><p>great</p></li>
                    <li><TiTick color='green' size={25}/><p>great</p></li>
                    <li><TiTick color='green' size={25}/><p>great</p></li>
                    <li><TiTick color='green' size={25}/><p>great</p></li>
                  </ul>
              </div>
                <div className="currency">
                  <button className='btn currency_btn' onClick={changeToDollarPro}>$</button>
                  <button className='btn currency_btn' onClick={changeToNairaPro}>₦</button>
                  {/* <button className='btn currency_btn' onClick={changeToEuroPro}>€</button>
                  <button className='btn currency_btn' onClick={changeToPoundsPro}>£</button> */}
                </div>
                <div className="plan__pro__cost">
                  <h2>{pricePro}</h2>
                </div>
                <div className='payment__button__wrapper'>
                  <form action={ user? `${API_URL}/api/stripe/content_management_pro/create-checkout-session`: ""} onSubmit={Check} method="POST">
                    <button type="submit" className='btn'>
                      Stripe
                    </button>
                  </form>
                  <button className='btn' onClick={Payment}>
                    Paystcak
                  </button>
                </div>
                <p>Speedy Delivery Between 2-3 Days</p>
              </div>
          </div>
          <div className='plan__master'>
              <div className='plan__header'>
                  <h3>Master Plan</h3>
              </div>
              <div className="other__wrapper">
              <div className="plan__master__descriptions">
                  <ul>
                    <li><TiTick color='0288d1' size={25}/><p>great</p></li>
                    <li><TiTick color='0288d1' size={25}/><p>great</p></li>
                    <li><TiTick color='0288d1' size={25}/><p>great</p></li>
                    <li><TiTick color='0288d1' size={25}/><p>great</p></li>
                    <li><TiTick color='0288d1' size={25}/><p>great</p></li>
                  </ul>
              </div>
                <div className="currency">
                  <button className='btn currency_btn' onClick={changeToDollarMaster}>$</button>
                  <button className='btn currency_btn' onClick={changeToNairaMaster}>₦</button>
                </div>
                <div className="plan__master__cost">
                  <h2>{priceMaster}</h2>
                </div>
                <div className='payment__button__wrapper'>
                <form action={user? `${API_URL}/api/stripe/content_management_master/create-checkout-session`: ""} onSubmit={Check} method="POST">
                    <button type="submit" className='btn'>
                      Stripe
                    </button>
                  </form>
                  <button className='btn' onClick={Payment}>
                    Paystcak
                  </button>
                </div>
                <p>Speedy Delivery Between 2-3 Days</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogwritingplans
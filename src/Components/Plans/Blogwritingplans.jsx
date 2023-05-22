import React, { useContext, useState } from 'react'
import "./plans.css"
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '../../Context API/API';
import { PaystackButton } from 'react-paystack'
import AuthContext from '../../Context API/AuthContext';
import { loadStripe } from '@stripe/stripe-js';
import OrderContext from '../../Context API/OrdersContext';

const Blogwritingplans = () => {

  let navigate = useNavigate()
  let [price, setPrice] = useState(`$${100}`)
  let [pricePro, setPricePro] = useState(`$${200}`)
  let [priceMaster, setPriceMaster] = useState(`$${400}`)
  let {user} = useContext(AuthContext)
  let {createOrder} = useContext(OrderContext)
  
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

  let serviceMini ="Blog Like A Boss With Our Expert Writing Services!"
  let costMini=75000.00
  let status = "Pending"

  let paymentMini = {
    email : email,
    amount:7500000,
    publicKey,
    text: "Paystack",
    onSuccess: () => createOrder(serviceMini, costMini, status),
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


  let stripePromise;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe('pk_test_51MpHv9AqvujLwHfeu0Xq0KJEOgTtcE3YmI9AvSnbt1EySQDmKTKdPTAYGTp4YdwU9McIcw0e96Lg9xfF6BV63IXU00hjexiEJR');
    }
    return stripePromise;
  };

  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MzKY3AqvujLwHfepgWIcVI6",
          quantity: 1,
        },
      ],
      mode :'payment',
      successUrl: `http://localhost:5173`,
      cancelUrl: `http://localhost:5173`,
      customerEmail: email,
    });
    if (error) {
      console.warn(error.message);
    } else {
      () => createOrder(serviceMini, costMini, status)
    }
  }

  let Check = () =>{
    if (user){
      handleCheckout()
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
                    <button type="submit" className='btn' onClick={Check}>
                      Stripe
                    </button>
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
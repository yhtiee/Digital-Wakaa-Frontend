import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import API_URL from '../../Context API/API';
import "./paymentForm.css"

const PaymentForn = () => {
  let amount  = 100
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hi")
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Send payment data to server
      const response = await fetch(`${API_URL}/payment/charge/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amount,
          payment_method_id: paymentMethod.id
        })
      });

      if (response.ok) {
        console.log('Payment successful!');
      } else {
        console.log('Payment failed.');
      }
    }
  };

  return (
    <section id='payment'>
      <div className="container payment__container">
          <h4>SERVICE: CONTENT MANAGEMENT</h4>
          <h4>PLAN: MINI PLAN</h4>
          <h4>COST: $100</h4> 
        <form  onSubmit={handleSubmit}>
            <div className="payment-form">
                <div className='order__description'>
                    <label>
                      Order Description
                    </label>
                    <textarea name="order" rows="10"></textarea>
                </div>
              <label htmlFor="card-element" className="card-label">
                Card details
              </label>
                <div className="card-element-container">
                  <CardElement
                    id="card-element"
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </div>
             </div>
          <button className='btn btn-primary' type="submit">Pay ${amount}</button>
        </form>
      </div>
    </section>
  );
};

export default PaymentForn;

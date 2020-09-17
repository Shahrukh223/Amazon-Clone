import React from 'react'
import './Checkout.css'
import Banner from "./images/banner-ad.JPG"

function Checkout() {
    return (
        <div className = "checkout">
            <div className = "checkout_left">
                <img className = "checkout_Ad" src = {Banner} alt=""/>

            <div className = 'checkout_title'>
                    <h2>Your Shopping Basket</h2>
                </div> 
            
            </div>

            <div className = 'checkout_right'>
                <h2>Your Subtotal Goes Here</h2>


            </div>
        </div>
    )
}

export default Checkout

import React from 'react'
import './Checkout.css'
import Banner from "./images/banner-ad.JPG"
import Subtotal from './Subtotal'

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
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

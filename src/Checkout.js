import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Banner from "./images/banner-ad.JPG"
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className = "checkout">
            <div className = "checkout_left">
                <img className = "checkout_Ad" src = {Banner} alt=""/>

            <div className = 'checkout_title'>
                    <h2>Your Shopping Basket</h2>
                </div> 

                {basket.map(item => (

                        <CheckoutProduct
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}/>

                ))}

            </div>

            <div className = 'checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

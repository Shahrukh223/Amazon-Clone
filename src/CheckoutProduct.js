import { Button } from '@material-ui/core'
import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({image, title, price, rating}) {
    return (
        <div className = 'checkoutProduct'>
            <img className = 'image' src={image} />

        <div className = 'info'>
            <p className = 'title' >{title}</p>
            <p className = 'price' ><small>$</small><strong>{price}</strong></p>
        

        <div className = 'rating'>
            {Array(rating)
            .fill()
            .map((_,  i) => (

                <p>⭐</p>

            ))}
        </div>

        <button>Remove From Basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct

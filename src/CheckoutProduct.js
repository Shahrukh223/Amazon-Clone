import { Button } from '@material-ui/core'
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image, title, price, rating}) {

    const[{basket} , dispatch] = useStateValue();

    const removeFromBasket = () => {

        //Remove from the basket
        dispatch({

            type: 'Remove_from_Basket',
            title: title,

        })

    }

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

        <button onClick = {removeFromBasket}>Remove From Basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct

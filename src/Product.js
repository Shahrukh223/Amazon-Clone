import { ShoppingBasket } from '@material-ui/icons';
import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    console.log('this is the basket >>> ' , basket)

    const addToBasket = () => {

        //dispatch item to the data layer
        dispatch({

            type: 'Add_to_Basket',
            item: {

                title: title, 
                image: image,
                price: price,
                rating: rating,

            },

        });


    };

    return (
        <div className="product">
            <div className= "product-info">
            <p>{title}</p>
                <p className = "product-price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className = "product_rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}
                    

                </div>
            </div>

        <img
            src={image} alt=''/>
            
            <button onClick={addToBasket}>Add to Basket</button>

        </div>

    )
}

export default Product

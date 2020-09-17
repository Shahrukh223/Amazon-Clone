//Navigation bar for the header 
//Type in rfce for the full creation of a method

import React from 'react'
import App from './App'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <div className= "header">
            <Link to = '/'>
            <img 
                className = "header_logo"
                src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                />
            </Link>
            
            <div className = 'header_search'>
                <input
                className='header_searchInput' type = 'text' />
                <SearchIcon className = 'header_searchIcon' />
                </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span
                    className = 'header_optionLineOne'>
                    Hello Guest
                    </span>
                    <span
                        className = 'header_optionLineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header_option'>
                    <span
                        className = 'header_optionLineOne'>
                        Returns
                    </span>
                    <span
                        className = 'header_optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                <span
                        className = 'header_optionLineOne'>
                        Your
                    </span>

                    <span
                        className = 'header_optionLineTwo'>
                        Prime
                    </span>
                </div>

            </div>
            <Link to='/checkout'>
            <div className='shoppingCart'>
                <ShoppingBasketIcon/> <span className = 'header_optionLineTwo header_basketCount'>0</span>

            </div>
            </Link>

        </div>

    )
}

export default Header
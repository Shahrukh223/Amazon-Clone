import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className= 'Home'>
            
            <div className = 'home_container'>
                <img 
                className='home_image'
                src='https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/Yjc3NGZmOTkt/Yjc3NGZmOTkt-ZTFmYjg4ZDkt-w1500._CB406219147_.jpg'/>
            </div>

        <div className = "home_row">
            <Product title = "CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home" 
            price = {880.00} 
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SL1500_.jpg"/>
            <Product title = "HyperX Cloud Stinger - Gaming Headset – Comfortable HyperX Signature Memory Foam, Swivel to Mute Noise-Cancellation Microphone, Compatible with PC, Xbox One, PS4, Nintendo Switch, and Mobile Devices"
            price = {49.99}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/51kxIEmO%2BZL._AC_SX679_.jpg"/>

            </div>

        <div className = "home_row">
            <Product
                            
            title = "Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms..."
            image = "https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
            rating = {5}
            price = {1199.99}
            />
            
            </div>

        <div className="home_row">
            <Product
            title = "Digital Decor Set of Two (2) Premium Gold Hotel Pillows for Sleeping, Down Alternative, Hypoallergenic, Dust Mite Resistant, Plus 2 Free Pillowcases"
            image = "https://images-na.ssl-images-amazon.com/images/I/51y5AzETmPL._AC_SL1500_.jpg"
            rating= {5}
            price = {24.99}/>
            
            <Product
            title = "VClife Cotton Queen Bedding Sets Duvet Cover Sets Modern Black White Arrow Herringbone Geometric Pattern Comforter Quilt Cover Queen 1 Duvet Cover 2 Pillowcases Hotel Quality Lightweight Durable"
            image = "https://images-na.ssl-images-amazon.com/images/I/61p0UQhQd5L._AC_SL1000_.jpg"
            rating = {5}
            price = {58.99}            
            />


            <Product
            title = "LuxClub 6 PC Sheet Set Bamboo Sheets Deep Pockets 18 Eco Friendly Wrinkle Free Sheets Hypoallergenic Anti-Bacteria Machine Washable Hotel Bedding Silky Soft - Eggplant Full"
            image = "https://images-na.ssl-images-amazon.com/images/I/71jm1kO2DTL._AC_SL1500_.jpg"
            rating = {5}
            price = {29.99}
            />
            </div>   
        </div>
    )
}

export default Home

import React from 'react'
import "./Home.css"
import banner from '../img/computeracc.jpg'
import Product from '../Product/Product'
import bike from '../img/hp.jpg'
import Roku from '../img/Roku.jpg'
import Cameralens from '../img/cameralens.jpg'
import lifestraw from '../img/monitor.jpg'
import keyboard from '../img/keyboard.jpg'
import pendrive from '../img/pendrive.jpg'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home-image" src={banner} alt="banner" />
                <div className="home-row">
                    <Product
                     title="Black Noir original HP Ink"
                     image={bike}
                     price={19.99} 
                     rating={5}
                    />
                     <Product
                     title="Roku Express HDMI Cable"
                     image={Roku}
                     price={17.99} 
                     rating={4}
                    />
                    {/* <Product /> */}
                    
                </div>
                <div className="home-row">
                    
                <Product
                     title="Canon Cameralens"
                     image={Cameralens}
                     price={10.99} 
                     rating={2}
                    />
                <Product
                     title="HP monitor"
                     image={lifestraw}
                     price={17.99} 
                     rating={4}
                    />
                 <Product
                     title="Ledger drive"
                     image={pendrive}
                     price={10.99} 
                     rating={2}
                    />
                    {/* <Product />
                    <Product />
                    <Product /> */}
                </div>
                <div className="home-row">
                    {/* <Product /> */}
                    <Product
                     title="logtech wireless Keyboard"
                     image={ keyboard }
                     price='14.99' 
                     rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import './Header.css'
import imgcool from '../img/amazon2.jpg'
import SearchIcon from '../img/search.png';
import Shopping_cart from '../img/shoping-cart.png'
import { Link, withRouter } from 'react-router-dom';
import { useStateValue } from '../stateprovider/Stateprovider'
function Header() {
    const [{ basket ,user }, dispatch] = useStateValue(); // (,dispatch)
    return (

        <div className='header'>
            {/* <img src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/> */}
            <Link to="/">
                <img className="header-logo" src={imgcool} alt="amazon"></img>
            </Link>
            <div className="header-search">
                <input
                    className="header-searchInput"
                    type="text" />
                <img className="header-searchIcon" src={SearchIcon} alt="search"></img>
            </div>


            <div className="header-nav">
            <Link to='/Login' >
                <div className="header-option">
                    {/** user?.email || "Guest"  */}
                        <span
                            className="header-optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
                        <span
                            className="header-optionLineTwo">Sign in </span>
                </div>
              </Link> 
                <div className="header-option">
                    <span
                        className="header-optionLineOne">Returns </span>
                    <span
                        className="header-optionLineTwo">& Orders </span>
                </div>

                <div className="header-option">
                    <span
                        className="header-optionLineOne">Your </span>
                    <span
                        className="header-optionLineTwo">Prime </span>
                </div>
                <Link to="/checkout">
                    <div className="header-optionBasket">
                        <img className="basket" src={Shopping_cart} alt="shoppingcart"></img>

                        {/* number of product added in cart  */}
                        <span
                            className="header-optionLineTwo header-basketCount" >{basket?.length} </span>
                    </div>
                </Link>
            </div>
        </div>

    )

}

export default withRouter(Header)

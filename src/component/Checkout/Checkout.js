import React from 'react'
import "./Checkout.css"
import checkoutads from '../img/checkoutads1.jpg'
import Subtotal from '../Subtotal/Subtotal.js'
import { useStateValue } from '../stateprovider/Stateprovider'
import Checkoutproducts from '../Checkoutproducts/Checkoutproducts'
function Checkout() {
    const [ {basket} , dispatch ] =useStateValue(); //(,dispatch)
    return (
        <div className="checkout">
            <div className="checkout-left">
              <img
                  className="checkout_ad"
                  src={checkoutads}
                  alt="checkoutads"
                  />
                  <div>
                      <h2 className="checkout_title">Your shopping basket</h2>
                      
                      {/**<checkout products> */}
                      {basket.map(item=>(
                          <Checkoutproducts
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          />
                        
                      ))}
                  </div>
               </div>
               <div className="checkout_right">
                   <b>the subtotal will go here</b>
                   <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

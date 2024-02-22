import React from 'react'
import { useStateValue } from '../stateprovider/Stateprovider'
import './Checkoutproducts.css'
function Checkoutproducts({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue()
    const removefrombasket = () =>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={`product + $(_id)`}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                 <p className="checkoutProduct__price">
                     <small>$</small>
                     <strong>{price}</strong>
                 </p>
                 <div className='checkoutProduct__rating'>
                     {
                         Array(rating)
                            .fill()
                            .map((_ , i)=>(
                                <p>⭐</p>
                            ))
                     }
                     <button onClick={removefrombasket}>Removed from Basket</button>
                     
                 </div>
            </div>
            
        </div>
    )
}

export default Checkoutproducts

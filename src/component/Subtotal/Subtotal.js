import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateprovider/Stateprovider';
import {getBasketTotal} from '../stateprovider/reducer'
function Subtotal() {
    const [ {basket} , dispatch ] = useStateValue(); 
    return (
        <div className="subtotal">
            <CurrencyFormat
           renderText={(value) => (
                <>
                {/**part of homework */}

                <p> ({basket?.length} subtotal items) : <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>
                    this order contains a gift
                    </small>
                </>
            )}
            decimalscale={2}
            value={getBasketTotal(basket)} //part of homework using selector
            displayType={"text"}
            thousandseparator={true}
            prefix={"$"} 
            />
      
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal

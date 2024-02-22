
import React from 'react'
import { useStateValue } from '../stateprovider/Stateprovider'
import './Product.css'
function Product({id,title,image,price,rating}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <small  
                    className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </small>

                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_ , i)=>(
                        <p className="star">⭐</p>))
                    
                    }
                  {/**🌟 */}

                </div>
            </div>
           <br/>
           {/* add to basket */}
            <img src={image} alt="product" />
            
            <button onClick={addToBasket}>Add to Basket</button> {/*onClick={addToBasket} */} 
            
        </div>
    )
}

export default Product

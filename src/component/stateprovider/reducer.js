
//how we are able to dispatch the datalayer
//this help to play with datalayer
//?. is optional chaining
//datalayer
//selector this is really highly use


export const InitialState = {
  basket: [],
  user: null
}

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount , 0);



const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) =>
        basketItem.id !== action)

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant't remove product(id:$(action.id) as it is not in basket)`)
      }
      return {
        ...state,
        basket: newBasket
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}
export default reducer;
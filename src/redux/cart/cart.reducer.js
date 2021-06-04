import cartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_CART_STATE = {
    showCart : false,
    cartItems: [],
}

const cartReducer = (state = INITIAL_CART_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                showCart: !state.showCart,
            }

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;

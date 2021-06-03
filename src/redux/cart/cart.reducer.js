import cartActionTypes from './cart.types';

const INITIAL_CART_STATE = {
    showCart : false
}

const cartReducer = (state = INITIAL_CART_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                showCart: !state.showCart,
            }
        default:
            return state;
    }
};

export default cartReducer;

import { createSelector } from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector (
    [selectCart],
    cart => cart.cartItems,
);

export const selectCartShow = createSelector (
    [selectCart],
    cart => cart.showCart,
);

export const selectCartItemsTotal = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, item) => accumulator + item.quantity ,0)
);
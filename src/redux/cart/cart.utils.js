export const addItemToCart = (cartItems, newItem) => {

    const existingItem = cartItems.find(item => item.id === newItem.id)

    if (existingItem) {
        return cartItems.map(item => {
            if (item.id === newItem.id) {
                item.quantity += 1;
            }
            return item;
        });
    }

    newItem.quantity = 1;
    return [...cartItems, newItem];
}
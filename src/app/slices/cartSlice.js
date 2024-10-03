import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    date: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const existingProduct = state.products.find(item => item.productId === action.payload.productId);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity; // Increment quantity
            } else {
                // If the product doesn't exist, add it to the cart
                state.products.push(action.payload);
            }
            state.date = new Date().toISOString(); // Update date
        },
    }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state over here
            state.item.push(action.payload)
        },
        removeItem: (state, action) => {
            state.item.pop()
        },
        clearCart: (state, action) => {
            state.item.length = 0; //make cart empty
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
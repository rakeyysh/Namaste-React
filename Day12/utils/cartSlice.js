import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state,action) =>{
            // mutating the state over here
            // Redux Toolkit uses immer Behind the scene
            state.items.push(action.payload);
        },
        removeItem :(state) =>{
            state.items.pop();
        },

        // originalState = ["pizza"]
        clearCart : (state) =>{
            // Redux-Toolkit --> either Mutate the existing state or return a new state
            state.items.length = 0;  // []

            //  state = [] --> don't do like this it creates a local object

            // return {items:[]}  --> this new [] will be replaced inside original state = {items:[]}
        }
    }
});

console.log(cartSlice);
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
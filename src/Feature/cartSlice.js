import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    total: 0,
    ammount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState
});


export default cartSlice.reducer;
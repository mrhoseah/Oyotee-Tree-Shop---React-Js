import { createSlice } from "@reduxjs/toolkit";

const priceFilterSlice = createSlice({
    "name":"priceFilter",
    initialState:0,
    reducers:{
        setPrice:(state,{payload})=>{
            const {price} = payload;
            state=price
        }
    }
})

export const {setPrice} = priceFilterSlice.actions
export default priceFilterSlice.reducer
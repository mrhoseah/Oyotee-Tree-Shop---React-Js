import { createSlice} from '@reduxjs/toolkit';

const initialState={
    cartDrawerOpen:false
}
const uiSlice =createSlice({
    name:'ui',
    initialState,
    reducers:{
        toggled:(state)=>{
            state.cartDrawerOpen=!state.cartDrawerOpen
        },
    },

})
export const {toggle} = uiSlice.actions
export default uiSlice.reducer
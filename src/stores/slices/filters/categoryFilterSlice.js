import { createSlice } from "@reduxjs/toolkit";

const categoryFilterSlice = createSlice({
    "name":"categoryFilter",
    initialState:[],
    reducers:{
        selectedCategory:(state,{payload})=>{
            const {id,name} = payload;
            //check if category is already selected
            const catExists =  state.find((cat)=>cat.id === id)
            if(catExists){
                return
            }else{
                return state.push({id,name})
            }
        }
    }
})

export const {selectedCategory} = categoryFilterSlice.actions
export default categoryFilterSlice.reducer
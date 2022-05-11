import { createSlice} from '@reduxjs/toolkit';

const productSlice =createSlice({
    name:'products',
    initialState:{
        productInfo: {
            id:'',
            name:'',
            quantity: 0,
            description:'',
            category_id:'',
            rating:0,
            likes:0,
            loading:false,
            error:null
        }
    },
    reducers:{
        added:(state,action)=>{
            state.productInfo=(state)=>{
                state.id=Math.floor(Math.random() * 100)
                state.name=action.payload.name
                state.description=action.payload.description
                state.quantity=action.payload.quantity
            }
        },
        rated:(state,action)=>{
            state.productInfo.rating +=action.payload
        },
        unrated:(state,action)=>{
            state.productInfo.likes-=action.payload
        },
        liked:(state,action)=>{
            state.productInfo.likes +=action.payload
        },
        unliked:(state,action)=>{
            state.productInfo.rating-=action.payload
        },
    },

})
export const {rated,unrated,liked,unliked,added} = productSlice.actions
export default productSlice.reducer
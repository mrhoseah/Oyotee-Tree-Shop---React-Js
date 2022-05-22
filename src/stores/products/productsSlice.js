import { createSlice} from '@reduxjs/toolkit';

const productSlice =createSlice({
    name:'products',
    initialState:{
        productInfo: {
            id:'',
            name:'',
            quantity: 0,
            description:'',
            otherDetails:'',
            image:'',
            category:{},
            ratings:0,
            likes:0,
        }
    },
    reducers:{
        added:(state,action)=>{
            state.productInfo=(state)=>{
                state.id=action.payload.id
                state.name=action.payload.name,
                state.quantity=action.payload.quantity,
                state.description=action.payload.description,
                state.otherDetails=action.payload.otherDetails,
                state.image=action.payload.image,
                state.category=action.category,
                state.ratingsCount=action.payload.ratingsCount,
                state.reviews=action.payload.reviews,
                state.rating=action.payload.rating,
                state.likes=action.payload.like
            }
        },
        rated:(state,action)=>{
            state.productInfo[action,payload].ratings =action.payload.rating
        },
        likeToggled:(state,action)=>{
            state.productInfo.likes =action.payload.likes
        }
    },

})
export const {rated,likeToggled,added} = productSlice.actions
export default productSlice.reducer
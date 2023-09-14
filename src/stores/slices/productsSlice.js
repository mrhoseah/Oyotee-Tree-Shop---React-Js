import { createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    list: []
}
const productSlice =createSlice({
    name:'products',
    initialState,
    reducers:{
        startFetched:(state)=>{
            state.loading=true
        },
        saved:(state,action)=>{
            const  {payload} = action.payload;
            state.loading= false;
            state.list={
                id:payload.id,
                name:payload.name,
                quantity: payload.quantity,
                description:payload.description,
                otherDetails:payload.otherDetails,
                image:payload.image,
                category:{
                    id:payload.category.id,
                    name:payload.category.name
                },
                ratings:payload._count.ratings,
                ratingCount:payload._avg.ratings,
                likes:payload._count.likes,
            }
        },
        rated:(state,action)=>{
            state.list[action.payload].ratings =action.payload.rating
        },
        likeToggled:(state,action)=>{
            state.list[action.payload].likes =action.payload.likes
        }
    },

})
export const {rated,likeToggled,added} = productSlice.actions
export default productSlice.reducer
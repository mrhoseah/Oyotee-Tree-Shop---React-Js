import { createSlice} from '@reduxjs/toolkit';

const cartSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addedToCart:(state,{payload})=>{
            const {id} = payload
            const itemExists = state.find((item)=>item.id === id)
            if (itemExists) {
                return  state.map((item)=>{
                        if(item.id=== id){
                        return {
                            ...item,
                                quantity:item.quantity+1
                        }
                    }
                    return item
                })
                  
              } else {
                const itemData ={
                    id:payload.id,
                    name:payload.name,
                    quantity:1,
                    price:payload.price,
                    image_url:payload.image_url,
                    added:true
                }
                state.push(itemData)
              }
        },
        quantityIncreased:(state,{payload})=>{
           return state.map((item)=>{
               if(item.id===payload){
                   return {
                       ...item,
                       quantity:item.quantity+1
                   }
               }
           })
        },
        quantityDecreased:(state,{payload})=>{
            return state.map((item)=>{
                if(item.id===payload){
                    return {
                        ...item,
                        quantity: item.quantity >1?item.quantity-1:1
                    }
                }
            })
        },
        removedFromCart:(state,action)=>{
            return state.filter(item=>{
                    return item.id!=action.payload.id
                })
        },
        deleteCart: (state, action) => {
            if (Number.isNaN(action.payload)) return;
            state = [];
          },
    },

})
export const {addedToCart,removedFromCart,quantityIncreased,quantityDecreased,deleteCart} = cartSlice.actions
export default cartSlice.reducer
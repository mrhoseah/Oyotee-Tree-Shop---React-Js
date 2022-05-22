import { createSlice} from '@reduxjs/toolkit';

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        id:'',
        itemCount:0,
        name:'',
        quantity: 0,
        price:0.00,
        image:'',
        added: false
    },
    reducers:{
        addedToCart:(state,action)=>{
            state=(state)=>{
                if (state.id === action.payload.id) {
                    state.quantity +=1;
                    state.itemCount +=1;
                  
              } else {
                state.id=action.payload.id,
                state.itemCount=1,
                state.name=action.payload.name
                state.quantity=action.payload.quantity
                state.price=action.payload.price
                state.image=action.payload.image
                state.added=true
              }
        }},
        quantityIncreased:(state,action)=>{
            let quantity = state[action.payload].quantity;
            if(quantity>1){
                state.cartCount++;
                state[action.payload].quantity++;
            }
        },
        quantityDecreased:(state,action)=>{
            let quantity = state[action.payload].quantity;
            if(quantity>1){
                state.cartCount--;
                state[action.payload].quantity--;
            }
        },
        removedFromCart:(state,action)=>{
            let quantity_ = state.cartInfo[action.payload].quantity;
            return{
                ...state,
                cartCount:state.cartCount - quantity_,
                items:state.filter(item=>{
                    return item.id!=state[action.payload].id
                })
               
            }
        },
        deleteAllCart: (state, action) => {
            if (Number.isNaN(action.payload)) return;
            state = [];
          },
    },

})
const getItemIndex = (state, idToFind) => {
    const ids = state.map(item => item.id);
    return ids.indexOf(idToFind);
}
export const {addedToCart,removedFromCart,quantityIncreased,quantityDecreased} = cartSlice.actions
export default cartSlice.reducer
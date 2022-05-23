import { createSlice} from '@reduxjs/toolkit';

const userSlice =createSlice({
    name:'user',
    initialState:{
        token:null,
        userInfo:null,
        loading:false,
        error:null
    },
    reducers:{
        isLoading:(state)=>{
            state.loading=true;
        },
        login:(state,action)=>{
            state.loading=true;
            state.token=action.payload.token
            state.userInfo=action.payload.user
        },
        logout:(state)=>{
            state.token=null
            state.userInfo=null
        },
    },

})
export const {login,logout,isLoading} = userSlice.actions
export default userSlice.reducer
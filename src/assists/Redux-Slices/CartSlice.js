import { createSlice } from "@reduxjs/toolkit";


const initialState =()=>{
    value: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        changevalue:(state, action)=>{
          
            state.value.push(action.payload);
        }
    }
});

export const {changevalue} = cartSlice.actions

export default cartSlice.reducer
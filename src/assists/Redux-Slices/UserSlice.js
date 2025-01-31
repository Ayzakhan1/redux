import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 'John Wick'
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        updatename: (state, action)=>{
          
            state.value = action.payload;
            console.log(state.value, action.payload)
        }
        }
});
 
export const {updatename} = userSlice.actions 

export default userSlice.reducer
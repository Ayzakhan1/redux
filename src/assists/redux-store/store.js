import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Redux-Slices/UserSlice";
import  cartSlice  from "../Redux-Slices/CartSlice";

export const store = configureStore({

    reducer:{
        user : userSlice,
        cart : cartSlice
    }

});
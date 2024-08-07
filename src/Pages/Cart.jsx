import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changevalue } from '../assists/Redux-Slices/CartSlice';

const Cart = () => {
    const cart = useSelector((state)=> state.cart.value);
    const dispath = useDispatch();
    
    console.log(cart)
    const newObj ={
        name: 'product',
        prive: '4325'
        
    }
  return (
    <div>
      <button onClick={()=>{dispath(changevalue(newObj))}}>add Cart</button>
    </div>
  )
}

export default Cart

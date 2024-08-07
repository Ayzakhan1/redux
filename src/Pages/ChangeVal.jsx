import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updatename } from '../assists/Redux-Slices/UserSlice'

const ChangeVal = () => {
    const user = useSelector((state)=> state.user.vlaue)
    const dispatch = useDispatch();

  return (
    <div>
      <input type='text'onChange={(e)=>{dispatch(updatename(e.target.value))}} value={user}/>
      <Link to=''>Home</Link>
    </div>
  )
}

export default ChangeVal

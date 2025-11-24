import React from 'react'
import {Outlet,Navigate}from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function ProtectedRoute() {
    const user = useSelector((state)=>state.user?.user)
    console.log("user from protected route",user);
  return (
    user? <Outlet/> :<Navigate to='/user/login'/>
  )
}

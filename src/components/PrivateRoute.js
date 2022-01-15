import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoute = () => {
  const {isAuth} = useSelector(state=>state.user)
  return isAuth ? <Outlet/> : <Navigate to='/signin' />
}

export default PrivateRoute

import './navbar.css'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../slices/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const {isAuth,userInfo} = useSelector(state=>state.user)
  return (
    <div className="navbar">
      <Link to='/'>home</Link>|
      {!isAuth 
      ? <>
      <Link to='/signin'>Signin</Link>|
      <Link to='/signup'>Signup</Link>|
      </> 
      : <><p style={{cursor: 'pointer'}} onClick={()=>dispatch(logout())}>Logout</p>|<Link to='/profile'>{userInfo.username}</Link>|<Link to='/posts'>Posts</Link>|</>}
      
      <Link to='/contactus'>contact us</Link>
    </div>
  )
}

export default Navbar

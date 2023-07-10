import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { Flex, Input } from '@chakra-ui/react' 
import { useNavigate } from 'react-router-dom'
// import {HiOutlineShoppingBag} from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthContext'
import { useContext } from 'react'
import logo from './logo.png'
import bag from './bag.png'





const Navbar = () => {

  const navigate =  useNavigate()
  const {isAuth, SetisAuth, AddtoCart} = useContext(AuthContext)

  console.log(AddtoCart.length)

  const HandleChange = (e)=>{
    if(e.target.value === "LoginAsUser"){
      navigate('/signup')
    }
    else if(e.target.value === "LoginAsAdmin"){      
      navigate('/admin')
    }
  }

  const HandleLogout = ()=>{
    SetisAuth(false)
  }
   
  return (
    <Flex justifyContent={'space-evenly'} style={{fontSize:"medium", fontWeight:"bold", padding:"10px", marginBottom:"50px", marginTop:"10px"}}>
        <RouterLink key='/'  to='/'><div style={{width:"70px", height:"70px"}}><img style={{width:"100%", height:"100%"}} src={logo} alt="img" /></div></RouterLink>
        <RouterLink to='/kurta'>WOMEN</RouterLink>
        <RouterLink to='/men'>MEN</RouterLink>
        <RouterLink  to='/kids'>KIDS</RouterLink>
        <RouterLink  to='/homeandliving'>HOME AND LIVING</RouterLink>
        <RouterLink  to='Beauty'>BEAUTY</RouterLink>
        <RouterLink  to='/studio'>STUDIO</RouterLink>
        <Input placeholder='Search for products, brands and more' size='xxs' width={"200px"} height={"5px"} borderRadius padding={"10px"}/>
        <select  onChange={(e)=>HandleChange(e)}>
          <option value="Profile">Profile</option>
          <option value="LoginAsUser">SignUp/Login As User</option>
          <option value="LoginAsAdmin">Login As Admin</option>
        </select>
        <RouterLink  to='/wishlist'>Wishlist</RouterLink>
        <RouterLink to='/bag'><p style={{display:"inline", color:"#EC407A"}}>{AddtoCart.length}</p> <img style={{height:"30px", width:"30px", display:"inline"}} src={bag} alt="bag" /></RouterLink>  
        {(isAuth)?<button onClick={()=>HandleLogout()} style={{backgroundColor:"#EC407A", color:"white",  fontWeight:"bold", borderRadius:"2px"}}>LOGOUT</button>:""}      
    </Flex>
  )
}

export default Navbar


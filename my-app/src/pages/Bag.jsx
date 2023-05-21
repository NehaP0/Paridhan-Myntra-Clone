import React from 'react'
import { useState, useContext } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate  } from 'react-router-dom'


const Bag = () => {
  const{isAuth, AddtoCart, SetAddtoCart} = useContext(AuthContext)
  const navigate = useNavigate()


const HandleDelete=(id)=>{
  console.log(id)
  
  let newarr=(AddtoCart.filter(function(element,i){
    if(element.id==id){
      return false;
    }else{
      return true;
    }
  }))
  SetAddtoCart(newarr)
}

const AddPrice=()=>{
  let sum = 0
 AddtoCart.forEach(element => sum+=element.price )
 return sum
}

const CheckifIsAuth=()=>{
  if(isAuth){
    alert('Order Placed')
  }
  if(!isAuth){
    navigate('/login')
  }
}


//console.log(AddtoCart)
  return (
    AddtoCart.length==0?<div style={{width:"50%", margin:"auto", height:"", padding:"100px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", borderRadius:"20px"}}><h1 style={{textAlign:"center", fontSize:"40px"}}>Your cart is Empty 🙁</h1></div>:
    <div style={{display:"flex", width:"80%", margin:"auto", textAlign:"left", fontSize:"15px"}}>
      <div style={{width:"50%"}}>
      {AddtoCart.map((item)=><div key={item.id} style={{margin:"5px", display:"flex", height:"300px", width:"100%", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", padding:"5px"}}>
        <div style={{height:"100%", width:"50%"}}><img style={{height:"100%", width:"100%"}} src={item.image} alt="img" /></div>
        <div style={{height:"100%", width:"50%", marginLeft:"15px"}}><p style={{fontWeight:"bold"}}>{item.name}</p><p >{item.material}</p><p>Rs {item.price}</p><p>Qty: 1</p><button onClick={()=>HandleDelete(item.id)} style={{backgroundColor:"#EC407A",color:"white", padding:"5px", fontSize:"13px", fontWeight:"bold", margin:"1px", borderRadius:"5px"}}>DELETE</button></div>
       </div>)}
      </div>
      <div style={{width:"50%", margin:"auto"}}>
        <div style={{width:"200px", height:"300px", margin:"auto", padding:"5px"}}>
        <p style={{fontSize:"18px", marginBottom:"5px"}}>Total Items: {AddtoCart.length}</p>
        <p style={{fontSize:"18px", marginBottom:"5px"}}>Total Price: Rs {AddPrice()}</p>
        <button onClick={()=>CheckifIsAuth()} style={{backgroundColor:"#EC407A",color:"white", padding:"10px", fontSize:"13px", fontWeight:"bold", margin:"1px", borderRadius:"5px"}}>PLACE ORDER</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Bag


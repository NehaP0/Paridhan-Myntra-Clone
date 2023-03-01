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


console.log(AddtoCart)
  return (
    <div style={{display:"flex", width:"80%", margin:"auto", textAlign:"left", fontSize:"13px"}}>
      <div style={{width:"50%"}}>
      {AddtoCart.map((item)=><div key={item.id} style={{margin:"5px", display:"flex", height:"200px", width:"100%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding:"5px"}}>
        <div style={{height:"100%", width:"50%"}}><img style={{height:"100%", width:"100%"}} src={item.image} alt="img" /></div>
        <div style={{height:"100%", width:"50%"}}><p style={{fontWeight:"bold"}}>{item.name}</p><p>{item.material}</p><p>Rs {item.price}</p><p>Qty: 1</p><button onClick={()=>HandleDelete(item.id)} style={{backgroundColor:"#EC407A",color:"white", padding:"5px", fontSize:"9px", fontWeight:"bold", margin:"1px"}}>DELETE</button></div>
       </div>)}
      </div>
      <div style={{width:"50%"}}>
        <div style={{width:"200px", height:"100px", margin:"auto", padding:"5px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <p>Total Items: {AddtoCart.length}</p>
        <p>Total Price: Rs {AddPrice()}</p>
        <button onClick={()=>CheckifIsAuth()} style={{backgroundColor:"#EC407A",color:"white", padding:"5px", fontSize:"9px", fontWeight:"bold", margin:"1px"}}>PLACE ORDER</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Bag


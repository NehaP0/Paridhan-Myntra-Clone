import React from 'react'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../Contexts/AuthContext'

const AdminPage = () => {

    const AdminNeededemail="admin"
    const AdminNeededpw="admin"

    const {Kurtas, SetKurtas} = useContext(AuthContext)
    const [AdminIsAuth, SetAdminIsAuth] = useState(false)
    const [AdminEnteredMail, SetAdminEnteredMail] = useState("")
    const [AdminEnteredPw, SetAdminEnteredPw] = useState("") 
    
    
    const [NewKurtaDetails, SetNewKurtaDeatils] = useState({
        id:0,
        image:"",
        rating:0,
        name:"",
        material:"",
        price:0,
        discount:0
      })

      const HandleChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
      
        SetNewKurtaDeatils({...NewKurtaDetails, [name]:value})
      }

 // {"id": 1,"image":"","rating":4.2,"name":"SINGNI","material":"Women Embroidered Kurta Set", "price":1499, "discount":70},
     const FetchData = ()=>{
        axios.get('https://indigo-crane-robe.cyclic.app/kurtaData')
        .then((res)=>SetKurtas(res.data))
        .catch((err)=>console.log(err))
        //.finally(()=>SetLoading(false))
    }    

    useEffect(()=>{
        FetchData()
    },[FetchData])


   const DeleteKurta = (id)=>{
    axios({
        method:"delete",
        url: `https://indigo-crane-robe.cyclic.app/kurtaData/${id}`
      })
      .then(()=>FetchData())
      .catch((err)=>console.log(err))
   }


    const HandleSubmit = (e)=>{
        e.preventDefault()
        //console.log(AdminEnteredMail, AdminEnteredPw)
        if(AdminEnteredMail===AdminNeededemail && AdminEnteredPw===AdminNeededpw){
            SetAdminIsAuth(true)
            alert("Login Successfull")
        }
        else{
            alert("Inavlid Credentials")
        }
    }

    

const PostProdRequest = ()=>{
    console.log("works")
    axios({
      method:"post",
      url:'https://indigo-crane-robe.cyclic.app/kurtaData',
      data: NewKurtaDetails
    })
    .then(()=>FetchData())
    .catch((err)=>console.log(err))

}

    const AddProduct=(e)=>{
        e.preventDefault()
        PostProdRequest()
        
    }

  

  return (
    <div style={{margin:"auto"}}>
        {(!AdminIsAuth)?<form onSubmit={(e)=>HandleSubmit(e)}>
            <input type="text" placeholder='Enter email' onChange={(e)=>SetAdminEnteredMail(e.target.value)}/>
            <input type="password" placeholder='Enter password' onChange={(e)=>SetAdminEnteredPw(e.target.value)}/>
            <button>Login</button>
        </form>:<div style={{fontSize:"10px"}}>
            <div style={{display:"flex"}}>
            <div>
            <table>
            <thead><tr><th>ID</th><th>Rating</th><th>Name</th><th>Material</th><th>Rating</th><th>Price</th><th>Discount</th></tr></thead>
            <tbody>{Kurtas.map((item)=><tr key={item.id}><td>{item.id}</td><td>{item.rating}</td><td>{item.name}</td><td>{item.material}</td><td>{item.rating}</td><td>{item.price}</td><td>{item.discount}</td><td><button onClick={()=>DeleteKurta(item.id)}>DELETE</button> </td></tr>)}</tbody>
            </table>
            </div>

            
            <div style={{margin:"100px"}}>  
            <h3>ADD PRODUCT</h3>  
            <form onSubmit={(e)=>AddProduct(e)} >
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="number" name="id" placeholder='Enter id' onChange={HandleChange}/><br />
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="text" name="image" placeholder='Enter image url' onChange={HandleChange}/><br />
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="number" name="rating" placeholder='Enter rating' onChange={HandleChange}/><br />
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="text" name="name" placeholder='Enter name' onChange={HandleChange}/><br />
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="text" name="material" placeholder='Enter material' onChange={HandleChange}/><br />
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="number" name="price" placeholder='Enter Price' onChange={HandleChange}/><br />
                <input style={{textAlign:"center", border:"1px solid grey", margin:"2px"}} type="number" name="discount" placeholder='Enter discount' onChange={HandleChange}/><br />
                <button style={{backgroundColor:"#EC407A", color:"white", padding:"2px", fontWeight:"bold", borderRadius:"2px"}}>Add</button>
            </form>
            </div>
            </div>
            <button style={{backgroundColor:"#EC407A", color:"white", padding:"2px", fontWeight:"bold", borderRadius:"2px"}} onClick={()=>SetAdminIsAuth(false)}>LOGOUT</button>
            </div>}
        
    </div>
  )
}

export default AdminPage

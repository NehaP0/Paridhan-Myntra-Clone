import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'


const OneKurta = () => {

    const[dataObj, SetdataObj] = useState({})
    let {id} = useParams() 
    const{AddtoCart, SetAddtoCart, isAuth} = useContext(AuthContext)
   

    useEffect(()=>{
        axios.get(`https://indigo-crane-robe.cyclic.app/kurtaData/${id}`)
        .then((res)=>SetdataObj(res.data))
        .catch((err)=>console.log(err))
    },[id])

    const FuncPlaceOrder=(id)=>{
        if(isAuth){
            let status = 0
            for(let i=0; i<AddtoCart.length; i++){
                //console.log(AddtoCart[i].id)
                if(AddtoCart[i].id===id){
                    status = 1 
                    alert('Product already in bag')              
                    break;
                }
            }
             if(status===0){
                    SetAddtoCart([...AddtoCart, dataObj])
                    alert('Product added to bag')
            }
        }
        else{
            alert("Please Login first.")
        }
        
        // SetAddtoCart([...AddtoCart, dataObj])
        // alert('Product added to bag')
        // console.log(isAuth)
        // if(!isAuth){
        //     <Navigate to='/login'/>
        // }
    }
    

  return (
    <div>
    <div style={{display:"flex", width:"80%", margin:"auto"}}>
        <div style={{width:"60%"}}>
            <img src={dataObj.image} alt="data" style={{width:"90%"}}/>
        </div>
        <div style={{width:"40%", fontSize:"15px", textAlign:"left"}}>
            <h3 style={{fontSize:"18px", fontWeight:"bold"}}>{dataObj.name}</h3>
            <p style={{fontSize:"15px", color:"grey"}}>{dataObj.material}</p>
            <br />
            <div style={{border:"1px solid lightgrey", width:"50%"}}>{dataObj.rating} | 419 Ratings</div>
            <br />
            <hr />
            <h3 style={{display:"inline",fontSize:"13px", fontWeight:"bold"}}>Rs {dataObj.price} </h3> <h3 style={{display:"inline", color:"grey",fontSize:"13px"}}>MRP</h3> <h3 style={{textDecoration: "line-through", display:"inline"}}>Rs4999</h3> <h3 style={{display:"inline", color:"#FF5722", fontWeight:"bold"}}>({dataObj.discount}% OFF)</h3>
            <br />
            <p style={{color:"darkgreen", fontWeight:"bold"}}>inclusive of all taxes</p> 
            <br />
            <hr />

            <p style={{display:"inline", fontWeight:"bold"}}>SELECT SIZE</p>   <p style={{display:"inline", color:"#EC407A", fontSize:"10px"}}>SIZE CHART </p>
            <div style={{display:"flex", margin:"auto", justifyContent:"space-between",  padding:"5px"}}>
                <button style={{border:"1px solid grey", borderRadius:"100%", width:"30px", height:"30px"}}>S</button>
                <button style={{border:"1px solid grey", borderRadius:"100%", width:"30px", height:"30px"}}>M</button>
                <button style={{border:"1px solid grey", borderRadius:"100%", width:"30px", height:"30px"}}>L</button>
                <button style={{border:"1px solid grey", borderRadius:"100%", width:"30px", height:"30px"}}>XL</button>
                <button style={{border:"1px solid grey", borderRadius:"100%", width:"30px", height:"30px"}}>XXL</button>
                <button style={{border:"1px solid grey", borderRadius:"100%", width:"30px", height:"30px"}}>3XL</button>
            </div>
            <div style={{display:"flex"}}>
                <button onClick={()=>FuncPlaceOrder(dataObj.id)} style={{backgroundColor:"#EC407A", color:"white", margin:"2px", padding:"2px" }}>ADD TO BAG</button>
                <button style={{border:"1px solid grey",margin:"2px", padding:"2px" }}>WISHLIST</button>
            </div>
            <hr />
            <br />
            <p style={{fontWeight:"bold"}}>DELIVERY OPTIONS </p>
            <div style={{border:"1px solid grey"}}><input type="number" placeholder='Enter pincode'/><button style={{color:"#EC407A"}}>Check</button></div>
            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            <br />
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <br />
            <p style={{fontWeight:"bold"}}>BEST OFFERS</p>
            <p style={{display:"inline"}}>Best Price:</p><p style={{display:"inline", color:"#FF5722"}}> Rs. 1234</p>
            <ul>
                <li>Applicable on: Orders above Rs. 1699 (only on first purchase)</li>
                <li>Coupon code: MYNTRA300</li>
                <li>Coupon Discount: Rs. 265 off (check cart for final savings)</li>
            </ul>
            <p style={{color:"#EC407A"}}>View Eligible Products</p>
            <hr />
            <br />
            <p style={{fontWeight:"bold"}}>PRODUCT DETAILS </p>
            <p>Purple embroidered Kurta with Trousers with dupatta</p>
            <br />

            <p style={{fontWeight:"bold"}}>Kurta design:</p>
            <p>Ethnic motifs embroidered</p>
            <p>Anarkali shape</p>
            <p>Regular style</p>
            <p>Round neck, three-quarter regular sleeves</p>
            <p>Mirror work detail</p>
            <p>Floor length length with flared hem</p>
            <p>Viscose rayon machine weave fabric</p>
            <br />

            <p style={{fontWeight:"bold"}}>Trousers design:</p>
            <p>Printed Trousers</p>
            <p>Elasticated waistband</p>
            <br />

            <p style={{fontWeight:"bold"}}>Size & Fit</p>
            <p>The model (height 5'8) is wearing a size S</p>
            <p>Dupatta Length 2.10 M, Width 0.80 M</p>
            <br />

            <p style={{fontWeight:"bold"}}>Material & Care</p>
            <p>Kurta material: Viscose Rayon</p>
            <p>Trouser material: Viscose Rayon</p>
            <p>Dupatta; Poly chiffon</p>
            <p>Dry Clean</p>
            <br />

            <p style={{fontWeight:"bold"}}>Specifications</p>
            <p style={{display:"inline"}}>Sleeve Length</p><p style={{display:"inline"}}>Top Shape</p>
            <p style={{display:"inline"}}>Three-Quarter Sleeves</p><p style={{display:"inline"}}>Anarkali</p>
            <hr />
            <p style={{display:"inline"}}>Top Type</p><p style={{display:"inline"}}>Bottom Type</p>
            <p style={{display:"inline"}}>Kurta</p><p style={{display:"inline"}}>Trousers</p>
            <hr />
            <p style={{display:"inline"}}>Dupatta</p><p style={{display:"inline"}}>Top Pattern</p>
            <p style={{display:"inline"}}>With Dupatta</p><p style={{display:"inline"}}>Embroidered</p>
            <hr />
            <p style={{display:"inline"}}>Top Design Styling</p><p style={{display:"inline"}}>Top Hemline</p>
            <p style={{display:"inline"}}>Regular</p><p style={{display:"inline"}}>Flared</p>
            <hr />
            <p style={{color:"#EC407A"}}>See More</p>
            <hr />

            <br />
            <p style={{fontWeight:"bold"}}>WHAT CUSTOMERS SAID</p>
            <p>I just loved the suit. I'm 5'8 and the length of kurta was 7-8 inches above my ankle. My skin is wheatish toned and this colour complimented it so well. I only had one problem with the suit, it's stich is poor and the pant was a lil bit tight on my hips, as the cloth material is non stretchable it might become an issue. Other than that the product is beautiful i loved it 💜 Go with white beads/stones juttis or heels and compliment it with a beautiful pair of jumkas that's all you have to do to rock any function 🤘</p>
<p style={{display:"inline", fontWeight:"bold", color:"grey"}}>Ritu Chaudhary</p><p style={{display:"inline",fontWeight:"bold", color:"grey"}}>| 18 Feb 2023</p>

        </div>
        
    </div>
    <br />
    <br />
    <Footer />
    </div>
  )
}

export default OneKurta

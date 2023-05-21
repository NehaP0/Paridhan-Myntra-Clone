import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios' 
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Home = () => {

  const Images= [
    { "id": 0, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif" },
    { "id": 1, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg" },
    { "id": 2, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg" },
    { "id": 3, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg" },
    { "id": 4, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" },
    { "id": 5, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" },
    { "id": 6, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" },
    { "id": 7, "imgLink": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" }    
  ]

  const[Picks, setPicks] = useState([])
  const[BagCategories1, setBagCategories1] = useState([])
  const[BagCategories2, setBagCategories2] = useState([])
  const[BagCategories3, setBagCategories3] = useState([])
  const [Loading, SetLoading] = useState(false)
  const [current, SetCurrent] = useState(0)
  const length = Images.length

  const prevSlide = ()=>{
    SetCurrent(current === 0 ? length-1 : current-1)
  }

const nextSlide = ()=>{
  SetCurrent(current === length-1 ? 0 : current+1)
}

const fetchPicks=()=>{
  SetLoading(true)
  axios.get('https://periwinkle-indri-wear.cyclic.app/topPicks')
  .then((res)=>setPicks(res.data))
  .catch((err)=>console.log(err))
  .finally(()=>SetLoading(false))
}

const fetchBags1=()=>{
  SetLoading(true)
  axios.get('https://periwinkle-indri-wear.cyclic.app/Bags1')
  .then((res)=>setBagCategories1(res.data))
  .catch((err)=>console.log(err))
  .finally(()=>SetLoading(false))
}

const fetchBags2=()=>{
  SetLoading(true)
  axios.get('https://periwinkle-indri-wear.cyclic.app/Bags2')
  .then((res)=>setBagCategories2(res.data))
  .catch((err)=>console.log(err))
  .finally(()=>SetLoading(false))
}

const fetchBags3=()=>{
  SetLoading(true)
  axios.get('https://periwinkle-indri-wear.cyclic.app/Bags3')
  .then((res)=>setBagCategories3(res.data))
  .catch((err)=>console.log(err))
  .finally(()=>SetLoading(false))
}

useEffect(()=>{
  fetchPicks()
  fetchBags1()
  fetchBags2()
  fetchBags3()
},[])



  return (
    <div>
      <section className='slider' style={{position:"relative", height:"60vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <FaArrowAltCircleLeft onClick={prevSlide} style={{position:"absolute", top:"50%", left:"32px", fontSize:"1rem", color:"grey", zIndex:"10", cursor:"pointer", userSelect:"none"}}/>
        <FaArrowAltCircleRight onClick={nextSlide} style={{position:"absolute", top:"50%", right:"32px", fontSize:"1rem", color:"grey", zIndex:"10", cursor:"pointer", userSelect:"none"}}/>
        {Images.map((item)=> {
          return(
            <div key = {item.id} >
              { item.id === current && (<img src={item.imgLink} />)}
            </div>
          )
        })}
      </section>

      <h3 style={{textAlign:"left", fontWeight:"bold", marginLeft:"15px", marginRight:"15px", marginTop:"30px",  marginBottom:"30px"}}>TOP PICKS</h3>
      <div style={{display:"flex"}}>
        {Picks.map((item)=>{return(Loading?<h2 key={item.id}>Loading...</h2>:<div key={item.id} ><img  src={item.image}/></div>)})}
      </div>

      <h3 style={{textAlign:"left", fontWeight:"bold", marginLeft:"15px", marginRight:"15px", marginTop:"30px",  marginBottom:"30px"}}>CATEGORIES TO BAG</h3>
      <div>
        <div style={{display:"flex"}}>          
          {BagCategories1.map((item, index)=>{return(Loading?<h2 key={item.id}>Loading...</h2>:<Link to={'Kurta'} key={item.id}  style={{display:"flex"}} ><img key={item.id} src={item.image} /></Link>)})}
        </div>
        <div style={{display:"flex"}}>
          {BagCategories2.map((item)=>{return(Loading?<h2 key={item.id}>Loading...</h2>:<div key={item.id} style={{display:"flex"}}><img key={item.id} src={item.image}/></div>)})}
        </div>
        <div style={{display:"flex"}}>
          {BagCategories3.map((item)=>{return(Loading?<h2 key={item.id}>Loading...</h2>:<div key={item.id} style={{display:"flex"}}><img key={item.id} src={item.image}/></div>)})}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Home

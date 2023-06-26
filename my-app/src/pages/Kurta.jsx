import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import axios from 'axios'
import {StarIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Kurta = () => {

    const [Loading, SetLoading] = useState(false)
    const {Kurtas, SetKurtas} = useContext(AuthContext)
    const [SortWay, SetSortWay]=useState("")
    const [url, Seturl] = useState(`https://indigo-crane-robe.cyclic.app/kurtaData`)
    //const [Kurtas, SetKurtas] = useState([])

    const FetchData = ()=>{
        axios.get(url,{
         params:{
            _sort:"price",
            _order:SortWay
         }   
        })
        .then((res)=>SetKurtas(res.data))
        .catch((err)=>console.log(err))
        .finally(()=>SetLoading(false))
    }    

    useEffect(()=>{
        FetchData()
    },[SortWay,url])

    const HandleBrand = (e)=>{
        Seturl(`https://indigo-crane-robe.cyclic.app/kurtaData?name=${e.target.value}`)
    }

    const HandleRating = (e)=>{
        Seturl(`https://indigo-crane-robe.cyclic.app/kurtaData?rating=${e.target.value}`)
    }

    const HandleDiscount = (e)=>{
        Seturl(`https://indigo-crane-robe.cyclic.app/kurtaData?name=${e.target.value}`)
    }

    const HandlePrice = (e)=>{
        Seturl(`https://indigo-crane-robe.cyclic.app/kurtaData?name=${e.target.value}`)
    }

    const HandleType = (e)=>{
        Seturl(`https://indigo-crane-robe.cyclic.app/kurtaData?name=${e.target.value}`)
    }

  return (
    <div>
        <div style={{display:"flex"}}>
            <div style={{ width:"20%", fontWeight:"bold"}}>
                <div style={{ width:"90%",display:"flex", justifyContent:"space-between", fontSize:"15px"}}>
                    <p >FILTERS</p><p style={{ color:"#EC407A"}}>CLEAR ALL</p>
                </div>
            </div>
            <div style={{width:"80%", fontSize:"12px", display:"flex", justifyContent:"space-between", marginBottom:"15px"}}>
               <div style={{display:"flex", width:"50%", justifyContent:"space-between"}}> 
                    <p>Add-Ons </p>
                    <p>Bottom Type </p>
                    <p>Bundles </p>
                    <p>Character </p>
                    <p>Country of Origin </p>
                    <p>Dupatta </p>
                    <p>Dupatta Fabric </p> 
                </div>
                <div style={{fontSize:"15px"}}>
                    <select onChange={(e)=>SetSortWay(e.target.value)}>
                        <option value="">SORT BY PRICE</option>
                        <option value="asc">Price Low to High</option>
                        <option value="desc">Price High To Low</option>
                    </select>
                </div>
            </div>

        </div>
        <div style={{display:"flex"}}>
            <div style={{width:"20%", textAlign:"left"}}>
                {/* brand, type,rating, price, discount range */}
                <div style={{padding:"3px", fontSize:"13px", marginBottom:"20px"}}>
                    <p style={{ fontWeight:"bold", display:"inline"}}>BRAND</p>
                    <select onChange={HandleBrand}>
                        <option value="SINGNI">SINGNI</option>
                        <option value="KALINI">KALINI</option>
                        <option value="Libas">Libas</option>
                        <option value="Anouk">Anouk</option>
                        <option value="Nayo">Nayo</option>
                        <option value="Kushal K">Kushal K</option>
                        <option value="Ahalya">Ahalya</option>
                        <option value="Taswak">Taswak</option>
                        <option value="Varanga">Varanga</option>
                        <option value="INDIE CLOSET">INDIE CLOSET</option>
                        <option value="Indo Era">Indo Era</option>
                    </select>
                   
                </div>
                <div style={{padding:"3px", fontSize:"13px", marginBottom:"20px"}}>
                    <p style={{ fontWeight:"bold", display:"inline"}}>RATING</p>
                    <select onChange={HandleRating}>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div style={{padding:"3px", fontSize:"13px", marginBottom:"20px"}}>
                    <p style={{fontWeight:"bold", display:"inline"}}>DISCOUNT RANGE</p>
                    <select onChange={HandleDiscount}>
                        <option>20% and above</option>
                        <option>40% and above</option>
                        <option>60% and above</option>
                        <option>80% and above</option>
                        <option>90% and above</option>
                    </select>
                </div>
                <div style={{ padding:"3px", fontSize:"13px", marginBottom:"20px"}}>
                    <p style={{fontWeight:"bold", display:"inline"}}>TYPE</p>
                    <select style={{width:"80%"}} onChange={HandleType}>
                        <option>Women Embroidered Kurta Set</option>
                        <option>Women Yoke Design Kurta Set</option>
                        <option>Women Printed Kurta with Palazzo & With Dupatta</option>
                        <option>Women Printed Kurta with Trouser</option>
                        <option>Women Kurta Set With Dupatta</option>
                    </select>
                </div>
                <div style={{ padding:"3px", fontSize:"13px", marginBottom:"20px"}}>
                    <p style={{fontWeight:"bold", display:"inline"}}>PRICE RANGE</p>
                    <select onChange={HandlePrice}>
                        <option>500 and above</option>
                        <option>600 and above</option>
                        <option>700 and above</option>
                        <option>800 and above</option>
                        <option>900 and above</option>
                    </select>
                </div>
            </div>
            {Loading?<h1>Loading....</h1>:
            <div style={{ width:"80%", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"5px"}}>
                {Kurtas.map((item)=>
                    <Link to={`/kurta/${item.id}`} key={item.id} style={{textAlign:"left", fontSize:"15px"}}>
                        <img style={{width:"150px", height:"200px"}} src={item.image} alt="image" />
                        <p style={{display:"inline"}}>{item.rating} </p><StarIcon style={{color:"darkgreen"}}/>
                        <p style={{fontWeight:"bold", fontSize:"11px"}}>{item.name}</p>
                        <p>{item.material}</p>
                        <p style={{display:"inline", fontWeight:"bold"}}>Rs. {item.price}</p>
                        <p style={{display:"inline", color:"#EC407A"}}>({item.discount})% OFF</p>
                    </Link>
                )}            
            </div>
             } 
        </div>
        <br />
        <br />
        <Footer/>
    </div>
  )
}

export default Kurta




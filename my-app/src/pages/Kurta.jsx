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
    const [SortWay, SetSortWay ]=useState("")
    //const [Kurtas, SetKurtas] = useState([])

    const FetchData = ()=>{
        axios.get(`http://localhost:8080/kurtaData`,{
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
    },[SortWay])

    

  return (
    <div >
        <div style={{display:"flex"}}>
            <div style={{ width:"20%",display:"flex", justifyContent:"space-between", fontWeight:"bold"}}>
                <p style={{fontSize:"10px"}}>FILTERS</p><p style={{fontSize:"9px", color:"#EC407A"}}>CLEAR ALL</p>
            </div>
            <div style={{width:"80%", fontSize:"8px", display:"flex", justifyContent:"space-between"}}>
               <div style={{display:"flex", width:"50%", justifyContent:"space-between"}}> 
                    <p>Add-Ons </p>
                    <p>Bottom Type </p>
                    <p>Bundles </p>
                    <p>Character </p>
                    <p>Country of Origin </p>
                    <p>Dupatta </p>
                    <p>Dupatta Fabric </p> 
                </div>
                <div>
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
                <div style={{padding:"3px", fontSize:"9px", marginBottom:"20px"}}>
                    <p style={{fontSize:"9px", fontWeight:"bold", display:"inline"}}>BRAND</p>
                    <select>
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
                <div style={{padding:"3px", fontSize:"9px", marginBottom:"20px"}}>
                    <p style={{fontSize:"9px", fontWeight:"bold", display:"inline"}}>RATING</p>
                    <select>
                        <option>5 and above</option>
                        <option>4 and above</option>
                        <option>3 and above</option>
                        <option>2 and above</option>
                        <option>1 and above</option>
                    </select>
                </div>
                <div style={{padding:"3px", fontSize:"9px", marginBottom:"20px"}}>
                    <p style={{fontSize:"9px", fontWeight:"bold", display:"inline"}}>DISCOUNT RANGE</p>
                    <select>
                        <option>20% and above</option>
                        <option>40% and above</option>
                        <option>60% and above</option>
                        <option>80% and above</option>
                        <option>90% and above</option>
                    </select>
                </div>
                <div style={{ padding:"3px", fontSize:"9px", marginBottom:"20px"}}>
                    <p style={{fontSize:"9px", fontWeight:"bold", display:"inline"}}>TYPE</p>
                    <select>
                        <option>Women Embroidered Kurta Set</option>
                        <option>Women Yoke Design Kurta Set</option>
                        <option>Women Printed Kurta with Palazzo & With Dupatta</option>
                        <option>Women Printed Kurta with Trouser</option>
                        <option>Women Kurta Set With Dupatta</option>
                    </select>
                </div>
                <div style={{ padding:"3px", fontSize:"9px", marginBottom:"20px"}}>
                    <p style={{fontSize:"9px", fontWeight:"bold", display:"inline"}}>PRICE RANGE</p>
                    <select>
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
                    <Link to={`/kurta/${item.id}`} key={item.id} style={{textAlign:"left", fontSize:"8px"}}>
                        <img style={{width:"150px", height:"200px"}} src={item.image} alt="image" />
                        <p style={{display:"inline"}}>{item.rating} </p><StarIcon style={{color:"darkgreen"}}/>
                        <p style={{fontWeight:"bold", fontSize:"9px"}}>{item.name}</p>
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




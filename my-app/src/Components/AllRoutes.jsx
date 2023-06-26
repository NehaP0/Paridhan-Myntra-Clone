import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Bag from "../pages/Bag";
import Beauty from "../pages/Beauty";
import HomeAndLiving from "../pages/HomeAndLiving";
import Kids from "../pages/Kids";
import Men from "../pages/Men";
import Studio from "../pages/Studio";
import Wishlist from "../pages/Wishlist";
import Women from "../pages/Women";
import Kurta from "../pages/Kurta";
import OneKurta from "../pages/OneKurta";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AdminPage from "../pages/AdminPage";


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bag' element={<Bag />}></Route>
        <Route path='/beauty' element={<Beauty />}></Route>
        <Route path='/homeandliving' element={<HomeAndLiving />}></Route>
        <Route path='/kids' element={<Kids />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/studio' element={<Studio />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/kurta' element={<Kurta />}></Route>
        <Route path='/kurta/:id' element={<OneKurta />}></Route> 
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
    </Routes>
  )
}

export default AllRoutes
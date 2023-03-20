
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login  from '../pages/Login';
import Main  from '../pages/Main';
import MovieDetail  from '../pages/MovieDetail';
import Register  from '../pages/Register';
import AboutUs  from '../pages/AboutUs';



const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}  />
    <Route path='/Main' element={<Main/>}  />
    <Route path='/MovieDetail/:id' element={<MovieDetail/>}  />
    <Route path='/register' element={<Register/>}  />
    <Route path='/AboutUs' element={<AboutUs/>}  />


    </Routes>
    </BrowserRouter>
  
  )
}

export default AppRouter
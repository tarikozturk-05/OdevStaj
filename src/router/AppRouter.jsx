import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
const AppRouter = () => {
  return (
    <div>


   <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
     </Routes>





    </div>
  )
}

export default AppRouter
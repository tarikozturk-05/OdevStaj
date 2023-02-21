import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
const AppRouter = () => {

  const [userinfo, setUserinfo] = useState("")


  return (
    <div>


   <Routes>
            <Route path='/' element={<Login setUserinfo={setUserinfo}/>}/>
            <Route path='/register' element={<Register setUserinfo={setUserinfo}/>}/>
            <Route path='/home' element={<Home userinfo={userinfo} />}/>
     </Routes>





    </div>
  )
}

export default AppRouter
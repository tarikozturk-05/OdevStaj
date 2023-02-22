import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <span className='text-danger'><h1>Error!</h1><h2 className='text-secondary'>Böyle Bir Sayfa Yok</h2></span>
        <br />
        <Link to={"/"}>Ana Sayfa</Link>
    </div>
  )
}

export default Error
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navsection'> 
      <div className='title'>
        E-CART
      </div>
      <div>
        <input type='text'
        placeholder='search......'/>
      </div>
      <div className='cart'>
        CART
      </div>
    </div>
    <div className='submenu'>
      <ul>
        <Link to='/mobile'> <li>Mobiles</li></Link>
        <Link to='/computer'><li>Computers</li></Link>
        <Link to='/tv'><li>TV</li></Link>
        <Link to='/ac'><li>AC</li></Link>
        <Link to='/watches'><li>Watches</li></Link>
      </ul>
    </div>
    </>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <>
    <div className='navsection'> 
      <div className='title'>
        <LanguageIcon/> E-CART
      </div>
      <div className='search-container'>
        <input type='text'
        placeholder='search......'/>
        <button className='search-button'>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className='title'>
      <AddShoppingCartIcon/>  CART
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

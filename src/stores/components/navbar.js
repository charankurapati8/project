import React from 'react'

const Navbar = () => {
  return (
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
  )
}

export default Navbar

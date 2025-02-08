import React from 'react'
import { mobileData } from '../data/mobiles' 

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0,6)

  return (
    <div className='prosection'>
      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imagebox'>
                  <img className='proimage' src={item.image} alt=""/>
                </div> 
            )
        })
      }
    </div>
  )
}

export default Mobiles

import React from 'react'
import { mobileData } from '../data/mobiles' 

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0,5)

  return (
  <>
  <div className='protitle'>
  <h2>Mobiles</h2>
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
  </div>
  </>
  )
}

export default Mobiles

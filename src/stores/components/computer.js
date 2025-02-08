import React from 'react'
import { computerData } from '../data/computer'

const Computer = () => {
    const firstFiveImages = computerData.slice(0,6)
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

export default Computer

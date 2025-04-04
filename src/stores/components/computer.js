import React from 'react'
import { computerData } from '../data/computer'

const Computer = () => {
    const firstFiveImages = computerData.slice(0,5)
  return (
 <>
<div className='protitle'>
   <h2>Computers</h2>
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

export default Computer

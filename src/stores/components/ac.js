import React from 'react'
import { acData } from '../data/ac'

const AC = () => {
  const firstFiveImages = acData.slice(0,5)
 
   return (
   <>
   <div className='protitle'>
   <h2>AC</h2>
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

export default AC

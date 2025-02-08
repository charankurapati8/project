import React from 'react'
import { tvData } from '../data/tv'

const TV = () => {
 const firstFiveImages = tvData.slice(0,5)
 
   return (
   <>
   <div className='protitle'>
   <h2>TV</h2>
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

export default TV

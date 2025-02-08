import React from 'react'
import { watchData } from '../data/watch'

const Watches = () => {
 const firstFiveImages = watchData.slice(0,5)
 
   return (
   <>
   <div className='protitle'>
   <h2>Watches</h2>
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

export default Watches

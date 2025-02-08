import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/navbar'
const Watchpage = () => {
  return (
<>
<Navbar/>
<div className='pagesection'>
      {watchData.map((item)=>{
        return(
            <div>
                <div className='pageimg'>
                    <img src={item.image} alt=''/>
                </div>
                <div className='promodel'>
                    {item.company}, {item.model}
                </div>
            </div>
        )
      })}
    </div>
</>
  )
}

export default Watchpage

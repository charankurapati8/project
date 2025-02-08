import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/navbar'
const Tvpage = () => {
  return (
<>
<Navbar/>
<div className='pagesection'>
      {tvData.map((item)=>{
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

export default Tvpage

import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/navbar'
const Acpage = () => {
  return (
<>
<Navbar/>
<div className='pagesection'>
      {acData.map((item)=>{
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

export default Acpage

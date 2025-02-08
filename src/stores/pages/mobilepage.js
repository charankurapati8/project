import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/navbar'
const Mobilepage = () => {
  return (
<>
<Navbar/>
<div className='pagesection'>
      {mobileData.map((item)=>{
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

export default Mobilepage

import React from 'react'
import { computerData } from '../data/computer'
import Navbar from '../components/navbar'
const Computerpage = () => {
  return (
<>
<Navbar/>
<div className='pagesection'>
      {computerData.map((item)=>{
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

export default Computerpage

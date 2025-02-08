import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {

  const [selected,setSelected] = useState([])
  const companyHandler =(mango) =>{
    if(selected.includes(mango)){
      setSelected(selected.filter(item => item !== mango))
    }else{
      setSelected([...selected,mango])
    }
  }

  const filtered = selected.length===0?
  mobileData : mobileData.filter((item)=>selected.includes(item.company))

  return (
<>
<Navbar/>
<div className='fullpage'>
<div className='pro-selected'>
{mobileData.map((phone)=>{
  return(
    <div className='pro-input'>
      <label>
        <input
        type='checkbox'
        checked = {selected.includes(phone.company)}
        onChange={()=>companyHandler(phone.company)}
        />
        {phone.company}
      </label>
    </div>
  )
})}
</div>
<div className='pagesection'>
      {filtered.map((item)=>{
        return(
            <div>
              <Link to={`/mobile/${item.id}`}>
              <div className='pageimg'>
                    <img src={item.image} alt=''/>
                </div>
              </Link>
                <div className='promodel'>
                    {item.company}, {item.model}
                </div>
            </div>
        )
      })}
    </div>
</div>
</>
  )
}

export default Mobilepage

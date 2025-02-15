import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Tvpage = () => {
  const [selected,setSelected] = useState([])
        const companyHandler =(mango) =>{
          if(selected.includes(mango)){
            setSelected(selected.filter(item => item !== mango))
          }else{
            setSelected([...selected,mango])
          }
        }
      
        const filtered = selected.length===0?
        tvData : tvData.filter((item)=>selected.includes(item.company))
  return (
<>
<Navbar/>
<div className='fullpage'>
<div className='pro-selected'>
{tvData.map((phone)=>{
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
              <Link to={`/tv/${item.id}`}>
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

export default Tvpage

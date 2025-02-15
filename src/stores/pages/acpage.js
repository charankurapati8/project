import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Acpage = () => {
  const [selected,setSelected] = useState([])
      const companyHandler =(mango) =>{
        if(selected.includes(mango)){
          setSelected(selected.filter(item => item !== mango))
        }else{
          setSelected([...selected,mango])
        }
      }
    
      const filtered = selected.length===0?
      acData : acData.filter((item)=>selected.includes(item.company))
  return (
<>
<Navbar/>
<div className='fullpage'>
<div className='pro-selected'>
{acData.map((phone)=>{
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
              <Link to={`/ac/${item.id}`}>
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

export default Acpage

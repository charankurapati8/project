import React from 'react'
import { useParams } from 'react-router-dom'
import { tvData } from '../stores/data/tv'
import Navbar from '../stores/components/navbar'
const TvSingle = () => {

  const {id} = useParams()
  console.log("ID from useParams:", id);
    const product = tvData.find((item)=>item.id === id)
    console.log(product)

  return (
    <>
    <Navbar/>
<div className='ind-section'>
      <div className='ind-image'>
        <img src={`/assets/TV/${product.id}.jpg`} alt=''/>
      </div>
      <div className='ind-details space'>
        <div className='ind-company'>
            <h2>{product.company}</h2>
        </div>
      <div className='ind-model space'>
        <h3>{product.model}</h3>
      </div>
      <div className='ind-price space'>
        <h2>{product.price}</h2>
      </div>
      <div className='ind-desc space'>
        <p>
            {product.description}
        </p>
      </div>
      <button>
        add to cart
      </button>
      </div>
    </div>
    </>

  )
}
  

export default TvSingle

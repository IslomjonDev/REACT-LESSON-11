import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api'

const SingleRoute = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(res => console.log(res))
    },[])

    if(!product){
        return <h2>Loading...</h2>
    }

  return (
    <div className="container">
    <div className='single-card'>
      <div className="card-left">
        <div className="card-img">
        <img src={product?.images[0]} alt="" />
        </div>
        <div className="card-img">
        <img src={product?.images[1]} alt="" />
        </div>
        <div className="card-img">
        <img src={product?.images[2]} alt="" />
        </div>
        <div className="card-img">
        <img src={product?.images[3]} alt="" />
        </div>
      </div>
      <div className="img-card">
        <img src={product?.thumbnail} alt="" />
      </div>

        <div className="card-title">
        <h1>{product?.title}</h1>
         <p>{product?.description}</p>
         <span>
           <h2>${product?.price}</h2>
           <button>Shop Now</button>
         </span>
        </div>
    </div>
    </div>
  )
}

export default SingleRoute
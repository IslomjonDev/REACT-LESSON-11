import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'


const Products = ({data, loading}) => {
    let products = data?.map((el)=> <div className='card' key={el.id}>
    <Link to={`/product/${el.id}`}>
      <img src={el.thumbnail} width={300} alt="" />
    </Link>
    <h2>{el.title}</h2>
    <p>{el.description}</p>
    <span>
    <button>Learn more</button>
    <h3>${el.price}</h3>
    </span>
  </div>)
  return (
    <>
    <div className="container">

        {loading ?  <Skeleton count={10}/> : <></>}
        <div className='wrapper'>{products}</div>
    </div>
    </>
  )
}

export default Products
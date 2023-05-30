// tsrfc
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../../Redux/reducers/productReducer'

type Props = {
  product: ProductModel
}

export default function Product({product}: Props) {
  return (
    <div className='card'>
      <img src={product.image} alt="..." />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <NavLink to={`/detail/${1}`} className='btn btn-dark'>
          View detail
        </NavLink>
      </div>
    </div>
  )
}
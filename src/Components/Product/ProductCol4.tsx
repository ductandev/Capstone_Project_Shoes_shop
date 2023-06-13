// tsrfc
import styles from "./productCol4.module.css";

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel, RelatedProduct } from '../../Redux/reducers/productReducer'

type Props = {
  product: ProductModel | RelatedProduct
}


export default function ProductCol4({ product }: Props) {



  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <NavLink to={`/detail/${product.id}`}>
        <img className={styles.imgSlider} src={product.image} alt="..." />
      </NavLink>

      <div className={styles.bgBlur}>
        <i className={`fa fa-heart ${styles.icon} ${isLiked ? styles.red : ''}`} onClick={
          handleLikeClick
        }></i>
      </div>

      <h3 className={styles.headline}>{product.name}</h3>
      <NavLink to={`/detail/${product.id}`} className={styles.viewDetail}>
        View detail
      </NavLink>
      <p className={styles.desc}>{product.shortDescription.length > 25 ? product.shortDescription.substr(0, 19) + '...' : product.shortDescription}</p>
      <p className={styles.headlinePrice}>{product.price}$</p>
    </div>
  )
}

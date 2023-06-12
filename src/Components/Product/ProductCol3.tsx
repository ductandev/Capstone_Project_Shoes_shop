// tsrfc
import styles from "./productCol3.module.css";

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../../Redux/reducers/productReducer'

type Props = {
    product: ProductModel
}


export default function ProductCol3({ product }: Props) {

    // const categories = JSON.parse(product.categories);

    return (
        <div>
            <NavLink to={`/detail/${product.id}`}>
                <img className={styles.imgSlider} src={`https://shop.cyberlearn.vn/images/${product.image}`} alt="..." />
            </NavLink>
            <h3 className={styles.headline}>{product.name}</h3>
            <NavLink to={`/detail/${product.id}`} className={styles.viewDetail}>
                View detail
            </NavLink>
            <p className={styles.desc}>{product.shortDescription.length > 25 ? product.shortDescription.substr(0,19)+'...' : product.shortDescription}</p>
            <p className={styles.headlinePrice}>{product.price}$</p>
        </div>
    )
}

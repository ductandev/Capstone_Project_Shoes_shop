// tsrfc
import styles from "./product.module.css";

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../../Redux/reducers/productReducer'

type Props = {
    product: ProductModel
}


export default function Product({ product }: Props) {


    const categories = JSON.parse(product.categories);
    console.log(categories[0].id)
    console.log(categories)
    


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
import styles from "./AllProduct.module.css";

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../../Redux/reducers/productReducer'

type Props = {
    product: ProductModel
}

export default function AllProduct ({product}: Props) {

    const categories = JSON.parse(product.categories);
    console.log(categories[0].id)

    return (
        <div>
            <NavLink to={`/detail/${product.id}`}>
                <img className={styles.imgSlider} src={product.image} alt="..." />
            </NavLink>
            <div className={styles.dFlex}>
                <h3 className={styles.headline}>{product.name}</h3>
                <p className={styles.headlinePrice}>{product.price}$</p>
            </div>
                <p className={styles.category}>{categories[0].id}</p>

        </div>




    )
}


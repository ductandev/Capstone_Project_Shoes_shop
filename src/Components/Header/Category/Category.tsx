// tsrfc
import React from 'react'
import { useEffect } from "react";
import { DispatchType, RootState } from '../../../Redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Category.module.css'
import { Col, Row, Space } from "antd";
import { ProductModel, getProductByCategoryApi } from "../../../Redux/reducers/productReducer";
import { NavLink } from 'react-router-dom';

type Props = {
}

export default function Category({ }: Props) {

  // Get State
  const { arrCategory } = useSelector((state: RootState) => state.productReducer);
  const dispatch: DispatchType = useDispatch();

  // GỌI API getProductByCategory
  const getProductByCategory = async (categoryId:string): Promise<void> => {
    const actionApi = getProductByCategoryApi(categoryId);
    dispatch(actionApi);
  }


    // Call API lần đầu tiên trước khi render.
    useEffect(() => {
      getProductByCategory('women');
  }, []);


  const renderProducts = (): JSX.Element[] => {
    return arrCategory.map((item: ProductModel, index) => {
      return <Col xs={24} md={12} lg={8} xl={8} key={item.id}>
        <div>
            <NavLink to={`/detail/${item.id}`}>
                <img className={styles.imgSlider} src={item.image} alt="..." />
            </NavLink>
            <h3 className={styles.headline}>{item.name}</h3>
            <NavLink to={`/detail/${item.id}`} className={styles.viewDetail}>
                View detail
            </NavLink>
            <p className={styles.desc}>{item.shortDescription.length > 25 ? item.shortDescription.substr(0,19)+'...' : item.shortDescription}</p>
            <p className={styles.headlinePrice}>{item.price}$</p>
        </div>
      </Col>
    })
  }

  return (
    <div>
      <h3 className={styles.headlineTitle}>TRENDING</h3>
      <div className={styles.mx}>
        <Row gutter={[24, 24]}>
          {renderProducts()}
        </Row>
      </div>
    </div>
  )
}
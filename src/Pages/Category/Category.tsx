// tsrfc
import React from 'react'
import { useEffect } from "react";
import { DispatchType, RootState } from '../../Redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import styles from './category.module.css'
import { Col, Row } from "antd";
import { ProductModel, getProductByCategoryApi } from "../../Redux/reducers/productReducer";
import ProductCol4 from '../../Components/Product/ProductCol4';

type Props = {
}

export default function Category({ }: Props) {

  // Get State
  const { arrCategory, categoryName } = useSelector((state: RootState) => state.productReducer);
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
            <ProductCol4 product={item} />
      </Col>
    })
  }

  return (
    <div>
      <h3 className={styles.headlineTitle}>{categoryName}</h3>
      <div className={styles.mx}>
        <Row gutter={[24, 24]}>
          {renderProducts()}
        </Row>
      </div>
    </div>
  )
}
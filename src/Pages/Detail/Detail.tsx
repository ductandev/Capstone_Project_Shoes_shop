// tsrfc
import { Button, Col, Row } from 'antd'
import React, { useEffect } from 'react'

import styles from './detail.module.css'
import { RelatedProduct, getProductDetailApi } from '../../Redux/reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/configStore'
import ProductCol4 from '../../Components/Product/ProductCol4'
import { useParams } from 'react-router-dom'

//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getProductCartAction } from '../../Redux/reducers/cartReducer'


type Props = {

}

export default function Detail({ }: Props) {
  //Owl Carousel Settings
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      950: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },
  };

  // Get State
  const { productDetail } = useSelector((state: RootState) => state.productReducer);
  const dispatch: DispatchType = useDispatch();
  const param = useParams();


  const getProductByIdApi = () => {
    const id: string | undefined = param.id;
    const action = getProductDetailApi(id as string)
    dispatch(action);
  }


  useEffect(() => {
    // call API
    getProductByIdApi();
  }, [param.id]);


  const renderButtonSize = (): JSX.Element[] => {
    if (productDetail?.size) {
      return productDetail.size.map((item: string, index: number) => (
        <Col span={8} key={index}>
          <Button size={'large'} id={styles.button}>EU {item}</Button>
        </Col>
      ));
    }
    return [];
  };




  return (
    <div>
      <div className={styles.mt}>
        <div>
          <Row justify="space-evenly" gutter={[32, 32]}>
            <Col xs={24} md={10} lg={10} xl={10} >
              <img className={styles.bgImg} src={productDetail?.image} alt="..." width={535} style={{ objectFit: 'cover' }} />
            </Col>

            <Col className={styles.padding} xs={24} md={10} lg={10} xl={8} >
              <h1 className={styles.poductName}>{productDetail?.name}</h1>
              <p>{productDetail?.description}</p>
              <p className={styles.price}>{productDetail?.price} $</p>
              <div className={styles.dFlex}>
                <p className={styles.selectSize}>Select Size</p>
                <p className={styles.sizeGuide}>Select Guide</p>
              </div>
              <Row id='btnActive' gutter={[8, 8]}>
                {renderButtonSize()}
              </Row>
              <button className={styles.addToBag} onClick={() => {
                if (productDetail !== null) {
                  const actionApi = getProductCartAction(productDetail);
                  dispatch(actionApi);
                }
              }}>Add to Bag</button>
              <button className={styles.favourite}>
                Favourite  &nbsp;
                <i className="fa-sharp fa-regular fa-heart"></i>
              </button>
              <p className={styles.textCenter}>
                This product is excluded from site <br />
                promotions and discounts.
              </p>
            </Col>
          </Row>
        </div>


        <h3 className={styles.title}>You Might Also Like</h3>

        <div className={styles.mx}>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {productDetail?.relatedProducts.map((item: RelatedProduct, index: number) => {
              return <div className='item' key={item.id}>
                <ProductCol4 product={item} />
              </div>
            })}
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}
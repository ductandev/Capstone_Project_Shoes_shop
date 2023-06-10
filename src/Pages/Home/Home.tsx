import { useEffect } from "react";
import ProductCol3 from "../../Components/Product/ProductCol3";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/configStore";
import { ProductModel, getDataProductApi, getPagingApi } from "../../Redux/reducers/productReducer";

import { Col, Row } from "antd";
import styles from "./home.module.css";

//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AllProduct from "../../Components/Product/AllProduct";

type Props = {};

export default function Home({ }: Props) {
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
    const { arrProduct, arrPaging } = useSelector((state: RootState) => state.productReducer);
    const dispatch: DispatchType = useDispatch();


    // GỌI API
    const getDataProductList = async () => {
        const actionApi = getDataProductApi();
        dispatch(actionApi);
    };


    // GỌI API getpaging
    const getPaging = async (pageIndex: number, pageSize: number): Promise<void> => {
        const actionApi = getPagingApi(pageIndex, pageSize);
        dispatch(actionApi);
    }


    // Call API lần đầu tiên trước khi render.
    useEffect(() => {
        getDataProductList();
        getPaging(1, 8);
    }, []);



    const renderAllProducts = (): JSX.Element[] => {
        return arrProduct.map((item: ProductModel, index) => {
            return <div className='item' key={item.id}>
                <AllProduct product={item} />
            </div>
        })
    }

    const renderProducts = (): JSX.Element[] => {
        return arrPaging.map((item: ProductModel, index) => {
            return <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
                <ProductCol3 product={item} />
            </Col>
        })
    }


    return (
        <div>
            <h3 className={styles.headline}>IN THE SPOTLIGHT</h3>
            <div className={styles.ms}>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    {renderAllProducts()}
                </OwlCarousel>
            </div>

            <h3 className={styles.headline}>TRENDING</h3>
            <div className={styles.mx}>
            <Row gutter={[24,24]}>
                    {renderProducts()}
                </Row>
            </div>


        </div>
    )

}

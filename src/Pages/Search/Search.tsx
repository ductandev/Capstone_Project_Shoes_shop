// tsrfc
import { RootState } from "../../Redux/configStore";
import { useSelector } from "react-redux";
import styles from "./search.module.css";
import { Col, Row } from "antd";
import { ProductModel } from "../../Redux/reducers/productReducer";
import ProductCol4 from "../../Components/Product/ProductCol4";

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Category({}: Props) {
  // Get State
  const { arrProductSearch, categoryName } = useSelector(
    (state: RootState) => state.productReducer
  );

  const renderProductsSearch = (): JSX.Element[] => {
    return arrProductSearch.map((item: ProductModel, index) => {
      return (
        <Col xs={24} md={12} lg={8} xl={8} key={item.id}>
          <ProductCol4 product={item} />
        </Col>
      );
    });
  };

  return (
    <div>
      <h3 className={styles.headlineTitle}>{categoryName}</h3>
      <div className={styles.mx}>
        <Row gutter={[24, 24]}>{renderProductsSearch()}</Row>
      </div>
    </div>
  );
}

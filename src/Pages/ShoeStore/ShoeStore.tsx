import { useEffect } from "react";
import { Col, Row, Input, Divider } from "antd";
import styles from "./shoeStore.module.css";
import { DispatchType, RootState } from "../../Redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import {
  ShopModel,
  getShopApi,
} from "../../Redux/reducers/productReducer";

const { Search } = Input;

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function ShoeStore({}: Props) {
  const { arrShopShoe } = useSelector(
    (state: RootState) => state.productReducer
  );

  const renderShoeShops = (): JSX.Element[] => {
    return arrShopShoe.map((item: ShopModel, index) => {
      return (
        <div>
          <Col span={23} className={styles.listStore} key={item.id}>
            <Row>
              <Col span={6}>
                <img src={item.image} alt="Logo" className={styles.mapMini} />
              </Col>
              <Col span={18} className={styles.text}>
                <Row>
                  <Col span={24}>
                    <p className={styles.name}>{item.name}</p>
                  </Col>

                  <Col span={24}>
                    <p className={styles.description}>{item.description}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Divider plain></Divider>
        </div>
      );
    });
  };

  const dispatch: DispatchType = useDispatch();

  const renderShops = (value: string) => {
    const action = getShopApi(value);
    dispatch(action);
  };


  const onSearch = (value: string) => {
    renderShops(value);
  };


  const getShopShoeApi = () => {
    // Gọi api getProfile sử dụng redux async action
    const action = getShopApi("");
    dispatch(action);
  };

  useEffect(() => {
    getShopShoeApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Row>
        <Col span={8}>
          <Row>
            <p className={styles.title}>Find a Shoe Store</p>
            <Col span={20}>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                className={styles.search}
              />
            </Col>

            {renderShoeShops()}
          </Row>
        </Col>
        <Col span={16}>
          <img
            src="../assets/image/logo/map.png"
            alt="Logo"
            className={styles.map}
          />
        </Col>
      </Row>
    </div>
  );
}

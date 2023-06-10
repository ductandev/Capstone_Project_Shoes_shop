import { NavLink } from "react-router-dom";
import { Col, Row, Input, Space, Carousel } from "antd";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import styles from "./header.module.css";
import { DispatchType, RootState } from "../../Redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryNameAction, getProductByCategoryApi } from "../../Redux/reducers/productReducer";
import { string } from "yargs";

type Props = {};

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function Header({ }: Props) {

  // Get State
  const { } = useSelector((state: RootState) => state.productReducer);
  const dispatch: DispatchType = useDispatch();


  const renderCategoryProducts = (item:string) =>{
    const action = getProductByCategoryApi(item);
    const actionGetNameCategory = getCategoryNameAction(item);
    dispatch(action)
    dispatch(actionGetNameCategory)
  }


  return (
    <div>
      <Row className={styles.topHeader} align="middle">
        <Col span={8}>
          <NavLink className="nav-link" to="/">
            <img
              src="../assets/image/logo/logo.png"
              alt="Logo"
              className={styles.logo}
            />
          </NavLink>
        </Col>
        <Col span={16}>
          <Row justify="end">
            <button className={styles.buttonFindAStore}>
              <NavLink className="nav-link" to="/shoestore">
                Find a Store
              </NavLink>
            </button>
            <button className={styles.buttonJoinUs}>
              <NavLink className="nav-link" to="/register">
                Join Us
              </NavLink>
            </button>
            <button className={styles.buttonSignIn}>
              <NavLink className="nav-link" to="/login">
                Log in
              </NavLink>
            </button>
          </Row>
        </Col>
      </Row>

      <Row align="middle" className={styles.bottomNav}>
        <Col span={6}>
          <NavLink className="nav-link" to="/">
            <img
              src="../assets/image/logo/logo2.png"
              alt="Logo"
              className={styles.logoMain}
            />
          </NavLink>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  {renderCategoryProducts('women')}
                }}>Woman</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  {renderCategoryProducts('men')}
                }}>Men</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  {renderCategoryProducts('adidas')}
                }}>Adidas</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  {renderCategoryProducts('nike')}
                }}>Nike</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  {renderCategoryProducts('vans_converse')}
                }}>Vans</button>
              </NavLink>
            </Col>
          </Row>{" "}
        </Col>
        <Col span={6}>
          <Row justify="end">
            <Col span={16}>
              <Space align="center" className={styles.spaceSearch}>
                <Search placeholder="Search" allowClear onSearch={onSearch} />
              </Space>
            </Col>
            <Col span={4}>
              <button className={styles.heartButton}>
                <NavLink className="nav-link" to="/favourite">
                  <HeartOutlined />
                </NavLink>
              </button>
            </Col>
            <Col span={4}>
              {" "}
              <button className={styles.userButton}>
                <NavLink className="nav-link" to="/cart">
                  <ShoppingOutlined />
                </NavLink>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Carousel autoplay dotPosition="right">
        <Row className={styles.deliveryRow}>
          <Col span={24}>
            <h6 className={styles.deliveryH6}>Free Delivery</h6>
          </Col>
          <Col span={24}>
            <p className={styles.deliveryP}>
              Applies to orders of 5.000.000₫ or more.
            </p>
          </Col>
        </Row>
        <Row className={styles.deliveryRow}>
          <Col span={24}>
            <h6 className={styles.deliveryH6}>
              New Styles on Sale: Up to 40% Off
            </h6>
          </Col>
          <Col span={24}>
            <p className={styles.deliveryP}>Shop All Our New Markdowns</p>
          </Col>
        </Row>
      </Carousel>
    </div>
  );
}

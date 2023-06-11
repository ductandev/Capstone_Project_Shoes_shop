import { NavLink } from "react-router-dom";
import type { MenuProps } from "antd";
import { Col, Row, Input, Space, Carousel, Dropdown } from "antd";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./header.module.css";
import { DispatchType, RootState } from "../../Redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import { USER_LOGIN, clearStorage } from "../../utils/config";
import {
  getCategoryNameAction,
  getProductByCategoryApi,
  getProductByKeyWordApi,
  getSearchValueAction,
} from "../../Redux/reducers/productReducer";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <button className={styles.buttonSignIn}>
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </button>
    ),
  },
  {
    key: "2",
    label: (
      <button
        className={styles.buttonSignIn}
        onClick={() => {
          clearStorage(USER_LOGIN);
          window.location.reload(); //f5
        }}
      >
        <NavLink className="nav-link" to="/">
          Sign Out
        </NavLink>
      </button>
    ),
  },
];

type Props = {};

const { Search } = Input;

// eslint-disable-next-line no-empty-pattern
export default function Header({}: Props) {
  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  const renderLoginLink = () => {
    // console.log(userLogin);

    if (typeof userLogin !== "undefined") {
      console.log("đã login");

      return (
        <>
          <button className={styles.buttonUser}>
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <div className={styles.iconUser}>
                <UserOutlined />
              </div>
            </Dropdown>
          </button>
        </>
      );
    } else {
      console.log("chưa login");
      return (
        <>
          <button className={styles.buttonJoinUs}>
            <NavLink className="nav-link" to="/register">
              Join Us
            </NavLink>
          </button>
          <button className={styles.buttonSignIn}>
            <NavLink className="nav-link" to="/login">
              Sign In
            </NavLink>
          </button>
        </>
      );
    }
  };

  const renderFavourite = () => {
    if (typeof userLogin !== "undefined") {
      return (
        <Col span={4} className={styles.end}>
          <button className={styles.heartButton}>
            <NavLink className="nav-link" to="/favourite">
              <HeartOutlined />
            </NavLink>
          </button>
        </Col>
      );
    }
  };

  // Get State
  const { arrProductCart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch: DispatchType = useDispatch();


  const renderCategoryProducts = (item: string) => {
    const action = getProductByCategoryApi(item);
    const actionGetNameCategory = getCategoryNameAction(item);
    dispatch(action);
    dispatch(actionGetNameCategory);
  };

  const renderSearchProducts = (value: string) => {
    const action = getProductByKeyWordApi(value);

    dispatch(action);
  };

  const onSearch = (value: string) => {
    renderSearchProducts(value);
    const actionGetNameCategory = getSearchValueAction(value);
    dispatch(actionGetNameCategory);
  };

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

            {renderLoginLink()}
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
                  { renderCategoryProducts('women') }
                }}>Woman</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  { renderCategoryProducts('men') }
                }}>Men</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  { renderCategoryProducts('adidas') }
                }}>Adidas</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  { renderCategoryProducts('nike') }
                }}>Nike</button>
              </NavLink>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <NavLink to={`/category`}>
                <button className={styles.buttonMainNav} onClick={() => {
                  { renderCategoryProducts('vans_converse') }
                }}>Vans</button>
              </NavLink>
            </Col>
          </Row>{" "}
        </Col>
        <Col span={6}>
          <Row justify="end">
            <Col span={16}>
              <Space align="center" className={styles.spaceSearch}>
                <NavLink to={`/search`}>
                  <Search placeholder="Search" allowClear onSearch={onSearch} />
                </NavLink>
              </Space>
            </Col>
            {renderFavourite()}
            <Col span={4} className={styles.end}>
              <button className={styles.userButton}>
                <NavLink className="nav-link" to="/cart">
                  <ShoppingOutlined />
                  <span className={styles.cartNumber} style={{ visibility: "visible" }}>
                    {arrProductCart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
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

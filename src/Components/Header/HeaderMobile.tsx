import React, { useState } from "react";
import type { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import { Col, Row, Input, Dropdown, Drawer } from "antd";
import {
  BarsOutlined,
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styles from "./headerMobile.styles.module.css";
import { getCategoryNameAction, getProductByCategoryApi } from "../../Redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/configStore";
import { USER_LOGIN, clearStorage } from "../../utils/config";

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

const items2 = [
  {
    key: "3",
    label: (
      <button className={styles.buttonSignIn}>
        <NavLink className="nav-link" to="/register">
          Join Us
        </NavLink>
      </button>
    ),
  },
  {
    key: "4",
    label: (
      <button className={styles.buttonSignIn}>
        <NavLink className="nav-link" to="/login">
          Sign In
        </NavLink>
      </button>
    ),
  },
];

type Props = {};

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

// eslint-disable-next-line no-empty-pattern
export default function HeaderMobile({}: Props) {
  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  const renderFavourite = () => {
    if (typeof userLogin !== "undefined") {
      return (
        <button className={styles.buttonIconNav}>
          <NavLink className="nav-link" to="/favourite">
            <HeartOutlined />
          </NavLink>
        </button>
      );
    }
  };

  const renderLoginLink = () => {
    if (typeof userLogin !== "undefined") {
      console.log("đã login");
      return (
        <>
          <button className={styles.buttonIconNav}>
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <UserOutlined />
            </Dropdown>
          </button>
        </>
      );
    } else {
      console.log("chưa login");
      return (
        <>
          <button className={styles.buttonIconNav}>
            <Dropdown
              menu={{ items: items2 }} // Sử dụng biến items2 ở đây
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <UserOutlined />
            </Dropdown>
          </button>
        </>
      );
    }
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Get State
  const { arrProductCart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch: DispatchType = useDispatch();


  const renderCategoryProducts = (item: string) => {
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
        <Col flex="auto">
          <Row justify="end">
            {renderFavourite()}
            <button className={styles.buttonIconNav}>
              <NavLink className="nav-link" to="/cart">
                <ShoppingOutlined />
                <span className={styles.cartNumber} style={{ visibility: "visible" }}>
                  {arrProductCart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </NavLink>
            </button>
            {renderLoginLink()}
            <button className={styles.buttonIconNav} onClick={showDrawer}>
              <BarsOutlined />
            </button>
          </Row>
        </Col>
      </Row>

      <Row className={styles.searchNav} align="middle">
        <Col span={24}>
          <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            className={styles.pb10px}
          />
        </Col>
      </Row>

      <Drawer
        title="Welcome to your Shoe Cyber"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Row justify="center">
          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                { renderCategoryProducts('women') }
              }}>Woman</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                { renderCategoryProducts('men') }
              }}>Men</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                { renderCategoryProducts('adidas') }
              }}>Adidas</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                { renderCategoryProducts('nike') }
              }}>Nike</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                { renderCategoryProducts('vans_converse') }
              }}>Vans</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button
                className={styles.colButtonNav}
                onClick={() => {
                  const action = getProductByCategoryApi("vans_converse");
                  dispatch(action);
                }}
              >
                Vans
              </button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <Row justify="center">
              {/* <button className={styles.buttonIconNav}>
              <NavLink className="nav-link" to="/login">
                <UserOutlined />
              </NavLink>
            </button> */}
            </Row>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}

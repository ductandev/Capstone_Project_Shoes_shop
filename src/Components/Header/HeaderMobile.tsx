import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Input, Image, Space, Badge, Drawer } from "antd";
import {
  BarsOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./headerMobile.styles.module.css";
import { getProductByCategoryApi } from "../../Redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/configStore";

type Props = {};

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function HeaderMobile({ }: Props) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

// Get State
  const { } = useSelector((state: RootState) => state.productReducer);
  const dispatch: DispatchType = useDispatch();
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
            <button className={styles.buttonIconNav}>
              <NavLink className="nav-link" to="/cart">
                <ShoppingOutlined />
              </NavLink>
            </button>

            <button className={styles.buttonIconNav}>
              <NavLink className="nav-link" to="/login">
                <UserOutlined />
              </NavLink>
            </button>

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
                const action = getProductByCategoryApi('women')
                dispatch(action)
              }}>Woman</button>
            </NavLink>
          </Col>
          
          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                const action = getProductByCategoryApi('men')
                dispatch(action)
              }}>Men</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                const action = getProductByCategoryApi('adidas')
                dispatch(action)
              }}>Adidas</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                const action = getProductByCategoryApi('nike')
                dispatch(action)
              }}>Nike</button>
            </NavLink>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <NavLink to={`/category`}>
              <button className={styles.colButtonNav} onClick={() => {
                const action = getProductByCategoryApi('vans_converse')
                dispatch(action)
              }}>Vans</button>
            </NavLink>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}

// tsrfc
import { Col, Row, Input, Space, Carousel } from "antd";
import styles from "./header.module.css";

import React from "react";
import { NavLink } from "react-router-dom";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";

type Props = {};
const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function Header({}: Props) {
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
              <button className={styles.buttonMainNav}>Woman</button>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <button className={styles.buttonMainNav}>Men</button>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <button className={styles.buttonMainNav}>Adidas</button>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <button className={styles.buttonMainNav}>Nike</button>
            </Col>
            <Col span={4} className={styles.colMainNav}>
              <button className={styles.buttonMainNav}>Vans</button>
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

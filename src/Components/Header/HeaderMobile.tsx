import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Input, Image, Space, Badge, Drawer } from "antd";
import {
  BarsOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./headerMobile.styles.module.css";

type Props = {};

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function HeaderMobile({}: Props) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
            <button className={styles.colButtonNav}>Woman</button>
          </Col>
          <Col span={24} className={styles.colItemNav}>
            <button className={styles.colButtonNav}>Men</button>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <button className={styles.colButtonNav}>Adidas</button>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <button className={styles.colButtonNav}>Nike</button>
          </Col>

          <Col span={24} className={styles.colItemNav}>
            <button className={styles.colButtonNav}>Vans</button>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}

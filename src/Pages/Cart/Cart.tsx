// tsrfc
import React from "react";
import { Button, Row, Table } from 'antd';

import styles from './cart.module.css'
import { DispatchType, RootState } from "../../Redux/configStore";
import { useDispatch, useSelector } from "react-redux";

interface DataType {
  id: string;
  image: string;
  name: string;
  address: string;
  quantity: string;
  total: number;
  delete: string;
}

type Props = {};

export default function Cart({ }: Props) {

    // Get State
    const { arrProductCart } = useSelector((state: RootState) => state.cartReducer);
    const dispatch: DispatchType = useDispatch();

  const dataSource = [
    {
      id: '1',
      image: <img className={styles.img} src="https://shop.cyberlearn.vn/images/adidas-prophere.png" width={60} alt="..." />,
      name: 'John',
      address: '10 Downing Street',
      quantity: '995',
      total: '350 $',
      delete: <button>X</button>,
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Delete Product',
      dataIndex: 'delete',
      key: 'delete',
    },
  ];



  return (
    <div>
    <div className={styles.container} style={{
      padding: "14px",
      border: "1px solid #cccccc",
      borderRadius: "10px",
    }}>
      <Table size="small" dataSource={dataSource} columns={columns} />
      <Row justify={"end"}>
        <Button className={styles.me} type="primary">
          Checkout
        </Button>
      </Row>
    </div>
    </div>

  )
}

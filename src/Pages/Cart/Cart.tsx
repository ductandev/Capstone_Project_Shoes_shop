// tsrfc
import React from "react";
import { Button, Row, Space, Table } from 'antd';

import styles from './cart.module.css'
import { DispatchType, RootState } from "../../Redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { ColumnsType } from "antd/es/table";
import { changeQuantityAction, delProductCartAction } from "../../Redux/reducers/cartReducer";
import { NavLink } from "react-router-dom";

interface DataType {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

type Props = {};

export default function Cart({ }: Props) {

  // Get State
  const { arrProductCart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch: DispatchType = useDispatch();


  const data: DataType[] = arrProductCart;

  const columns: ColumnsType<DataType> = [
    {
      title: 'Code',
      dataIndex: 'id',
      key: 'id',
      // fixed: 'left',
      // sorter: true,
      // width: 100,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img className={styles.img} src={text} width={60} alt="..." />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" onClick={() => {
            const action = changeQuantityAction({
              id: record.id,
              quantity: 1
            });
            dispatch(action)
          }}>+</Button>
          <p className={styles.width}>{record.quantity}</p>
          <Button type="primary" onClick={() => {
            const action = changeQuantityAction({
              id: record.id,
              quantity: -1
            });
            dispatch(action)
          }}>-</Button>
        </Space>
      )
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (_: any, record: DataType) => record.price * record.quantity
    },
    {
      title: 'Delete Product',
      dataIndex: 'delete',
      key: 'delete',
      render: (_: any, record: DataType) => (
        <Button type="primary" danger onClick={() => {
          const action = delProductCartAction(record.id);
          dispatch(action)
        }}>
          X
        </Button>
      )
    }
  ];


  const total = (): number => {
    let totalMoney = 0;
    for (let itemCart of arrProductCart) {
      totalMoney += itemCart.quantity * itemCart.price;
    }
    return totalMoney;
  };


  return (
    <div>
      <div className={styles.container} style={{
        padding: "14px",
        border: "1px solid #cccccc",
        borderRadius: "10px",
      }}>
        <Table size="small" columns={columns} dataSource={data} />
        <Row justify="space-between">
          <div>
            <p className={styles.totalBill}>
              Total Bill: &nbsp;
              <span className={styles.price}>{total()} $</span>
            </p>
          </div>
          <NavLink to={'/payment'}>
            <Button className={styles.me} type="primary">
              Checkout
            </Button>
          </NavLink>
        </Row>
      </div>
    </div>

  )
}

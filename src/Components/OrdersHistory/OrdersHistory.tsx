import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { RootState } from "../../Redux/configStore";
import styles from "./ordersHistory.module.css";

interface DataType {
  id: number; // Đổi kiểu dữ liệu id từ string thành number
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

type DataIndex = keyof DataType;

const OrdersHistory: React.FC = () => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const ordersHistory = userProfile?.ordersHistory || [];
  const data: DataType[] = ordersHistory.flatMap(
    (order: any) => order.orderDetail as DataType[]
  );
  console.log("🚀 ~ file: OrdersHistory.tsx:28 ~ data:", data);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => {
    if (dataIndex === "image") {
      return {
        render: (text: string) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={text} alt="Image" className={styles.image} />
        ),
      };
    }

    if (dataIndex === "id") {
      let rowIndex = 0;
      return {
        render: () => {
          rowIndex++;
          return rowIndex;
        },
      };
    }

    if (dataIndex === "total") {
      return {
        render: (_, record) => {
          const price = record["price"];
          const quantity = record["quantity"];
          const total = price * quantity;
          return total;
        },
      };
    }

    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() =>
                handleSearch(selectedKeys as string[], confirm, dataIndex)
              }
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters && handleReset(clearFilters);
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText((selectedKeys as string[])[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              Close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ""}
          />
        ) : (
          text
        ),
    };
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "10%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Shoe",
      dataIndex: "image",
      key: "image",
      width: "10%",
      ...getColumnSearchProps("image"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "40%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "15%",
      ...getColumnSearchProps("price"),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "15%",
      ...getColumnSearchProps("quantity"),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: "10%",
      ...getColumnSearchProps("total"),
    },
  ];

  return <Table columns={columns} dataSource={data || []} />;
};

export default OrdersHistory;

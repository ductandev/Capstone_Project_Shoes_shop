import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

interface DataType {
  id: string;
  link: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    id: "1",
    link: "Link 1",
    name: "Shoe 1",
    price: 1000,
    quantity: 2,
    total: 2000,
  },
  {
    id: "1",
    link: "Link 1",
    name: "Shoe 1",
    price: 1000,
    quantity: 2,
    total: 2000,
  },
  {
    id: "1",
    link: "Link 1",
    name: "Shoe 1",
    price: 1000,
    quantity: 2,
    total: 2000,
  },
  {
    id: "1",
    link: "Link 1",
    name: "Shoe 1",
    price: 1000,
    quantity: 2,
    total: 2000,
  },
];

const OrdersHistory: React.FC = () => {
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

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
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
            onClick={() => clearFilters && handleReset(clearFilters)}
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
            close
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
  });

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
      dataIndex: "link",
      key: "link",
      width: "20%",
      ...getColumnSearchProps("link"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
      ...getColumnSearchProps("price"),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
      ...getColumnSearchProps("quantity"),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: "20%",
      ...getColumnSearchProps("total"),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default OrdersHistory;

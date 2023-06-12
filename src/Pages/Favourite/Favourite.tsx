import React, { useRef, useState, useEffect } from "react";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import styles from "./favourite.module.css";
import { RootState, AppDispatch } from "../../Redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteActionApi } from "../../Redux/reducers/userReducer";

interface DataType {
  id: number;
  name: string;
  image: string;
}

type DataIndex = keyof DataType;

const Favourite: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { productFavourite } = useSelector(
    (state: RootState) => state.userReducer
  );

  const data: DataType[] =
    productFavourite && Array.isArray(productFavourite)
      ? productFavourite.map((item: DataType) => ({
          id: item.id,
          name: item.name,
          image: item.image,
        }))
      : [];

  const getFavouriteApi = () => {
    // Gọi api getProfile sử dụng redux async action
    const action = getFavouriteActionApi();
    dispatch(action);
  };

  useEffect(() => {
    getFavouriteApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      width: "20%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Shoe",
      dataIndex: "image",
      key: "image",
      width: "40%",
      ...getColumnSearchProps("image"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "40%",
      ...getColumnSearchProps("name"),
    },
  ];

  return (
    <div
      className={styles.container}
      style={{
        padding: "14px",
        border: "1px solid #cccccc",
        borderRadius: "10px",
      }}
    >
      <h2>Favourite</h2>
      <Table columns={columns} dataSource={data || []} />
    </div>
  );
};

export default Favourite;

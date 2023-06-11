import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfileActionApi } from "../../Redux/reducers/userReducer";
import { RootState, AppDispatch } from "../../Redux/configStore";
import { Input, Select, Row, Col } from "antd";
import styles from "./profileTablet.module.css";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Profile({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { userProfile } = useSelector((state: RootState) => state.userReducer);

  const getProfileApi = () => {
    // Gọi api getProfile sử dụng redux async action
    const action = getProfileActionApi();
    dispatch(action);
  };

  useEffect(() => {
    getProfileApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className={styles.container} justify="center">
      <Col
        span={20}
        style={{
          padding: "14px",
          border: "1px solid #cccccc",
          borderRadius: "10px",
        }}
      >
        <Row justify="center">
          <Col>
            <h2
              style={{
                textAlign: "start",
                fontWeight: "bolder",
              }}
            >
              Welcome {userProfile?.name}
            </h2>
            <img src={userProfile?.avatar} alt="Logo" className={styles.logo} />
          </Col>
        </Row>

        <Input
          className={styles.inputProfile}
          size="small"
          placeholder="large size"
          prefix={<MailOutlined />}
          value={userProfile?.email}
        />
        <Input
          className={styles.inputProfile}
          size="small"
          placeholder="large size"
          prefix={<PhoneOutlined />}
          value={userProfile?.phone}
        />
        <Select
          className={styles.inputProfile}
          value={userProfile?.gender}
          style={{ width: "100%" }}
          options={[
            { value: true, label: "Male" },
            { value: false, label: "Female" },
          ]}
        />
      </Col>
      <Col flex="20px"></Col>
    </Row>
  );
}

import { Col, Row, Divider } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import styles from "./footerMobile.module.css";
type Props = {};

const FooterMobile = (props: Props) => {
  return (
    <div className={styles.footer}>
      <Row className={styles.container}>
        <Col span={24}>
          <Row>
            <Col span={24} className={styles.mainTitleFooter}>
              GIFT CARDS
            </Col>
            <Col span={24} className={styles.mainTitleFooter}>
              PROMOTIONS
            </Col>
            <Col span={24} className={styles.mainTitleFooter}>
              FIND A STORE
            </Col>
            <Col span={24} className={styles.mainTitleFooter}>
              BECOME A MEMBER
            </Col>
            <Col span={24} className={styles.mainTitleFooter}>
              NIKE JOURNAL
            </Col>
            <Col span={24} className={styles.mainTitleFooter}>
              SEND US FEEDBACK
            </Col>
          </Row>
        </Col>
        <Divider plain></Divider>
        <Col span={24}>
          <Row>
            <Col span={24} className={styles.mainTitleFooter}>
              GET HELP
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Order Status
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Shipping and Delivery
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Returns
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Order Cancellation
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Payment Options
            </Col>
          </Row>
        </Col>
        <Divider plain></Divider>
        <Col span={24}>
          <Row>
            <Col span={24} className={styles.mainTitleFooter}>
              ABOUT US
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              News
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Careers
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Investors
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Purpose
            </Col>
            <Col span={24} className={styles.subTitleFooter}>
              Sustainability
            </Col>
          </Row>
        </Col>
        <Divider plain></Divider>
        <Col span={24}>
          <Row justify="start">
            <Col span={4}>
              <div className={styles.iconFooter}>
                <TwitterOutlined />
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.iconFooter}>
                <FacebookOutlined />
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.iconFooter}>
                <YoutubeOutlined />
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.iconFooter}>
                <InstagramOutlined />
              </div>
            </Col>
          </Row>
        </Col>
        <Divider plain></Divider>

        <Col span={24}>Viet Nam</Col>
        <Col span={24} className={styles.subTitleFooter}>
          2023 Nike, Inc. All Rights Reserved
        </Col>
        <Divider plain></Divider>

        <Col span={24} className={styles.mb}>
          <Row justify="start">
            <Col span={24} className={styles.terms}>
              Terms of Sale
            </Col>
            <Col span={24} className={styles.terms}>
              Terms of Use
            </Col>
            <Col span={24} className={styles.terms}>
              Privacy Policy
            </Col>
            <Col span={24} className={styles.terms}>
              Your Privacy Choices
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
  );
};

export default FooterMobile;

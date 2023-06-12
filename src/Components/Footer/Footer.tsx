import { Col, Row } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import styles from "./footer.module.css";
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <Row className={styles.container}>
        <Col span={12}>
          <Row>
            <Col span={8}>
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
            <Col span={8}>
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
            <Col span={8}>
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
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Col span={2}>
              <div className={styles.iconFooter}>
                <TwitterOutlined />
              </div>
            </Col>
            <Col span={2}>
              <div className={styles.iconFooter}>
                <FacebookOutlined />
              </div>
            </Col>
            <Col span={2}>
              <div className={styles.iconFooter}>
                <YoutubeOutlined />
              </div>
            </Col>
            <Col span={2}>
              <div className={styles.iconFooter}>
                <InstagramOutlined />
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.mb}>
          <Row justify="end">
            <Col
              span={2}
              className={styles.subTitleFooter}
              style={{ textAlign: "end" }}
            >
              Terms of Sale
            </Col>
            <Col
              span={2}
              className={styles.subTitleFooter}
              style={{ textAlign: "end" }}
            >
              Terms of Use
            </Col>
            <Col
              span={2}
              className={styles.subTitleFooter}
              style={{ textAlign: "end" }}
            >
              Privacy Policy
            </Col>
            <Col
              span={2}
              className={styles.subTitleFooter}
              style={{ textAlign: "end" }}
            >
              Your Privacy Choices
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row justify="start">
            <Col span={3}>Viet Nam</Col>
            <Col span={12} className={styles.subTitleFooter}>
              2023 Nike, Inc. All Rights Reserved
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Col span={24} className={styles.subTitle}>
              CA Supply Chains Act
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

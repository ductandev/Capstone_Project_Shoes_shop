// tsrfc
import { Checkbox, Col, Input, Row } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './payment.module.css'

type Props = {}

export default function Payment({ }: Props) {
    return (
        <Row className={styles.pt} justify={'center'} gutter={[16, 16]}>
            <Col xs={23} sm={21} md={15} lg={10} xl={7}>
                <h3 className={styles.title1}>How would you like to get your order?</h3>
                <button className={styles.btn1}>
                    <img className={styles.ms3} src="https://gs-checkout.nike.com/assets/images/delivery.svg?v=240f1f20a4016e43553468ae1c142e59" alt="..." />
                    <p className={styles.deliver}>Deliver IT</p>
                </button>
                <button className={styles.btn2}>Become a Member</button>
                <button className={styles.btn2}>Login</button>
                <h2 className={styles.title1}>Enter your name and address:</h2>
                <input className={styles.input1} placeholder="First Name" />
                <input className={styles.input1} placeholder="Last Name" />
                <input className={styles.input1} placeholder="Address Line 1" />
                <input className={styles.input1} placeholder="Address Line 2" />
                <input className={styles.input1} placeholder="Address Line 3" />
                <Row justify={'space-between'} gutter={[16,32]}>
                    <Col sm={24} lg={12}>
                        <input className={styles.input1} placeholder="Postal Code" />
                    </Col>
                    <Col sm={24} lg={12}>
                        <input className={styles.input1} placeholder="City" />
                    </Col>
                </Row>
                <select className={styles.input1} placeholder='Province/Municipality'>
                    <option value="">Province/Municipality</option>
                    <option value="1: Object">An Giang</option>
                    <option value="2: Object">Ba Ria-Vung Tau</option>
                    <option value="3: Object">Bac Giang</option>
                    <option value="4: Object">Bac Kan</option>
                    <option value="5: Object">Bac Lieu</option>
                    <option value="6: Object">Bac Ninh</option>
                    <option value="7: Object">Ben Tre</option>
                    <option value="8: Object">Binh Dinh</option>
                    <option value="9: Object">Binh Duong</option>
                    <option value="10: Object">Binh Phuoc</option>
                    <option value="11: Object">Binh Thuan</option>
                    <option value="12: Object">Ca Mau</option>
                    <option value="13: Object">Can Tho</option>
                    <option value="14: Object">Cao Bang</option>
                    <option value="15: Object">Da Nang</option>
                    <option value="16: Object">Dac Lac</option>
                    <option value="17: Object">Dak Nong</option>
                    <option value="18: Object">Dien Bien</option>
                    <option value="19: Object">Dong Nai</option>
                    <option value="20: Object">Dong Thap</option>
                    <option value="21: Object">Gia Lai</option>
                    <option value="22: Object">Ha Giang</option>
                    <option value="23: Object">Ha Nam</option>
                    <option value="24: Object">Ha Noi, thu do</option>
                    <option value="25: Object">Ha Tinh</option>
                    <option value="26: Object">Hai Duong</option>
                    <option value="27: Object">Thanh Pho Hai Phong</option>
                    <option value="28: Object">Hau Giang</option>
                    <option value="29: Object">Hoa Binh</option>
                    <option value="30: Object">Thanh Pho Ho Chi Minh</option>
                    <option value="31: Object">Hung yen</option>
                    <option value="32: Object">Khanh Hoa</option>
                    <option value="33: Object">Kien Giang</option>
                    <option value="34: Object">Kon Tum</option>
                    <option value="35: Object">Lai Chau</option>
                    <option value="36: Object">Lam Dong</option>
                    <option value="37: Object">Lang Son</option>
                    <option value="38: Object">Lao Cai</option>
                    <option value="39: Object">Long An</option>
                    <option value="40: Object">Nam Dinh</option>
                    <option value="41: Object">Nghe An</option>
                    <option value="42: Object">Ninh Binh</option>
                    <option value="43: Object">Ninh Thuan</option>
                    <option value="44: Object">Phu Tho</option>
                    <option value="45: Object">Phu yen</option>
                    <option value="46: Object">Quang Binh</option>
                    <option value="47: Object">Quang Nam</option>
                    <option value="48: Object">Quang Ngai</option>
                    <option value="49: Object">Quang Ninh</option>
                    <option value="50: Object">Quang Tri</option>
                    <option value="51: Object">Soc Trang</option>
                    <option value="52: Object">Son La</option>
                    <option value="53: Object">Tay Ninh</option>
                    <option value="54: Object">Thai Binh</option>
                    <option value="55: Object">Thai Nguyen</option>
                    <option value="56: Object">Thanh Hoa</option>
                    <option value="57: Object">Thua Thien-Hue</option>
                    <option value="58: Object">Tien Giang</option>
                    <option value="59: Object">Tra Vinh</option>
                    <option value="60: Object">Tuyen Quang</option>
                    <option value="61: Object">Vinh Long</option>
                    <option value="62: Object">Vinh Phuc</option>
                    <option value="63: Object">Yen Bai</option>
                </select>
                <button className={styles.input1}>
                    <Row justify={'space-between'}>
                        <Col className={styles.vietNam}>Vietnam</Col>
                        <Col className={styles.point}></Col>
                    </Row>

                </button>
                <h3 className={styles.title1}>What's your contact information?</h3>
                <input className={styles.input1} placeholder="Email" />
                <input className={styles.input1} placeholder="Phone Number" />

                <Checkbox className={styles.checkBox}>
                    I have read and consent to eShopWorld processing my information in accordance with the
                    <NavLink to="" className={styles.nav} target="_blank"> Privacy Statement </NavLink>
                     and
                    <NavLink to="" className={styles.nav} target="_blank"> Cookie Policy </NavLink>
                    . eShopWorld is a trusted Nike partner.
                </Checkbox>

                <button className={styles.btn3} disabled>Continue to Delivery</button>

                <hr />
                <p className={styles.title1}>Delivery</p>
                <hr />
                <p className={styles.title2}>Shipping</p>
                <hr />
                <p className={styles.title2}>Billing</p>
                <hr />
                <p className={styles.title2}>Payment</p>
            </Col>





            <Col className={styles.me} xs={23} sm={21} md={15} lg={10} xl={5}>
                <h2 className={styles.title3}>Order Summary</h2>
                <Row justify={'space-between'}>
                    <Col className={styles.title4}>
                        <span>Subtotal</span>
                    </Col>
                    <Col className={styles.title4}>
                        <span>30,952,000₫</span>
                    </Col>
                </Row>
                <Row justify={'space-between'}>
                    <Col className={styles.title4}>
                        <span>Delivery/Shipping</span>
                    </Col>
                    <Col className={styles.title4}>
                        <span>Free</span>
                    </Col>
                </Row>
                <hr />
                <Row justify={'space-between'}>
                    <Col className={styles.span}>
                        <span>Total</span>
                    </Col>
                    <Col className={styles.span}>
                        <span>30,952,000₫</span>
                    </Col>
                </Row>
                <hr />
                <p className={styles.time}>Arrives Fri, Jun 16 - Fri, Jun 23</p>
                
                <Row justify={'space-between'}>
                    <Col span={16}>
                        <img className={styles.img} src="https://shop.cyberlearn.vn/images/adidas-prophere.png" alt="" />
                    </Col>
                    <Col span={7}>
                        <p className={styles.textEnd}>Nike</p>
                        <p className={styles.textEnd}>Adiasss</p>
                        <p className={styles.textEnd}>7900000 $</p>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}
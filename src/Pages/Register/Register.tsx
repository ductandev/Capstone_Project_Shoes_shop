import { Row, Input, Col } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { DispatchType } from "../../Redux/configStore";
import { useDispatch } from "react-redux";
import { registerAsyncAction } from "../../Redux/reducers/userReducer";
import styles from "./register.module.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {};

export interface UserRegisterFrm {
  email: string;
  password: string;
  gender: string;
  name: string;
  phone: string;
}

// eslint-disable-next-line no-empty-pattern
export default function Register({}: Props) {
  const navigate = useNavigate();

  // const [passwordVisible, setPasswordVisible] = React.useState(false);
  const dispatch: DispatchType = useDispatch();

  const registerFrm = useFormik<UserRegisterFrm>({
    initialValues: {
      email: "",
      password: "",
      gender: "true",
      name: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("Email is invalid !"),
      password: yup
        .string()
        .required("password cannot be blank!")
        .min(6, "6 - 32 characters")
        .max(32, "6 - 32 characters"),
      name: yup.string().required("name cannot be blank"),
      phone: yup
        .string()
        .required("phone cannot be blank")
        .matches(/\d$/, "phone is numbers"),
    }),
    onSubmit: (values: UserRegisterFrm) => {
      console.log(values);
      const actionApi = registerAsyncAction(values);
      dispatch(actionApi);
      navigate("/login");
    },
  });

  return (
    <div className={styles.container}>
      <form className="container" onSubmit={registerFrm.handleSubmit}>
        <Row justify="center">
          <img
            src="../assets/image/logo/logo2.png"
            alt="Logo"
            className={styles.logo}
          />
        </Row>

        <h4
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            marginBottom: "40px",
          }}
        >
          BECOME A NIKE MEMBER
        </h4>
        <Input
          placeholder="Email address"
          onInput={registerFrm.handleChange}
          id="email"
          className={styles.inputRegister}
        />
        {registerFrm.errors.email && (
          <p className={styles.errorsText}>{registerFrm.errors.email}</p>
        )}
        <Input.Password
          onInput={registerFrm.handleChange}
          placeholder="Password"
          id="password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          className={styles.inputRegister}
        />
        {registerFrm.errors.password && (
          <p className={styles.errorsText}>{registerFrm.errors.password}</p>
        )}

        <Input
          placeholder="Your full name"
          onInput={registerFrm.handleChange}
          id="name"
          className={styles.inputRegister}
        />
        {registerFrm.errors.name && (
          <p className={styles.errorsText}>{registerFrm.errors.name}</p>
        )}

        <Input
          placeholder="Phone number"
          onInput={registerFrm.handleChange}
          id="phone"
          className={styles.inputRegister}
        />
        {registerFrm.errors.phone && (
          <p className={styles.errorsText}>{registerFrm.errors.phone}</p>
        )}

        <Row style={{ marginTop: "15px" }}>
          <Col span={12}>
            <div className={styles.radioInput}>
              <input
                placeholder="1212"
                id="gender1"
                name="gender"
                type="radio"
                value={"true"}
                onInput={registerFrm.handleChange}
              />
              <label htmlFor="gender1">Male</label>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.radioInput}>
              <input
                id="gender2"
                name="gender"
                type="radio"
                value={"false"}
                onInput={registerFrm.handleChange}
              />
              <label htmlFor="gender2">Female</label>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "15px" }}>
          <Col span={24} className={styles.textByRegister}>
            <p className={styles.displayBlockInline}>
              By creating an account, you agree to Nice's
            </p>
            <p className={styles.textPrivacy}> Privacy Policy</p>
            <p className={styles.displayBlockInline}> and </p>
            <p className={styles.textPrivacy}> Terms of Use.</p>
          </Col>
        </Row>

        <div className="form-group">
          <button type="submit" className={styles.buttonRegister}>
            Join Us
          </button>
        </div>
        <Row style={{ marginTop: "15px", textAlign: "end" }}>
          <Col span={12} className={styles.textRegisterFacebook}>
            Register With Facebook?
          </Col>
          <Col span={12}>
            <p className={styles.textNotAMenber}> Already a Member?</p>
            <p className={styles.textJoinUs}>
              <NavLink className="nav-link" to="/login">
                Sign In.
              </NavLink>
            </p>
          </Col>
        </Row>
      </form>
    </div>
  );
}

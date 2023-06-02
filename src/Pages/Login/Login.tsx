import { Radio, Row, Input, Col } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { DispatchType } from "../../Redux/configStore";
import { useDispatch } from "react-redux";
import { loginAsyncAction } from "../../Redux/reducers/userReducer";
import styles from "./login.module.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

type Props = {};

export interface UserLoginFrm {
  email: string;
  password: string;
}

export default function Login({}: Props) {
  // const [passwordVisible, setPasswordVisible] = React.useState(false);
  const dispatch: DispatchType = useDispatch();

  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank!")
        .email("Email is invalid !"),
      password: yup
        .string()
        .required("Password cannot be blank!")
        .min(6, "Password must be between 6 and 32 characters.")
        .max(32, "Password must be between 6 and 32 characters."),
    }),
    onSubmit: (values: UserLoginFrm) => {
      console.log(values);
      const actionApi = loginAsyncAction(values);
      dispatch(actionApi);
    },
  });

  return (
    <div className={styles.container}>
      <form className="container" onSubmit={loginFrm.handleSubmit}>
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
          YOUR ACCOUNT FOR EVERYTHING NICE
        </h4>
        <Input
          placeholder="Email address"
          onInput={loginFrm.handleChange}
          id="email"
          className={styles.inputLogin}
        />
        {loginFrm.errors.email && (
          <p className={styles.errorsText}>{loginFrm.errors.email}</p>
        )}
        <Input.Password
          onInput={loginFrm.handleChange}
          placeholder="Password"
          id="password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          className={styles.inputLogin}
        />
        {loginFrm.errors.password && (
          <p className={styles.errorsText}>{loginFrm.errors.password}</p>
        )}

        <Row style={{ marginTop: "15px" }}>
          <Col span={12}>
            <Radio className={styles.radioKeepSignIn}>Keep me signed in</Radio>
          </Col>
          <Col span={12} className={styles.textForgotPass}>
            Forgotten your password?
          </Col>

          <Col span={24} className={styles.textByLogin}>
            <p className={styles.displayBlockInline}>
              By logging in, you agree to Nice's
            </p>
            <p className={styles.textPrivacy}> Privacy Policy</p>
            <p className={styles.displayBlockInline}> and </p>
            <p className={styles.textPrivacy}> Terms of Use.</p>
          </Col>
        </Row>

        <div className="form-group">
          <button type="submit" className={styles.buttonLogin}>
            Sign In
          </button>
        </div>
        <Row style={{ marginTop: "15px", textAlign: "end" }}>
          <Col span={12} className={styles.textLoginFacebook}>
            Login With Facebook?
          </Col>
          <Col span={12}>
            <p className={styles.textNotAMenber}> Not a menber?</p>
            <p className={styles.textJoinUs}>
              <NavLink className="nav-link" to="/register">
                Join Us.
              </NavLink>
            </p>
          </Col>
        </Row>
      </form>
    </div>
  );
}

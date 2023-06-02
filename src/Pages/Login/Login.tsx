import React from "react";
import { useFormik } from "formik";
import { DispatchType } from "../../Redux/configStore";
import { useDispatch } from "react-redux";
import { loginAsyncAction } from "../../Redux/reducers/userReducer";
type Props = {};

export interface UserLoginFrm {
  email: string;
  password: string;
}

export default function Login({}: Props) {
  const dispatch: DispatchType = useDispatch();

  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: UserLoginFrm) => {
      console.log(values);
      const actionApi = loginAsyncAction(values);
      dispatch(actionApi);
    },
  });

  return (
    <form className="container" onSubmit={loginFrm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          name="email"
          id="email"
          onInput={loginFrm.handleChange}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          name="password"
          id="password"
          type="password"
          onInput={loginFrm.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>
    </form>
  );
}

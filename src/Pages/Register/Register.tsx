// tsrfc
import React from "react";
import { http } from "../../utils/config";

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

type Props = {};

export default function Register({}: Props) {
  const navigate = useNavigate();
  const registerFrm = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: "true",
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
    onSubmit: async (values) => {
      console.log(values);
      try {
        //Lấy dữ liệu từ form => call api gửi dữ liệu đi
        const res = await http.post("/api/Users/signup", values);
        alert(res.data?.message);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <form className="container" onSubmit={registerFrm.handleSubmit}>
      <h3>Register</h3>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p>Email</p>
            <input
              className="form-control"
              id="email"
              name="email"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.email && (
              <p className="alert alert-danger">{registerFrm.errors.email} </p>
            )}
          </div>
          <div className="form-group">
            <p>Password</p>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.password && (
              <p className="alert alert-danger">
                {registerFrm.errors.password}{" "}
              </p>
            )}
          </div>
          <div className="form-group mt-2">
            <p>Gender</p>
            <input
              className="form-check-input"
              id="gender1"
              name="gender"
              type="radio"
              value={"true"}
              onInput={registerFrm.handleChange}
            />
            <label htmlFor="gender1">Male</label>
            <input
              className="form-check-input"
              id="gender2"
              name="gender"
              type="radio"
              value={"false"}
              onInput={registerFrm.handleChange}
            />{" "}
            <label htmlFor="gender2">Female</label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              id="name"
              name="name"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.name && (
              <p className="alert alert-danger">{registerFrm.errors.name} </p>
            )}
          </div>
          <div className="form-group">
            <p>Phone</p>
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="number"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.phone && (
              <p className="alert alert-danger">{registerFrm.errors.phone} </p>
            )}
          </div>
          <div className="form-group mt-2">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={!registerFrm.isValid}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

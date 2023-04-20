import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterSchema } from "../../schemas";
import Loading from "../Loading";

import axios from "axios";
// icon
import {
  CloseCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";

import Footer from "../../Footer/Footer";
import { UserContext } from "../../Context/UserContext";

const Register = () => {
  const { setUser, setFirstName, setLastName } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // forms
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,

    onSubmit: data => {
      setLoading(true);

      axios
        .post("https://isekai-backend.onrender.com/api/register", {
          firstName: data.firstname,
          lastName: data.lastname,
          email: data.email,
          password: data.password,
        })
        .then(response => {
          setFirstName(data.firstname);
          setLastName(data.lastname);
          setUser(true);
          navigate("/");
          toast.success("Registration sucessfully!");
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setWarningSign(true);
          setLoading(false);
        });
    },
  });

  const [PasswordType, setPasswordType] = useState("password");
  function togglePasswordType() {
    if (PasswordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  // show/hide unsuccessful registration
  const [WarningSign, setWarningSign] = useState(false);
  function toggleWarningSign() {
    if (WarningSign) {
      setWarningSign(false);
    }
  }
  return (
    <>
      <div className="register">
        <h1 className="heading">Register</h1>
        <p className="sub-heading">Please fill in the information below:</p>
        <form method="POST" onSubmit={formik.handleSubmit}>
          {/* error message */}
          {WarningSign ? (
            <div className={WarningSign ? "show" : "hide"}>
              <div className="error-msg">
                <h3>Registration not successful</h3>
                <button type="button" onClick={toggleWarningSign}>
                  <CloseCircleOutlined style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="bundle">
            <div>
              {/* first name */}
              <label htmlFor="first-name">
                <h3 className="label">First Name:</h3>
              </label>
            </div>
            <input
              type="text"
              id="firstname"
              className={
                formik.errors.firstname && formik.touched.firstname
                  ? "input-error"
                  : ""
              }
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={toggleWarningSign}
            />
            {formik.errors.firstname && formik.touched.firstname && (
              <p className="error">{formik.errors.firstname}</p>
            )}
          </div>
          <div className="bundle">
            <div>
              {/* last name */}
              <label htmlFor="last-name">
                <h3 className="label">LastName:</h3>
              </label>
            </div>
            <input
              type="text"
              id="lastname"
              className={
                formik.errors.lastname && formik.touched.lastname
                  ? "input-error"
                  : ""
              }
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={toggleWarningSign}
            />
            {formik.errors.lastname && formik.touched.lastname && (
              <p className="error">{formik.errors.lastname}</p>
            )}
          </div>
          <div className="bundle">
            <div>
              {/* email */}
              <label htmlFor="email">
                <h3 className="label">Email</h3>
              </label>
            </div>
            <input
              type="email"
              id="email"
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
          <div className="bundle">
            <div>
              {/* password */}
              <label htmlFor="password">
                <h3 className="label">Password</h3>
              </label>
            </div>
            <div className="password-holder">
              <input
                type={PasswordType}
                id="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "input-error"
                    : ""
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="password"
                onClick={togglePasswordType}
              >
                {PasswordType === "password" ? (
                  <EyeInvisibleOutlined
                    style={{ fontSize: "20px" }}
                    className="hide-password"
                  />
                ) : (
                  <EyeOutlined
                    style={{ fontSize: "20px" }}
                    className="show-password"
                  />
                )}
              </button>
              {formik.errors.password && formik.touched.password && (
                <p className="error">{formik.errors.password}</p>
              )}
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="submit-btn"
              style={{ cursor: "pointer" }}
            >
              REGISTER
            </button>
          )}
        </form>
        <div>
          <p>
            Already have an account?<Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

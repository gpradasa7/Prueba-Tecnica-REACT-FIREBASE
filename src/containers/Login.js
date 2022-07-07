import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import { authentication } from "../Firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../helpers/getUserInfo";
import Swal from "sweetalert2";
import {
  actionLoginAsync,
  FacebookLogin,
  GoogleLogin,
} from "../redux/actions/actionLogin";
import "../styles/loginStyles.css";

authentication.useDeviceLanguage();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: loginError } = useSelector(store => store.loginStore);

  const onFinish = values => {
    const { email, password } = values;
    dispatch(actionLoginAsync(email, password));
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  if (loginError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Datos de login incorrectos",
    }).then(() => {
      dispatch(getUserInfo(undefined));

      onFinishFailed();
    });
  } else {
    if (loginError === false) {
      navigate("/home");
    }
  }

  return (
    <div style={{ width: "550px", margin: "3em" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#2BE7E8",
              border: "none",
              borderRadius: "63px",
              margin: "20px 0 ",
              padding: "7px 25px",
            }}
            block
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "140px",
            flexDirection: "row",
            margin: "0 auto",
          }}
        >
          <Button
            type="primary"
            htmlType="button"
            onClick={() => dispatch(GoogleLogin())}
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
            }}
          >
            <img src={google} alt="google" />
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => dispatch(FacebookLogin())}
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
            }}
          >
            <img src={facebook} alt="facebook" />
          </Button>
        </div>
        <br></br>
        <p style={{ margin: "0 auto" }}>
          <Link to="/register">Click here</Link> if you still don't have an
          account!
        </p>
      </div>
    </div>
  );
};

export default Login;

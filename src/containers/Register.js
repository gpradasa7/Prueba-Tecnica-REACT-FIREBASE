import { Button, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { actionRegisterAsync } from "../redux/actions/actionRegister";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: registerError } = useSelector(store => store.registerStore);

  const onFinish = values => {
    try {
      const { fullname, email, password } = values;

      dispatch(actionRegisterAsync(fullname, email, password));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  if (registerError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ha ocurrido un error registrando tus datos!",
    });
  } else {
    if (registerError === false) {
      Swal.fire({
        icon: "success",
        title: "Felicidades",
        text: "Te has registrado con exito!",
      }).then(() => {
        navigate("/");
      });
    }
  }

  return (
    <div style={{ width: 400, margin: "3em" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
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
          <Input />
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
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
      <p>
        If you already have an account, <Link to="/">go back to login!</Link>
      </p>
    </div>
  );
};

export default Register;

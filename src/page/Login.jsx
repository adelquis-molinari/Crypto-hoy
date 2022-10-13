import { useState } from "react";
import {
  Form,
  Input,
  Checkbox,
  Row,
  Col,
  Typography,
  Button,
  message,
} from "antd";
import { rulesEmail, rulesPassword } from "../utils/rules/rulesForm";
import "../styles/Login.css";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [errorSpan, setErrorSpan] = useState("");

  const onFinish = (e) => {
    // TODO: agregar
    setErrorSpan("");
    logIn(e.email, e.password)
      .then(() => navigate("/"))
      .catch((e) => {
        if (e.code === "auth/wrong-password") {
          message.error("There was a typo, wrong password 😵");
          setErrorSpan("There was a typo, wrong password 😵");
        } else if (e.code === "auth/user-not-found") {
          message.error("Ouuups! User not found 😫");
          setErrorSpan("Ouuups! User not found 😫");
        } else {
          message.error("Could it be that you don't have an account? 🤔");
          message.info("Try creating one! Register now!");
          setErrorSpan("Try creating one! Register now!");
        }
      });
  };
  return (
    <>
      <Row justify="center" align="middle" className="login-container">
        <Col span={12} md={6}>
          <Col level={3} className="login-title-logo">
            <img src="/cryptoHoy.png" alt="crypto hoy" className="login-logo" />
          </Col>
          <Col level={3} className="login-title">
            <Typography.Title level={2}>Login</Typography.Title>
          </Col>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item label="E-mail" name="email" rules={rulesEmail}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={rulesPassword}>
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <span className="error-span">{errorSpan}</span>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <span>
              Don't have an account?
              <Button type="link" href="/register">
                Register
              </Button>
            </span>
          </Form>
        </Col>
      </Row>
    </>
  );
}

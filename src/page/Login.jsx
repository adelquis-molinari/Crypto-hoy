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

  const onFinish = async (e) => {
    // TODO: agregar
    setErrorSpan("");
    await logIn(e.email, e.password)
      .then(() => navigate("/"))
      .catch((e) => {
        if (e.code === "auth/wrong-password") {
          message.error("Hubo un error, contraseña incorrecta 😵");
          setErrorSpan("Hubo un error, contraseña incorrecta 😵");
        } else if (e.code === "auth/user-not-found") {
          message.error("Ouuups! Usuario no encontrado 😫");
          setErrorSpan("Ouuups! Usuario no encontrado 😫");
        } else {
          message.error("¿Será que no tienes cuenta? 🤔");
          message.info("¡Intenta crear uno! ¡Regístrate ahora!");
          setErrorSpan("¡Intenta crear uno! ¡Regístrate ahora!");
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
            <Typography.Title level={1}>Crypto Hoy</Typography.Title>
            <Typography.Title level={5}>
              Inicia sesión para continuar
            </Typography.Title>
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
            <span className="error-span">{errorSpan}</span>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <span>
              No tienes cuenta?
              <Button type="link" href="/register">
                Registrate
              </Button>
            </span>
          </Form>
        </Col>
      </Row>
    </>
  );
}

import { useState } from "react";
import { Row, Col, Typography } from "antd";
import "../styles/Login.css";
import FormRegister from "./Register";
import FormInit from "../components/FormInit";

export default function Login() {
  const [formChange, setFormChange] = useState(false);

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
          {formChange ? (
            <FormRegister setFormChange={setFormChange} />
          ) : (
            <FormInit setFormChange={setFormChange} />
          )}
        </Col>
      </Row>
    </>
  );
}

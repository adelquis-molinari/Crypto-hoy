import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { rulesEmail, rulesPassword } from "../utils/rules/rulesForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function FormInit({ setFormChange }) {
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
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
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
        No tienes cuenta?{" "}
        <Button onClick={() => setFormChange(true)} style={{ border: "none" }}>
          Registrate
        </Button>
      </span>
    </Form>
  );
}

export default FormInit;

import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import {
  rulesEmail,
  rulesConfirmPassword,
  rulesPassword,
  rulesGender,
  rulesNick,
} from "../utils/rules/rulesForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/factures/userDataSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 10,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(setUserData({ nickname: values.nickname, gender: values.gender }));
    const user = signUp(values.email, values.password);
    navigate("/");
  };

  return (
    <>
      <Row justify="center" align="middle" className="login-container">
        <Col span={12} md={6}>
          <Col level={3} className="login-title-logo">
            <img src="/cryptoHoy.png" alt="crypto hoy" className="login-logo" />
          </Col>
          <Col level={3} className="login-title">
            <Typography.Title level={2}>Registrarse!</Typography.Title>
          </Col>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item name="email" label="E-mail" rules={rulesEmail}>
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={rulesPassword}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={rulesConfirmPassword}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={rulesNick}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              Ya tengo una cuenta
              <Button type="link" href="/login">
                ir al inicio
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;

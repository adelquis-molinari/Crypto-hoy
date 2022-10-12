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

  const onFinish = (values) => {
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
            <Typography.Title level={2}>Sign Up</Typography.Title>
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

            <Form.Item name="gender" label="Gender" rules={rulesGender}>
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              I already have an account
              <Button type="link" href="/login">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
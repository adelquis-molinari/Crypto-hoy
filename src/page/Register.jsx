import { Button, Form, Input } from "antd";
import {
  rulesEmail,
  rulesConfirmPassword,
  rulesPassword,
  rulesNick,
} from "../utils/rules/rulesForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FormRegister = ({ setFormChange }) => {
  const [form] = Form.useForm();
  const { signUp } = useAuth();
  const navigate = useNavigate();

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

  const onFinish = async (values) => {
    await signUp(values.email, values.password).then(() => navigate("/"));
  };

  return (
    <>
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
          <Button
            onClick={() => setFormChange(false)}
            style={{ border: "none" }}
          >
            ir al inicio
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormRegister;

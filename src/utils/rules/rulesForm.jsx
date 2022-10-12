const rulesEmail = [
  {
    type: "email",
    message: "The input is not valid E-mail!",
  },
  {
    required: true,
    message: "Please input your E-mail!",
  },
];
const rulesPassword = [
  { required: true, message: "Please input your password!" },
  {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      "The password must have at least 8 characters, a capital letter, a lowercase and a number",
  },
];
const rulesConfirmPassword = [
  {
    required: true,
    message: "Please confirm your password!",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }

      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    },
  }),
];

const rulesNick = [
  {
    required: true,
    message: "Please input your nickname!",
    whitespace: true,
  },
];
const rulesGender = [
  {
    required: true,
    message: "Please select gender!",
  },
];

export {
  rulesEmail,
  rulesPassword,
  rulesConfirmPassword,
  rulesNick,
  rulesGender,
};

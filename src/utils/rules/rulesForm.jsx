const rulesEmail = [
  {
    type: "email",
    message: "E-mail no  valido!",
  },
  {
    required: true,
    message: "Por favor ingrese su e-mail!",
  },
];
const rulesPassword = [
  { required: true, message: "Por favor ingrase su Password!" },
  {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      "El password debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número",
  },
];
const rulesConfirmPassword = [
  {
    required: true,
    message: "Por favor confirme su password!",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }

      return Promise.reject(
        new Error("Los dos password que ingresaste no coinciden!")
      );
    },
  }),
];

const rulesNick = [
  {
    required: true,
    message: "Por favor ingrese su nickname!",
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

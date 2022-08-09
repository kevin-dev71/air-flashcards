import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signUp } from "../firebase/auth";
import FormField from "../modules/Auth/components/FormField";
import Form from "../modules/Auth/Form";

const Register: React.FC = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password, repeatPassword } = state;

    if (!password || !repeatPassword || !email) {
      window.alert("Please fill all fields");
      return;
    }

    if (password !== repeatPassword) {
      window.alert("Passwords do not match");
      return;
    }

    const user = await signUp(email, password);

    if (user) {
      window.alert("User created");
      console.log(user);
    } else {
      window.alert("User not created");
    }
  };

  return (
    <Form
      title="Registrate"
      onSubmit={handleSubmitRegister}
      submitLabel="Registrate"
    >
      <FormField
        name="email"
        label="Email"
        type="email"
        onChange={handleChange}
      />

      <FormField
        name="password"
        label="Contraseña"
        type="password"
        onChange={handleChange}
      />

      <FormField
        name="repeatPassword"
        label="Repetir Contraseña"
        type="password"
        onChange={handleChange}
      />
    </Form>
  );
};

export default Register;
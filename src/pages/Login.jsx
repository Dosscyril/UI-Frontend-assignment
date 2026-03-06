import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        Signin to your PopX account
      </h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </p>
      <InputField
        label="Email Address"
        placeholder="Enter email address"
      />
      <InputField
        label="Password"
        placeholder="Enter password"
      />
      <Button
        text="Login"
        onClick={() => navigate("/settings")}
      />
    </div>
  );
}
export default Login;
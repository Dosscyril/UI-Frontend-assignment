import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end h-full">
      <div>
        <h1 className="text-2xl font-bold mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>
      </div>
      <div>
        <Button
          text="Create Account"
          onClick={() => navigate("/create")}
        />
        <Button
          text="Already Registered? Login"
          type="secondary"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
}
export default Welcome;
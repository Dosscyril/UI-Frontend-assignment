import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
function CreateAccount() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Create your PopX account
      </h1>
      <InputField label="Full Name*" placeholder="Marry Doe" />
      <InputField label="Phone number*" placeholder="Marry Doe" />
      <InputField label="Email address*" placeholder="Marry Doe" />
      <InputField label="Password*" placeholder="Marry Doe" />
      <InputField label="Company name" placeholder="Marry Doe" />
      <div className="mb-4">
        <p className="text-xs text-purple-600 font-semibold mb-2">
          Are you an Agency?
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="agency" />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="agency" />
            No
          </label>
        </div>
      </div>
      <Button
        text="Create Account"
        onClick={() => navigate("/settings")}
      />
    </div>
  );
}
export default CreateAccount;
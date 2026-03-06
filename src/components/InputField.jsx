import React from "react";
function InputField({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="text-xs text-purple-600 font-semibold">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
}
export default InputField;
import React from "react";
function Button({ text, onClick, type = "primary" }) {
  const styles =
    type === "primary"
      ? "bg-gradient-to-r from-[#6C25FF] to-[#8F5BFF] text-white"
      : "bg-[#E6D9FF] text-gray-800";
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-lg font-semibold mt-4 ${styles}`}
    >
      {text}
    </button>
  );
}
export default Button;
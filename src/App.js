import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">

        <div className="w-[375px] h-[812px] bg-white rounded-xl shadow-xl p-6 overflow-y-auto">

          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<AccountSettings />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
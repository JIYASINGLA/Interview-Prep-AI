import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import { validateEmail }  from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    try{
    } catch (error) {
      if (error.response && error.response.data.message) {
      } else {
        setError("Something went wrong. Please try again.")
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#FFFCEF] px-4 py-10">
      {/* Login Card */}
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative"
        style={{ minHeight: "420px", maxHeight: "480px" }}
      >
        {/* Heading */}
        <h3 className="text-2xl font-bold text-[#FF9324] text-center z-0 relative">
          Welcome Back 🔑
        </h3>
        <p className="text-sm text-gray-700 text-center mt-1 mb-6 z-0 relative">
          Please enter your details to log in
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 z-0 relative">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white font-semibold hover:from-[#e99a4b] hover:to-[#FF9324] transition-all duration-300 shadow-md"
          >
            LOGIN
          </button>

          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="accent-[#FF9324]" />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-[#FF9324] hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </form>

        {/* 🔴 Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-3">{error}</p>
        )}

        <p className="text-sm text-gray-700 text-center mt-5 z-0 relative">
          Don’t have an account?{" "}
          <button
            className="font-semibold text-[#FF9324] hover:underline"
            onClick={() => setCurrentPage("signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

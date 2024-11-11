import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      setIsLogin(true)
      alert('Registered Successfull')
    }
    if (isLogin) {
      navigate('/')
      alert('Logged in Successfull')
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryBG">
      <div className="backdrop-blur-md bg-white bg-opacity-60 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-200"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <button onClick={toggleForm} className="mt-4 text-blue-400 text-sm hover:underline">
          {isLogin ? "Create an account" : "Have an account? Log in"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;

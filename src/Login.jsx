import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("ratan@gamil.com");
  const [password, setPassword] = useState("Ratan@123");
  console.log(email, password);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("inside");
    try {
      const result = await axios.post(
        "http://localhost:3001/login",
        {
          emailId: email, // Keep emailId here as the server expects this
          password,
        },
        { withCredentials: true }
      );
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-200 text-primary-content w-96 shadow-lg">
        <div className="card-body">
          <div className="w-full flex justify-center">
            <h2 className="card-title text-white">Login</h2>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

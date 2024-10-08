import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";

const Login = () => {
  const [email, setEmail] = useState("ratan@gamil.com");
  const [password, setPassword] = useState("Ratan@123");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        BASE_URL + "/login",
        {
          emailId: email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(result.data));
      return navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
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
                className="input text-white input-bordered w-full"
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
                className="input text-white input-bordered w-full"
              />
            </div>
            <p className="text-red-600 mb-3 text-sm">{errorMessage}</p>
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

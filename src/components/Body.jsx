import axios from "axios";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    //if already present then no need for another api call
    if (userData) return;
    try {
      const result = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(result.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;

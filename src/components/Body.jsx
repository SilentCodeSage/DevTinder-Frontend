
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;

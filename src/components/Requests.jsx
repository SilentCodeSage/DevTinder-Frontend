import { useEffect } from "react";
import RequestsList from "./RequestsList";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector((store) => store.request);
  console.log(connectionRequests)

  const fetchRequests = async () => {
    const result = await axios.get(BASE_URL + "/user/requests/received",{withCredentials:true});
    console.log(result);
    dispatch(addConnectionRequests(result.data));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
     {connectionRequests && <RequestsList />}
    </div>
  );
};

export default Requests;

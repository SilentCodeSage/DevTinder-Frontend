import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionsList from "./ConnectionsList";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  console.log(connections);
  const getConnections = async () => {
    try {
      const result = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(result.data);
      dispatch(addConnections(result.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (connections && connections.length === 0) {
    return (
      <h1 className="text-2xl font-bold mt-8 mb-6 text-gray-800 dark:text-white">
        No Connections
      </h1>
    );
  }
  return (
    connections && (
      <>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mt-8 mb-6 text-gray-800 dark:text-white">
            Connections
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {connections &&
              connections.map((data) => (
                <ConnectionsList key={data._id} data={data} />
              ))}
          </div>
        </div>
      </>
    )
  );
};

export default Connections;

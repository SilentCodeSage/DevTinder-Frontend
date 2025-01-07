import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateConnectionRequests } from "../utils/requestSlice";

const RequestsList = () => {
  const connectionRequests = useSelector((store) => store.request);
  console.log(connectionRequests)
  const dispatch = useDispatch();

  const acceptRequest = async (id, status) => {
    try {
      const result = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      console.log(result);

      // Dispatch the action to update the state after accepting the request
      console.log(id)
      dispatch(updateConnectionRequests(id));
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  return (
    connectionRequests && (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Connection Requests</h2>
        <div className="space-y-4">
          {connectionRequests.length > 0 ? (
            connectionRequests.map((request) => (
              <div
                key={request._id} // Changed to request._id to match the API response
                className="p-4 bg-base-300 rounded-lg shadow flex justify-between items-center"
              >
                {/* Profile image and name */}
                <div className="flex items-center">
                  <img
                    src={
                      request.fromUserId?.profileUrl || "/default-avatar.png"
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="text-lg">
                    {request.fromUserId?.firstName +
                      " " +
                      request.fromUserId?.lastName || "No Name"}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="btn btn-success"
                    onClick={() => acceptRequest(request._id, "accepted")}
                  >
                    Accept
                  </button>
                  <button className="btn btn-error">Reject</button>
                </div>
              </div>
            ))
          ) : (
            <p>No connection requests at the moment.</p>
          )}
        </div>
      </div>
    )
  );
};

export default RequestsList;

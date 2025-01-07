import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { useEffect } from "react";

const UserCard = (user) => {
  const dispatch = useDispatch();
  // Destructuring the user object
  const { _id,firstName, lastName, profileUrl, age, gender, skills, about } =
    user.user;
  console.log(skills);

  // Split the skills string into an array and trim whitespace
  const skillList =
    skills && skills[0]?.split(",").map((skill) => skill.trim());

  const handleFeed = async (status, userId) => {
    try {
      const result = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      console.log(result);
      dispatch(removeFeed(userId));
    } catch (error) {
      console.log(error);
    }
  };

  // Return JSX if user exists
  return (
    user && (
      <div className="flex justify-center items-center h-full">
        <div className="card bg-base-300 w-96 shadow-lg rounded-lg overflow-hidden">
          <figure className="flex justify-center">
            <img
              src={profileUrl}
              alt="Profile Picture"
              className="w-full rounded-xl p-2 h-72 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center">
              {`${firstName} ${lastName}`}
            </h2>

            {/* Age and Gender formatted */}
            <div className="flex justify-center items-center mt-2 text-gray-600 text-lg">
              <p className="mr-2">{age} years old</p>
              <span className="mx-2">•</span>
              <p>{gender}</p>
            </div>

            {/* Display the skills as badges */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {skillList &&
                skillList?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-md text-sm transition-transform transform hover:scale-105 hover:shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
            </div>

            {/* About Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-center text-gray-800">
                About
              </h3>
              <p className="mt-2 text-gray-600 text-center">{about}</p>
            </div>

            <div className="mt-6 flex justify-around">
              <button
                className="btn btn-outline btn-success text-lg px-6 py-3"
                onClick={() => handleFeed("like", _id)}
              >
                ✔
              </button>
              <button
                className="btn btn-outline btn-error text-lg px-6 py-3"
                onClick={() => handleFeed("pass", _id)}
              >
                ✘
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;

import React from "react";

const ConnectionsList = ({ data }) => {
  console.log(data);
  return (
    <div className="my-4">
      <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-center  bg-base-300">
        <img
          src={data.profileUrl || "https://via.placeholder.com/150"}
          alt="User profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {data.firstName} {data.lastName}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {data.skills ? data.skills : "No skills listed"}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-1">Age: {data.age}</p>
          <p className="text-gray-500 dark:text-gray-400">Gender: {data.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsList;

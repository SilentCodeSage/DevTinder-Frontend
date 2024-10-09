const UserCard = ( users ) => {
    // Destructuring the user object
    const { firstName, lastName, profileUrl, age, skills } = users.user[0];
  
    console.log(firstName, lastName, profileUrl, age, skills); // Check the user data
  
    // Return JSX if users exist
    return (
      users && (
        <div className="flex items-center justify-center h-full">
          <div className="card bg-base-300 w-96 shadow-lg rounded-lg overflow-hidden">
            <figure>
              <img
                src={profileUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} // Fallback image if profileUrl is undefined
                alt="Profile Picture"
                className="w-full rounded-xl p-2 h-72 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{`${firstName} ${lastName}`}</h2>
              <p className="text-gray-500 text-lg">
                {age} 
              </p>
              <div className="mt-6 flex justify-between mx-8">
                <button className="btn btn-outline btn-success text-lg px-6 py-3">
                  ✔
                </button>
                <button className="btn btn-outline btn-error text-lg px-6 py-3">
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
  
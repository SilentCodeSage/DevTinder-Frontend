import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import UserCard from "./UserCard";

const Profile = () => {
  const user = useSelector((store) => store.user);

  return (
    user && (
      <div className="h-full flex justify-evenly">
        <EditProfile user={user} />
        {console.log(user)}
        <UserCard user={user} />
      </div>
    )
  );
};

export default Profile;

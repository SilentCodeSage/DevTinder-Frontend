import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
const Feed = () => {
  const dispatch = useDispatch();

  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const result = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      console.log(result);
      dispatch(addFeed(result.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && <div className="h-full">
        <UserCard user = {feed} />
    </div>
    
  );
};

export default Feed;

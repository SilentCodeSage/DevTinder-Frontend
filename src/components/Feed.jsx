import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const getFeed = async () => {
    if (feed) return;
    try {
      const result = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      console.log(result.data);
      dispatch(addFeed(result.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) {
    return;
  }
  if(feed.length === 0){
    return <div>No new users.....</div>
  }
  return (
    <div className="h-full">
      {console.log(feed)}
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <div> ...Post</div>;
};

export default Posts;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
// import localData from "../localData.json";

const Posts = () => {
  const posts = useLoaderData();
  // const posts = localData;

  return (
    <div>
      <h1 className="blog-title">Ostara Tree Blog</h1>
      <Link to="/blog/new">New Post</Link>
      {posts.map((post, imgId) => (
        <BlogPost key={imgId} post={post} imgId={imgId} />
      ))}
    </div>
  );
};

export default Posts;

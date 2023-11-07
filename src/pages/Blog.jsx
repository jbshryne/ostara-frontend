import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
// import localData from "../localData.json";

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <div>
      <h1 className="blog-title">Ostara Tree Blog</h1>
      {posts.map((post, imgId) => (
        <BlogPost key={imgId} post={post} imgId={imgId} />
      ))}
      <Link to="/blog/new">
        <button>New Post</button>
      </Link>
    </div>
  );
};

export default Posts;

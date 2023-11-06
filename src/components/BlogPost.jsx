import React from "react";
import { Link } from "react-router-dom";

const bgImages = ["IMG_9872.jpg", "IMG_9865.jpg"];

const BlogEntry = ({ post, imgId }) => {
  const formattedDate = new Date(post.date_posted).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const contentPreview = post.content.split(" ").slice(0, 50).join(" ");

  return (
    <div className="entry-wrapper blog-entry">
      <Link
        to={`/blog/${post.id}/${post.slug}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <header className="entry-head">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(./assets/${bgImages[imgId]})` }}
          ></div>
          <div className="entry-head-text">
            <h2>{post.title}</h2>
            <span style={{ fontStyle: "italic" }}>{formattedDate}</span>
          </div>
        </header>
      </Link>
      <p className="entry-content" style={{ display: "inline-block" }}>
        {contentPreview}{" "}
        <Link
          to={`/blog/${post.id}/${post.slug}`}
          style={{ textDecoration: "none" }}
        >
          [...]
        </Link>
      </p>
    </div>
  );
};

export default BlogEntry;

import React from "react";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const slug = formData.title.toLowerCase().trim().replace(/ /g, "-");
    console.log({ ...formData, slug });
    const user = JSON.parse(localStorage.getItem("ost_user"));

    console.log(user, user.token);

    fetch("http://localhost:8000/posts/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`,
      },
      method: "POST",
      body: JSON.stringify({
        ...formData,
        slug,
        author: user.user_id,
      }),
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <form
        action="http://localhost:8000/posts"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Title of Entry"
          onChange={handleFormData}
        />
        <input
          type="text"
          name="content"
          placeholder="What's going on?"
          onChange={handleFormData}
        />
        <input type="submit" />
      </form>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

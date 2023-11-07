import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import slugify from "slugify";
// import TagManager from "../components/TagManager";

const EditEntry = () => {
  const entry = useLoaderData();
  //   console.log(entry);

  const [formData, setFormData] = useState({
    title: entry.title,
    content: entry.content,
  });
  // const [updatedTags, setUpdatedTags] = useState([]);

  // const updateTags = (post, selectedTags) => {
  //   // Create an array of tag IDs from the selectedTags
  //   const tagIds = selectedTags.map((tag) => tag.id);

  //   // Make a PUT request to update the tags for the post
  //   fetch(`http://localhost:8000/posts/${post.id}/update-tags/`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ tags: tagIds }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Tags updated successfully.");
  //       } else {
  //         console.error("Failed to update tags.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error while updating tags:", error);
  //     });
  // };

  // const slug = slugify(formData.title);

  const handleFormData = (event) => {
    if (event.target.name === "title") {
      const slug = slugify(event.target.value);

      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        slug: slug,
      });
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="new-entry-container">
      <Form
        action={`/blog/${entry.id}/${entry.slug}/update`}
        method="PUT"
        className="new-entry-form"
      >
        <input
          type="text"
          name="title"
          placeholder="Title of Entry"
          value={formData.title}
          className="new-entry-input"
          onChange={handleFormData}
        />
        <textarea
          name="content"
          placeholder="What's going on?"
          value={formData.content}
          className="new-entry-textarea"
          onChange={handleFormData}
        />
        <button type="submit" className="new-entry-submit">
          Update Entry
        </button>
        {/* <TagManager post={entry} onUpdateTags={updateTags} /> */}
      </Form>
    </div>
  );
};

export default EditEntry;

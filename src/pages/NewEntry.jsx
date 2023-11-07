import React, { useState } from "react";
import { Form } from "react-router-dom";
// import TagManager from "../components/TagManager";

const NewEntry = () => {
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

  return (
    <div className="new-entry-container">
      <Form action="/blog/new" method="POST" className="new-entry-form">
        <input
          type="text"
          name="title"
          placeholder="Title of Entry"
          className="new-entry-input"
          onChange={handleFormData}
        />
        <textarea
          name="content"
          placeholder="What's going on?"
          className="new-entry-textarea"
          onChange={handleFormData}
        />
        <input type="submit" className="new-entry-submit" />
      </Form>
    </div>
  );
};

export default NewEntry;

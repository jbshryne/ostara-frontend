import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

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
    <div>
      <Form action="/blog/new" method="POST">
        <input
          type="text"
          name="title"
          placeholder="Title of Entry"
          onChange={handleFormData}
        />
        <textarea
          name="content"
          placeholder="What's going on?"
          onChange={handleFormData}
        />
        <input type="submit" />
      </Form>
    </div>
  );
};

export default NewEntry;

import React, { useState, useEffect } from "react";

function TagManager({ post, onUpdateTags }) {
  console.log(post.tags);

  const [selectedTags, setSelectedTags] = useState([...post.tags]);
  const [availableTags, setAvailableTags] = useState([]);

  console.log(selectedTags);

  useEffect(() => {
    async function getTags() {
      const response = await fetch("http://localhost:8000/tags/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAvailableTags(data);
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    }
    getTags();
  }, []);

  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  const handleAddTag = () => {
    onUpdateTags(post, selectedTags); // Send the selected tags to the parent component
  };

  return (
    <div>
      <h3>Manage Tags</h3>
      <div>
        <label>Add Tags:</label>
        <select
          multiple
          value={selectedTags}
          onChange={(e) =>
            setSelectedTags(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {availableTags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={addTag}>Add Selected Tag</button>
      <button onClick={removeTag}>Remove Selected Tag</button>
      <button onClick={handleAddTag}>Save Tags</button>
      <div>
        <label>Selected Tags:</label>
        <ul>
          {selectedTags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TagManager;

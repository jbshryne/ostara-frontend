import React from "react";

const TagsList = ({ tags }) => {
  const tagList = tags.map((tag) => <li key={tag.id}>{tag.name}</li>);

  return (
    <div className="tags-list">
      tags: <ul>{tagList}</ul>
    </div>
  );
};

export default TagsList;

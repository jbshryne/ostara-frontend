import React from "react";
import { useLoaderData, Form } from "react-router-dom";

const ShowEntry = () => {
  const entry = useLoaderData();
  return (
    <div>
      <div>{entry.title}</div>
      <div>{entry.content}</div>
      <Form method="DELETE" action={`/blog/${entry.id}/${entry.slug}/delete`}>
        <button>Delete this entry</button>
      </Form>
    </div>
  );
};

export default ShowEntry;

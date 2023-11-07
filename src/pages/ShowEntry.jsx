import React from "react";
import { useLoaderData, Form, Link, useParams } from "react-router-dom";
import TagsList from "../components/TagsList";

const ShowEntry = () => {
  const { id } = useParams();
  const entries = useLoaderData();

  const entry = entries.find((entry) => entry.id.toString() === id);
  const currentIndex = entries.findIndex((entry) => entry.id.toString() === id);

  console.log(currentIndex);
  const prevEntry = entries[currentIndex + 1];
  const nextEntry = entries[currentIndex - 1];

  const formattedContent = entry.content
    .split("\n")
    .map((line, i) => <p key={i}>{line}</p>);

  return (
    <>
      <span className="entry-nav">
        {prevEntry && (
          <Link to={`/blog/${prevEntry.id}/${prevEntry.slug}`}>
            <button>Previous</button>
          </Link>
        )}
        <Link to="/blog">
          <button>Back to Blog</button>
        </Link>
        {nextEntry && (
          <Link to={`/blog/${nextEntry.id}/${nextEntry.slug}`}>
            <button>Next</button>
          </Link>
        )}
      </span>
      <div className="entry-wrapper">
        <span className="entry-date">
          {new Date(entry.date_posted).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <h2 id="entry-show-title">{entry.title}</h2>
        <div id="entry-show">{formattedContent}</div>
        <TagsList tags={entry.tags} />
      </div>
      <Link to={`/blog/${entry.id}/${entry.slug}/edit`}>
        <button>Edit this entry</button>
      </Link>
      <Form method="DELETE" action={`/blog/${entry.id}/${entry.slug}/delete`}>
        <button>Delete this entry</button>
      </Form>
    </>
  );
};

export default ShowEntry;

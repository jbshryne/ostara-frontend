export const entryLoader = async ({ params }) => {
  const response = await fetch(`http://localhost:8000/posts/${params.id}`);
  const entry = await response.json();
  return entry;
};

export const postsLoader = async ({ params }) => {
  return await fetch("http://localhost:8000/posts")
    .then((response) => response.json())
    .then((data) => {
      const sortedPosts = data.sort(
        (a, b) => new Date(b.date_posted) - new Date(a.date_posted)
      );
      return sortedPosts;
    })
    .catch((error) => console.error(error));
};

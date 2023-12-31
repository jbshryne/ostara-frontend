export const entryLoader = async ({ params }) => {
  // const response = await fetch(`http://localhost:8000/posts/${params.id}`);
  const response = await fetch(
    `https://ostara-tree-backend.onrender.com/posts/${params.id}`
  );
  const entry = await response.json();
  return entry;
};

export const postsLoader = async ({ params }) => {
  // return await fetch("http://localhost:8000/posts")
  return await fetch("https://ostara-tree-backend.onrender.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const sortedPosts = data.sort(
        (a, b) => new Date(b.date_posted) - new Date(a.date_posted)
      );
      return sortedPosts;
    })
    .catch((error) => console.error(error));
};

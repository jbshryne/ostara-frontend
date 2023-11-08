import { redirect } from "react-router-dom";

export const postAction = async ({ request }) => {
  let formData = await request.formData();
  const user = JSON.parse(localStorage.getItem("ost_user"));

  const slug = formData
    .get("title")
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9_-]+/g, "");

  // console.log(user, user.token);

  const body = JSON.stringify({
    title: formData.get("title"),
    content: formData.get("content"),
    slug,
    author: user.user_id,
  });

  // console.log(body);

  // await fetch("http://:8000/posts/", {
  let res = await fetch("https://ostara-tree-backend.onrender.com/posts/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
    method: "POST",
    body,
  });

  //   revalidator.revalidate();
  if (res.ok) return redirect("/blog");
  alert("Something went wrong");
};

export const deleteEntryAction = async ({ request, params }) => {
  const user = JSON.parse(localStorage.getItem("ost_user"));

  // await fetch(`http://localhost:8000/posts/${params.id}`, {
  await fetch(`https://ostara-tree-backend.onrender.com/posts/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
    method: "DELETE",
  });

  return redirect("/blog");
};

export const editEntryAction = async ({ request, params }) => {
  const user = JSON.parse(localStorage.getItem("ost_user"));
  let formData = await request.formData();

  console.log(formData.get("title"));
  console.log(params);

  const slug = formData
    .get("title")
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9_-]+/g, "");

  const body = JSON.stringify({
    title: formData.get("title"),
    content: formData.get("content"),
    slug,
    author: user.user_id,
  });

  // console.log(body);

  // await fetch(`http://localhost:8000/posts/${params.id}/`, {
  await fetch(`https://ostara-tree-backend.onrender.com/posts/${params.id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
    method: "PUT",
    body,
  });

  return redirect(`/blog/${params.id}/${slug}`);
};

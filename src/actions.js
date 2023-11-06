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

  await fetch("http://localhost:8000/posts/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title: formData.get("title"),
      content: formData.get("content"),
      slug,
      author: user.user_id,
    }),
  });

  //   revalidator.revalidate();
  return redirect("/blog");
};

export const deleteEntryAction = async ({ request, params }) => {
  const user = JSON.parse(localStorage.getItem("ost_user"));

  await fetch(`http://localhost:8000/posts/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user.token}`,
    },
    method: "DELETE",
  });

  return redirect("/blog");
};

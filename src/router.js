import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./App";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import NewEntry from "./pages/NewEntry";
import ShowEntry from "./pages/ShowEntry";
import { entryLoader, postsLoader } from "./loaders";
import { deleteEntryAction, editEntryAction, postAction } from "./actions";
import About from "./pages/About";
import EditEntry from "./pages/EditEntry";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} loader={postsLoader} />
      <Route path="blog/new" element={<NewEntry />} action={postAction} />
      <Route
        path="blog/:id/:slug"
        element={<ShowEntry />}
        loader={postsLoader}
      />
      <Route
        path="blog/:id/:slug/edit"
        element={<EditEntry />}
        loader={entryLoader}
      />
      <Route path="blog/:id/:slug/update" action={editEntryAction} />
      <Route path="blog/:id/:slug/delete" action={deleteEntryAction} />
    </Route>
  )
);

export default router;

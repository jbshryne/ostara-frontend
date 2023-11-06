import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import NewEntry from "./pages/NewEntry";
import ShowEntry from "./pages/ShowEntry";
import { entryLoader, postsLoader } from "./loaders";
import { deleteEntryAction, postAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blog />} loader={postsLoader} />
      <Route path="blog/new" element={<NewEntry />} action={postAction} />
      <Route
        path="blog/:id/:slug"
        element={<ShowEntry />}
        loader={entryLoader}
      />
      <Route path="blog/:id/:slug/delete" action={deleteEntryAction} />
    </Route>
  )
);

export default router;

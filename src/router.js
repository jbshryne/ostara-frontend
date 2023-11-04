import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Blog from "./pages/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  )
);

export default router;

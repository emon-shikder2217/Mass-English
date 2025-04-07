import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../src/pages/Home/Home"
import Courses from "./pages/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/course",
            element: <Courses />
        },
       
    ]
  }
]);

export default router;

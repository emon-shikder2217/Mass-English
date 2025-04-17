import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../src/pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'

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
            path: "/courses",
            element: <Courses />
        },
        {
          path: "/about",
          element: <About />
        },{
          path: "/contact",
          element: <Contact />
        }
       
    ]
  }
]);

export default router;

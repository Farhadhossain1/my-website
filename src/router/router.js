import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../pages/About/About/About";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects";

const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/project',
            element: <Projects></Projects>
        }
    ]
}
])
export default router;
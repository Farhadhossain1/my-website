import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../pages/About/About/About";
import Home from "../pages/Home/Home/Home";
import ProjectDetails from "../pages/Project.js/ProjectDetails/ProjectDetails";
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
        },
        {
            path: '/projectDetails/:id',
            element: <ProjectDetails></ProjectDetails>,
            loader: ({params}) =>fetch(`https://my-website-server.vercel.app/projects/${params.id}`)
        }
    ]
}
])
export default router;
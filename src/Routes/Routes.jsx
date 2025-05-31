import Main from "../Layout/Main/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Projects from "../Pages/Projects/Projects";
import Resources from "../Pages/Resources/Resources";
import Blog from "../Pages/Blog/Blog";
import Alumni from "../Pages/Alumni/Alumni";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Shared/Profile/Profile";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/resources',
                element: <Resources></Resources>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/alumni',
                element: <Alumni />
            },
            {
                path: '/contact',
                element:<Contact />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    },
])
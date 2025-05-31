import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DatathonDetailsPage from "./pages/datathonDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/datathon',
        element: <DatathonDetailsPage />, 
    }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import Mani from "../Layouts/Mani";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mani></Mani>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router
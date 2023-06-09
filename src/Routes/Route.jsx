import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login and Registaion/Login/Login";
import Registration from "../Pages/Login and Registaion/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login and Registaion/Login/Login";
import Registration from "../Pages/Login and Registaion/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";


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
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
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
            },
            {
                path: "manageclasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "addclass",
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: "myclasses",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: "myselectedclasses",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },

        ]
    }
])

export default router
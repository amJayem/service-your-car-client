import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Orders from "../Pages/CheckOut/Orders";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><CheckOut/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute>
                    <Orders/>
                </PrivateRoute>
            }
        ]
    }
])
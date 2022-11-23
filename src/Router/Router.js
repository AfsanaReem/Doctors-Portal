import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Second from '../Layout/Second';
import Appointment from '../Pages/Appointment/Appointment';
import AddDoctor from '../Pages/Dashboard/AddDoctor';
import AllUsers from '../Pages/Dashboard/AllUsers';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ManageDoctors from '../Pages/Dashboard/ManageDoctors';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Second></Second></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            }
        ]
    }
])
export default router;
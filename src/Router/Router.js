import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Appointment from '../Pages/Appointment/Appointment';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
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
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])
export default router;
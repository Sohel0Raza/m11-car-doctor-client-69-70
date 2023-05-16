import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SingUp from '../pages/singUp/SingUp';
import ErrorPage from '../pages/errorPage/ErrorPage';
import CheckOut from '../pages/checkOut/CheckOut';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/singup',
                element:<SingUp/>
            },
            {
                path:'checkOut/:id',
                element:<CheckOut></CheckOut>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params._id}`)
            }
        ]
    }
])
export default router;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Trains from '../Pages/Trains';

const Routes  = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
          children: [
            {
              path: "/",
              element: <Home/>,
            },
          {
            path: "/trains/:from/:to",
            element: <Trains/>,
          }]
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
      ]);

export default Routes;
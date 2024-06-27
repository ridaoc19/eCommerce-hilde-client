import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/Auth/Login/Login';
import Registre from '../pages/Auth/registre/Registre';
import Reset from '../pages/Auth/Reset/Reset';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'registre',
				element: <Registre />,
			},
			{
				path: 'reset',
				element: <Reset />,
			},
		],
	},
]);
export default router;

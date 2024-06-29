import { createBrowserRouter, Outlet } from 'react-router-dom';
import MessageList from '../components/MessageList/MessageList';
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
				element: (
					<>
						<MessageList />
						<Login />
					</>
				),
			},
			{
				path: 'registre',
				element: (
					<>
						<MessageList />
						<Registre />
					</>
				),
			},
			{
				path: 'reset',
				element: (
					<>
						<MessageList />
						<Reset />
					</>
				),
			},
		],
	},
]);
export default router;

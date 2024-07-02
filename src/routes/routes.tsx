import { createBrowserRouter } from 'react-router-dom';
import Change from '../pages/Auth/change/Change';
import Login from '../pages/Auth/Login/Login';
import Registre from '../pages/Auth/registre/Registre';
import Reset from '../pages/Auth/Reset/Reset';
import Home from '../pages/Home/Home';
import ProtectedAuth from './common/ProtectedAuth';
import Layout from '../components/layout/Layout';

const Auth = {
	path: '/',
	element: <ProtectedAuth />,
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
		{
			path: 'change',
			element: <Change />,
		},
	],
};

const Feature = [
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{ path: '*', element: <div>No Found</div> },
];

const router = createBrowserRouter([...Feature, Auth]);
export default router;

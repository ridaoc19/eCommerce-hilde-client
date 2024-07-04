import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Change from '../pages/Auth/change/Change';
import Login from '../pages/Auth/Login/Login';
import Registre from '../pages/Auth/registre/Registre';
import Reset from '../pages/Auth/Reset/Reset';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Navigation/Home/Home';
import ProtectedAuth from './common/ProtectedAuth';
import ProtectedDash from './common/ProtectedDash';
import NotFound from '../components/NotFound/NotFound';
import ProductList from '../pages/Navigation/ProductList/ProductList';
import ProductDetail from '../pages/Navigation/ProductDetail/ProductDetail';
import VerifyEmail from '../pages/verifyEmail/VerifyEmail';

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
	{
		path: '/list-products/:id',
		element: (
			<Layout>
				<ProductList />
			</Layout>
		),
	},
	{
		path: '/product-detail/:id',
		element: (
			<Layout>
				<ProductDetail />
			</Layout>
		),
	},
	{
		path: '/verify/:id',
		element: <VerifyEmail />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

const Dash = {
	path: '/',
	element: <ProtectedDash />,
	children: [
		{
			path: '/dashboard',
			element: (
				<Layout>
					<Dashboard />
				</Layout>
			),
		},
	],
};

const router = createBrowserRouter([...Feature, Auth, Dash]);
export default router;

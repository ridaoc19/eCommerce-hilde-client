import { Navigate, Outlet } from 'react-router-dom';

function ProtectedAuth() {
	if (localStorage?.token) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
}

export default ProtectedAuth;

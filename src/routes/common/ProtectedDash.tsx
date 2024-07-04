import { Navigate, Outlet } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import { authState } from '../../pages/Auth/authSlice';

function ProtectedDash() {
	const { user } = useAppSelector(authState);

	if (!user?.verifiedEmail) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
}

export default ProtectedDash;

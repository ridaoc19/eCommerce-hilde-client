import { ReactNode, useEffect } from 'react';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { authState, postToken, updateAuthState } from '../pages/Auth/authSlice';
import MessageList from './MessageList/MessageList';

const WrapperApp = ({ children }: { children: ReactNode }) => {
	const { status, user } = useAppSelector(authState);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (localStorage?.token && status === 'idle' && !user) {
			dispatch(postToken({ access_token: localStorage.token }));
		}
	}, []);

	useEffect(() => {
		if (status === 'error') {
			localStorage.removeItem('token');
			dispatch(updateAuthState({ user: null, status: 'idle' }));
		}

		if (status === 'success') {
			dispatch(updateAuthState({ status: 'idle' }));
		}
	}, [status]);

	return (
		<>
			<MessageList />
			{children}
		</>
	);
};

export default WrapperApp;

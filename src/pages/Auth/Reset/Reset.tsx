import { useEffect } from 'react';
import { ButtonType } from '../../../components/common/button/button.type';
import useAuth from '../hooks/useAuth/useAuth';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { authState, postReset, updateAuthState } from '../authSlice';
import useAppSelector from '../../../hooks/useAppSelector';

export default function Reset() {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector(authState);
	const navigate = useNavigate();
	const { Component, body, eventClick } = useAuth({
		component: 'reset',
		inputs: [{ iName: 'email', iPlaceholder: 'Correo electrónico' }],
		buttons: [
			{ bId: `reset`, bType: ButtonType.Dark, bText: 'Restablece contraseña', bValidate: true },
			{ bId: `back`, bType: ButtonType.Light, bText: 'Volver' },
		],
	});

	const handleClick = () => {
		switch (eventClick.value) {
			case 'back':
				return navigate('/login');
			case 'reset':
				return dispatch(postReset(body));
			default:
				break;
		}
	};

	useEffect(() => {
		eventClick.value && handleClick();
	}, [eventClick]);

	useEffect(() => {
		if (status === 'success') {
			dispatch(updateAuthState({ status: 'idle' }));
			navigate('/login');
		}
	}, [status]);

	return <div>{Component}</div>;
}

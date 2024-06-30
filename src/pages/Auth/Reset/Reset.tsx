import { useEffect } from 'react';
import { ButtonType } from '../../../components/common/button/button.type';
import useAuth from '../hooks/useAuth/useAuth';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { postReset } from '../authSlice';

export default function Reset() {
	const dispatch = useAppDispatch();
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

	return <div>{Component}</div>;
}

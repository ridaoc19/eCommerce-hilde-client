import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonType } from '../../../components/common/button/button.type';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAuth from '../hooks/useAuth/useAuth';
import { authState, postChange, updateAuthState } from '../authSlice';
import useAppSelector from '../../../hooks/useAppSelector';
import { postMessage } from '../../../redux/globalSlice';

export default function Change() {
	const dispatch = useAppDispatch();
	const { status, user } = useAppSelector(authState);
	const navigate = useNavigate();
	const { Component, eventClick, body } = useAuth({
		component: 'change',
		inputs: [
			{ iName: 'password', iPlaceholder: 'Contraseña' },
			{ iName: 'newPassword', iPlaceholder: 'Nueva contraseña' },
		],
		buttons: [
			{ bId: 'login', bType: ButtonType.Dark, bText: 'Cambiar Contraseña', bValidate: false },
			{ bId: 'back', bType: ButtonType.Light, bText: 'Volver' },
		],
	});

	const handleClick = () => {
		switch (eventClick.value) {
			case 'back':
				return navigate('/login');
			case 'login':
				return dispatch(postChange(body));
			default:
				break;
		}
	};

	useEffect(() => {
		if (!user?.email) {
			dispatch(
				postMessage({
					statusCode: 400,
					message: 'Si recargas la pagina, debes iniciar sesión nuevamente con las contraseña temporal',
				})
			);
			navigate('/login');
		}
	}, []);

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

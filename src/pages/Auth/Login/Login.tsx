import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonType } from '../../../components/common/button/button.type';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { authState, postLogin, updateAuthState } from '../authSlice';
import useAuth, { UseAuthProps } from '../hooks/useAuth/useAuth';
import useAppSelector from '../../../hooks/useAppSelector';

type ButtonIds = 'reset' | 'login' | 'registre' | 'back';
type InputName = 'email' | 'password';

const props: UseAuthProps<ButtonIds, InputName> = {
	component: 'login',
	inputs: [
		{ iName: 'email', iPlaceholder: 'Correo electrónico' },
		{ iName: 'password', iPlaceholder: 'Contraseña' },
	],
	buttons: [
		{ bId: 'reset', bType: ButtonType.Link, bText: 'Restablecer' },
		{ bId: 'login', bType: ButtonType.Dark, bText: 'Inicia Sesión', bValidate: true },
		{ bId: 'registre', bType: ButtonType.Dark, bText: 'Crear Cuenta' },
		{ bId: 'back', bType: ButtonType.Light, bText: 'Volver' },
	],
};

export default function Login() {
	const { Component, eventClick, body } = useAuth<ButtonIds, InputName>(props);
	const dispatch = useAppDispatch();
	const { status, user } = useAppSelector(authState);
	const navigate = useNavigate();

	const handleClick = () => {
		switch (eventClick.value) {
			case 'back':
				return navigate('/');
			case 'registre':
				return navigate('/registre');
			case 'reset':
				return navigate('/reset');
			case 'login':
				return dispatch(postLogin(body));
			default:
				return null;
		}
	};

	useEffect(() => {
		if (eventClick.value) {
			handleClick();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventClick]);

	useEffect(() => {
		if (status === 'success' && user) {
			if (!user.verified) {
				dispatch(updateAuthState({ status: 'idle' }));
				navigate('/change');
				return;
			}
			if (!user.verifiedEmail) {
				dispatch(updateAuthState({ user: null, status: 'idle' }));
			}
			dispatch(updateAuthState({ status: 'idle' }));
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, user]);

	return <div>{Component}</div>;
}

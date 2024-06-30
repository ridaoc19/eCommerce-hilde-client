import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonType } from '../../../components/common/button/button.type';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { postLogin } from '../authSlice';
import useAuth, { UseAuthProps } from '../hooks/useAuth/useAuth';

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
				break;
		}
	};

	useEffect(() => {
		eventClick.value && handleClick();
	}, [eventClick]);

	return <div>{Component}</div>;
}

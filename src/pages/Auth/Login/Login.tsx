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
		{ name: 'email', placeholder: 'Correo electrónico' },
		{ name: 'password', placeholder: 'Contraseña' },
	],
	buttons: [
		{
			id: 'reset',
			type: ButtonType.Link,
			text: 'Restablecer',
		},
		{
			id: 'login',
			type: ButtonType.Dark,
			text: 'Inicia Sesión',
		},
		{
			id: 'registre',
			type: ButtonType.Dark,
			text: 'Crear Cuenta',
		},
		{
			id: 'back',
			type: ButtonType.Light,
			text: 'Volver',
		},
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
		if (eventClick.value) {
			handleClick();
		}
	}, [eventClick]);

	return <div>{Component}</div>;
}

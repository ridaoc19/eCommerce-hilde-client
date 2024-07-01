import { useEffect } from 'react';
import useAuth from '../hooks/useAuth/useAuth';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { authState, postRegistre, updateAuthState } from '../authSlice';
import { ButtonType } from '../../../components/common/button/button.type';
import { useNavigate } from 'react-router-dom';
import useAppSelector from '../../../hooks/useAppSelector';

export default function Registre() {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector(authState);
	const navigate = useNavigate();
	const { Component, body, eventClick } = useAuth({
		component: 'registre',
		inputs: [
			{ iName: 'name', iPlaceholder: 'Nombres' },
			{ iName: 'lastName', iPlaceholder: 'Apellidos' },
			{ iName: 'email', iPlaceholder: 'Correo electrónico' },
			{ iName: 'phone', iPlaceholder: 'Teléfono' },
		],
		buttons: [
			{ bId: `registre`, bType: ButtonType.Dark, bText: 'Registrar', bValidate: false },
			{ bId: `back`, bType: ButtonType.Light, bText: 'Volver' },
		],
	});

	const handleClick = () => {
		switch (eventClick.value) {
			case 'back':
				return navigate('/login');
			case 'registre':
				return dispatch(postRegistre(body));
			default:
				break;
		}
	};

	useEffect(() => {
		if (eventClick.value) {
			handleClick();
		}
	}, [eventClick]);

	useEffect(() => {
		if (status === 'success') {
			dispatch(updateAuthState({ status: 'idle' }));
			navigate('/login');
		}
	}, [status]);

	return <div>{Component}</div>;
}

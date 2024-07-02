import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonType } from '../../../components/common/button/button.type';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { authState, postRegistre, updateAuthState } from '../authSlice';
import useAuth from '../hooks/useAuth/useAuth';

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
			{ bId: `registre`, bType: ButtonType.Dark, bText: 'Registrar', bValidate: true },
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
		if (status === 'success') {
			dispatch(updateAuthState({ status: 'idle' }));
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	return <div>{Component}</div>;
}

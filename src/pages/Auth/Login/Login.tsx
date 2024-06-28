// Login.tsx

import { useEffect } from 'react';
import { ButtonType } from '../../../components/common/button/button.type';
import useAuth, { UseAuthProps } from '../hooks/useAuth/useAuth';

export type InitialStateLogin = { username: string; password: string };

const props: UseAuthProps = {
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
	const { Component, eventClick } = useAuth(props);

	useEffect(() => {
		console.log(eventClick);
	}, [eventClick]);

	// const [stateLogin, setStateLogin] = useState<InitialStateLogin>(initialStateLogin);

	return <div>{Component}</div>;
	// <AuthLayout>
	// 	<form className='login'>
	// 		<section className='login--input'>
	// 			<LoginInput stateLogin={stateLogin} setStateLogin={setStateLogin} />
	// 		</section>
	// 		<section className='login--buttons'>
	// 			<LoginButtons />
	// 		</section>
	// 	</form>
	// </AuthLayout>
}

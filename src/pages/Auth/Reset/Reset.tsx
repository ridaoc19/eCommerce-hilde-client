import { ButtonType } from '../../../components/common/button/button.type';
import useAuth, { UseAuthProps } from '../hooks/useAuth/useAuth';

const props: UseAuthProps = {
	component: 'reset',
	inputs: [{ name: 'email', placeholder: 'Correo electrónico' }],
	buttons: [
		{
			id: `button__reset`,
			type: ButtonType.Dark,
			text: 'Restablece contraseña',
		},
		{
			id: `button__back`,
			type: ButtonType.Light,
			text: 'Volver',
		},
	],
};

export default function Reset() {
	const { Component } = useAuth(props);

	return <div>{Component}</div>;
}

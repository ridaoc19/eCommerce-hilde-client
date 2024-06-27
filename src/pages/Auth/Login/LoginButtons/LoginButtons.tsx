import Button from '../../../../components/common/button/Button';
import { ButtonType } from '../../../../components/common/button/button.type';

interface ButtonConfig {
	id: string;
	type: ButtonType;
	text: string;
}
const buttons: readonly ButtonConfig[] = [
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
] as const;

export default function LoginButtons() {
	return (
		<div className='login-buttons'>
			{buttons.map(({ id, text, type }) => (
				<Button
					key={id}
					id={`button__login--${id}`}
					type={type}
					text={text}
					handleClick={() => {
						console.log('');
					}}
				/>
			))}
		</div>
	);
}

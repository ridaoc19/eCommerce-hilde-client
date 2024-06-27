import { Dispatch, SetStateAction } from 'react';
import Input from '../../../../components/common/input/Input';
import { type InitialStateLogin } from '../Login';

interface LoginInputProps {
	stateLogin: InitialStateLogin;
	setStateLogin: Dispatch<SetStateAction<InitialStateLogin>>;
}

export default function LoginInput({ stateLogin, setStateLogin }: LoginInputProps) {
	return (
		<div className='login-form-input'>
			{(Object.keys(stateLogin) as (keyof InitialStateLogin)[]).map(item => (
				<Input
					id={`input__login--${item}`}
					type={item}
					name={item}
					errorMessage=''
					handleOnChange={({ target: { name, value } }) => setStateLogin({ ...stateLogin, [name]: value })}
					value={stateLogin[item] as keyof InitialStateLogin}
					placeholder={item === 'username' ? 'Usuario' : 'Contraseña'}
				/>
			))}
		</div>
	);
}

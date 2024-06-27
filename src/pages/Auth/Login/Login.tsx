// Login.tsx
import { useState } from 'react';
import AuthLayout from '../common/AuthLayout/AuthLayout';
import LoginButtons from './LoginButtons/LoginButtons';
import LoginInput from './LoginInput/LoginInput';

export type InitialStateLogin = { username: string; password: string };

export const initialStateLogin: InitialStateLogin = {
	username: '',
	password: '',
};

export default function Login() {
	const [stateLogin, setStateLogin] = useState<InitialStateLogin>(initialStateLogin);

	return (
		<AuthLayout>
			<form className='login'>
				<section className='login--input'>
					<LoginInput stateLogin={stateLogin} setStateLogin={setStateLogin} />
				</section>
				<section className='login--buttons'>
					<LoginButtons />
				</section>
			</form>
		</AuthLayout>
	);
}

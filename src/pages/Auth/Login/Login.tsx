// Login.tsx
import { useState } from 'react';
import Svg from '../../../components/common/icons/Svg';
import { SvgType } from '../../../components/common/icons/svgType';
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
		<div className='login-container'>
			<main className='login'>
				<div className='login__logo'>
					<Svg type={SvgType.Logo} width={92} height={87} />
				</div>
				<form className='login__form'>
					<section className='login__form--input'>
						<LoginInput stateLogin={stateLogin} setStateLogin={setStateLogin} />
					</section>
					<section className='login__form--buttons'>
						<LoginButtons />
					</section>
				</form>
			</main>
		</div>
	);
}

import { useState } from 'react';
import AuthLayout from '../common/AuthLayout/AuthLayout';
import RegistreInput from './RegistreInput/RegistreInput';
import RegistreButtons from './RegistreButtons/RegistreButtons';

export type InitialStateRegistre = { username: string; password: string };

export const initialStateRegistre: InitialStateRegistre = {
	username: '',
	password: '',
};

export default function Registre() {
	const [stateRegistre, setStateRegistre] = useState<InitialStateRegistre>(initialStateRegistre);

	return (
		<AuthLayout>
			<form className='registre'>
				<section className='registre--input'>
					<RegistreInput stateRegistre={stateRegistre} setStateRegistre={setStateRegistre} />
				</section>
				<section className='registre--buttons'>
					<RegistreButtons />
				</section>
			</form>
		</AuthLayout>
	);
}

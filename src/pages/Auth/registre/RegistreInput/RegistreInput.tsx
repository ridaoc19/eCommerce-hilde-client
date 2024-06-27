import { Dispatch, SetStateAction } from 'react';
import Input from '../../../../components/common/input/Input';
import { type InitialStateRegistre } from '../Registre';

interface RegistreInputProps {
	stateRegistre: InitialStateRegistre;
	setStateRegistre: Dispatch<SetStateAction<InitialStateRegistre>>;
}

export default function RegistreInput({ stateRegistre, setStateRegistre }: RegistreInputProps) {
	return (
		<div className='login-input'>
			{(Object.keys(stateRegistre) as (keyof InitialStateRegistre)[]).map(item => (
				<Input
					id={`input__login--${item}`}
					type={item}
					name={item}
					errorMessage=''
					handleOnChange={({ target: { name, value } }) => setStateRegistre({ ...stateRegistre, [name]: value })}
					value={stateRegistre[item] as keyof InitialStateRegistre}
					placeholder={item === 'username' ? 'Usuario' : 'Contraseña'}
				/>
			))}
		</div>
	);
}

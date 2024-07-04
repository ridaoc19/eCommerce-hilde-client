import { Dispatch, SetStateAction } from 'react';
import Button from '../../../../components/common/button/Button';
import { ButtonType } from '../../../../components/common/button/button.type';
import { SvgType } from '../../../../components/common/icons/svgType';
import Input from '../../../../components/common/input/Input';
import type { InitialStateAccountPass } from './Password';
import useValidations from '../../../../hooks/useValidations/useValidations';

interface FormAccountPassProps {
	stateAccountPass: InitialStateAccountPass;
	initialStateAccountPass: InitialStateAccountPass;
	setStateAccountPass: Dispatch<SetStateAction<InitialStateAccountPass>>;
}

function FormAccountPass({ stateAccountPass, setStateAccountPass, initialStateAccountPass }: FormAccountPassProps) {
	const { getValidationErrors } = useValidations();

	return (
		<div className='account-password__main-'>
			<div className='account-password__main-form'>
				{(
					Object.keys(stateAccountPass).filter(key => !['user_id'].includes(key)) as (keyof Omit<
						InitialStateAccountPass,
						'email' | 'user_id'
					>)[]
				).map(name => {
					return (
						<Input
							key={name}
							name={name}
							placeholder={name === 'password' ? 'nueva contraseña' : 'Confirma contraseña'}
							initialValue={initialStateAccountPass[name]}
							result={({ value }) => {
								const { stop } = getValidationErrors({ name, value });
								if (stop) return;
								setStateAccountPass(prevState => ({ ...prevState, [name]: value }));
							}}
							svgLeft={SvgType.Password}
						/>
					);
				})}
			</div>

			<div className='account-password__main-button'>
				<Button
					id='account-password'
					type={ButtonType.Dark}
					text='Guardar'
					disabled={!stateAccountPass.password || !stateAccountPass.newPassword}
					handleClick={() => {}}
				/>
			</div>
		</div>
	);
}

export default FormAccountPass;

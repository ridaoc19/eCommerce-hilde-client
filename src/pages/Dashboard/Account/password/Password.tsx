import { useContext, useState } from 'react';
import Button from '../../../../components/common/button/Button';
import { ButtonType } from '../../../../components/common/button/button.type';
import useAppSelector from '../../../../hooks/useAppSelector';
import { authState } from '../../../Auth/authSlice';
import { DashboardContext } from '../../contextDash';
import FormAccountPass from './FormAccountPass';
import Render from './Render';

export enum AccountPassButtonName {
	Save = 'save',
}
export type InitialStateAccountPass = Pick<GUser.User, 'user_id'> & { password: string; newPassword: string };

function Password() {
	const { user } = useAppSelector(authState);
	const {
		dashboardState: { account },
		setDashboardState,
	} = useContext(DashboardContext);

	const initialStateAccountPass: InitialStateAccountPass = {
		user_id: user?.user_id || '',
		password: '',
		newPassword: '',
	};
	const [stateAccountPass, setStateAccountPass] = useState<InitialStateAccountPass>(initialStateAccountPass);

	return (
		<div className='account-password'>
			<div className='account-password__header'>
				<h4>Cambio de contraseña</h4>
				<Button
					id='editar'
					text='Editar'
					type={account === 'password' ? ButtonType.Dark : ButtonType.Light}
					handleClick={() =>
						setDashboardState(prevState => ({
							...prevState,
							account: prevState.account === 'password' ? '' : 'password',
						}))
					}
				/>
			</div>

			<main className='account-password__main'>
				{account !== 'password' ? (
					<Render />
				) : (
					<FormAccountPass
						stateAccountPass={stateAccountPass}
						initialStateAccountPass={initialStateAccountPass}
						setStateAccountPass={setStateAccountPass}
					/>
				)}
			</main>
		</div>
	);
}

export default Password;

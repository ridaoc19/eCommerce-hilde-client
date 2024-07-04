import { useContext, useState } from 'react';
import Button from '../../../../components/common/button/Button';
import { ButtonType } from '../../../../components/common/button/button.type';
import { SvgType } from '../../../../components/common/icons/svgType';
import Input from '../../../../components/common/input/Input';
import useAppSelector from '../../../../hooks/useAppSelector';
import useValidations from '../../../../hooks/useValidations/useValidations';
import { authState } from '../../../Auth/authSlice';
import Render from './Render';
import { CreateContext } from '../../../../hooks/useContext/context';

export enum AccountInfoButtonName {
	Save = 'save',
}
export type InitialStateAccountInfo = Pick<GUser.User, 'user_id' | 'name' | 'lastName' | 'email' | 'phone'> & {
	newEmail: string;
};
function compareUserAndAccount(user: GUser.User | null, stateAccountInfo: InitialStateAccountInfo): boolean {
	if (!user) return false;
	// Verificar que los IDs de usuario sean iguales
	if (user.user_id !== stateAccountInfo.user_id) {
		return false;
	}

	// Verificar que los campos específicos sean iguales o hayan cambiado
	if (
		user.name !== stateAccountInfo.name ||
		user.lastName !== stateAccountInfo.lastName ||
		user.email !== stateAccountInfo.email ||
		user.phone !== stateAccountInfo.phone
	) {
		return false;
	}

	// Verificar si el campo newEmail está presente en stateAccountInfo y es diferente
	if (stateAccountInfo.newEmail !== undefined && stateAccountInfo.newEmail !== user.email) {
		return false;
	}

	// Si no se encontraron diferencias, entonces los objetos son iguales o tienen la misma información
	return true;
}

function Information() {
	const { user } = useAppSelector(authState);
	const {
		dashboard: {
			dashboardState: { account },
			setDashboardState,
		},
	} = useContext(CreateContext);
	const { getValidationErrors } = useValidations();

	const initialStateAccountInfo: InitialStateAccountInfo = {
		user_id: user?.user_id || '',
		name: user?.name || '',
		lastName: user?.lastName || '',
		email: user?.email || '',
		newEmail: user?.email || '',
		phone: user?.phone || 0,
	};
	const [stateAccountInfo, setStateAccountInfo] = useState<InitialStateAccountInfo>(initialStateAccountInfo);

	const handleChangeAccountInfo = ({ name, value }: { name: string; value: string | number }) => {
		const { stop } = getValidationErrors({ name, value });
		if (stop) return;
		setStateAccountInfo(prevState => ({ ...prevState, [name]: value }));
	};

	return (
		<div className='account-information'>
			<div className='account-information__header'>
				<h4>Información personal</h4>
				<Button
					id='editar'
					text='Editar'
					type={account === 'information' ? ButtonType.Dark : ButtonType.Light}
					handleClick={() =>
						setDashboardState(prevState => ({
							...prevState,
							account: prevState.account === 'information' ? '' : 'information',
						}))
					}
				/>
			</div>

			<main className='account-information__main'>
				{account !== 'information' ? (
					<Render />
				) : (
					<div className='account-information__main-'>
						<div className='account-information__main-form'>
							{(
								Object.keys(stateAccountInfo).filter(key => !['user_id', 'email'].includes(key)) as (keyof Omit<
									InitialStateAccountInfo,
									'email' | 'user_id'
								>)[]
							).map(name => {
								const svgType = SvgType[(name.charAt(0).toUpperCase() + name.slice(1)) as keyof typeof SvgType] || name;
								let placeholder;

								if (name === 'name') {
									placeholder = 'Nombres';
								} else if (name === 'lastName') {
									placeholder = 'Apellidos';
								} else if (name === 'newEmail') {
									placeholder = 'Ingrese su nuevo correo';
								} else {
									placeholder = 'Teléfono';
								}

								return (
									<Input
										key={name}
										name={name}
										placeholder={placeholder}
										initialValue={initialStateAccountInfo[name]}
										result={({ value }) => handleChangeAccountInfo({ name, value })}
										svgLeft={svgType}
									/>
								);
							})}
						</div>

						<div className='account-information__main-button'>
							<Button
								id='account'
								type={ButtonType.Dark}
								text='Guardar'
								handleClick={() => {}}
								disabled={compareUserAndAccount(user, stateAccountInfo)}
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

export default Information;

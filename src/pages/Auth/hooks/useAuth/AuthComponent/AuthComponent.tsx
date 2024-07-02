import { Dispatch, MouseEvent, SetStateAction } from 'react';
import Button from '../../../../../components/common/button/Button';
import { ButtonProps } from '../../../../../components/common/button/button.type';
import Svg from '../../../../../components/common/icons/Svg';
import { SvgType } from '../../../../../components/common/icons/svgType';
import Input from '../../../../../components/common/input/Input';
import useValidations from '../../../../../hooks/useValidations/useValidations';
import type { InitialState } from '../useAuth';
import useAppSelector from '../../../../../hooks/useAppSelector';
import { authState } from '../../../authSlice';

export interface AuthComponentProps<K extends string> {
	component: string;
	state: InitialState<K>[];
	setState: Dispatch<SetStateAction<InitialState<K>[]>>;
	buttons: { bId: string; bText: ButtonProps['text']; bType: ButtonProps['type']; bValidate?: boolean }[];
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function AuthComponent<K extends string>({
	state,
	setState,
	buttons,
	component,
	handleClick,
}: AuthComponentProps<K>) {
	const { status } = useAppSelector(authState);
	const { getValidationErrors } = useValidations();
	return (
		<div className='auth-component-container'>
			<div className='auth-component'>
				<header className='auth-component__logo'>
					<Svg type={SvgType.Logo} width={92} height={87} />
				</header>
				<form className='auth-component__form'>
					<section className='auth-component__form--inputs'>
						{state.map(stateItem => {
							const { iName, iPlaceholder, disabled, error } = stateItem;
							const svgType =
								SvgType[(iName.charAt(0).toUpperCase() + iName.slice(1)) as keyof typeof SvgType] || iName;

							let autoCompleteValue;
							if (iName === 'password') {
								autoCompleteValue = 'current-password';
							} else if (iName === 'newPassword') {
								autoCompleteValue = 'new-password';
							} else {
								autoCompleteValue = iName;
							}

							return (
								<Input
									key={iName}
									type={iName}
									name={iName}
									errorMessage={error}
									handleOnChange={({ target: { value } }) => {
										const { stop, message } = getValidationErrors({ name: iName, value });
										setState(prevState =>
											prevState.map(item =>
												item.iName === iName
													? { ...item, [iName]: stop ? item[iName as K] : value, error: message }
													: item
											)
										);
									}}
									svgLeft={svgType}
									disabled={disabled}
									value={stateItem[iName as K] as string}
									placeholder={iPlaceholder}
									other_attributes={{
										autoComplete: autoCompleteValue,
									}}
								/>
							);
						})}
					</section>
					<section className='auth-component__form--buttons'>
						{buttons.map(({ bId, bText, bType, bValidate }) => (
							<Button
								key={bId}
								id={`button__${component}--${bId}`}
								type={bType}
								text={bText}
								isLoading={status === 'pending' && !!bValidate}
								disabled={status === 'pending'}
								value={bId}
								handleClick={handleClick}
							/>
						))}
					</section>
				</form>
			</div>
		</div>
	);
}

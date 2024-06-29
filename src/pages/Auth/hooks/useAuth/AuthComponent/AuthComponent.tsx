import { Dispatch, MouseEvent, SetStateAction } from 'react';
import Button from '../../../../../components/common/button/Button';
import { ButtonProps } from '../../../../../components/common/button/button.type';
import Svg from '../../../../../components/common/icons/Svg';
import { SvgType } from '../../../../../components/common/icons/svgType';
import Input from '../../../../../components/common/input/Input';
import useValidations from '../../../../../hooks/useValidations/useValidations';
import type { InitialState } from '../useAuth';

export interface AuthComponentProps<K extends string> {
	component: string;
	state: InitialState<K>[];
	setState: Dispatch<SetStateAction<InitialState<K>[]>>;
	buttons: Pick<ButtonProps, 'id' | 'text' | 'type'>[];
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function AuthComponent<K extends string>({
	state,
	setState,
	buttons,
	component,
	handleClick,
}: AuthComponentProps<K>) {
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
							const { name, placeholder, error, disabled } = stateItem;
							const svgType = SvgType[(name.charAt(0).toUpperCase() + name.slice(1)) as keyof typeof SvgType];
							return (
								<Input
									key={name}
									type={name}
									name={name}
									errorMessage={error}
									handleOnChange={({ target: { value } }) => {
										const { stop, message } = getValidationErrors({ name, value });
										setState(prevState =>
											prevState.map(item =>
												item.name === name ? { ...item, [name]: stop ? item[name as K] : value, error: message } : item
											)
										);
									}}
									svgLeft={svgType}
									disabled={disabled}
									value={stateItem[name as K] as string}
									placeholder={placeholder}
									other_attributes={{ autoComplete: name === 'password' ? 'current-password' : name }}
								/>
							);
						})}
					</section>
					<section className='auth-component__form--buttons'>
						{buttons.map(({ id, text, type }) => (
							<Button
								key={id}
								id={`button__${component}--${id}`}
								type={type}
								text={text}
								disabled={false}
								value={id}
								handleClick={handleClick}
							/>
						))}
					</section>
				</form>
			</div>
		</div>
	);
}

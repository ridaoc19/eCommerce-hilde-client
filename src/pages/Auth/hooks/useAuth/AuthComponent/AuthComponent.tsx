import { Dispatch, SetStateAction } from 'react';
import Button from '../../../../../components/common/button/Button';
import { ButtonProps } from '../../../../../components/common/button/button.type';
import Svg from '../../../../../components/common/icons/Svg';
import { SvgType } from '../../../../../components/common/icons/svgType';
import Input, { InputProps } from '../../../../../components/common/input/Input';
import type { InitialState } from '../useAuth';

export type InputTemplateProps = Pick<InputProps, 'name' | 'placeholder'>;
export type ButtonTemplateProps = Pick<ButtonProps, 'id' | 'text' | 'type'>;

interface AuthComponentProps {
	component: string;
	state: InitialState[];
	setState: Dispatch<SetStateAction<InitialState[]>>;
	buttons: ButtonTemplateProps[];
}

export default function AuthComponent({ state, setState, buttons, component }: AuthComponentProps) {
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
							return (
								<Input
									key={name}
									type={name}
									name={name}
									errorMessage={error}
									handleOnChange={({ target }) =>
										setState(prevState =>
											prevState.map(item => (item.name === name ? { ...item, [name]: target.value } : item))
										)
									}
									disabled={disabled}
									value={stateItem[name] as string}
									placeholder={placeholder}
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
								handleClick={() => {}}
							/>
						))}
					</section>
				</form>
			</div>
		</div>
	);
}

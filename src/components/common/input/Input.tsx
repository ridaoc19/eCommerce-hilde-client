import { InputHTMLAttributes, MouseEvent, useState } from 'react';
import { HandleChangeText } from '../../../interfaces/global';
import Svg from '../icons/Svg';
import { SvgType } from '../icons/svgType';
import { getBorderColor, getClassNameModifier, getInputType, getSvgColor } from './help';

export interface InputProps {
	type?: string;
	name: string;
	value: string | number;
	placeholder: string;
	errorMessage: string;
	handleOnChange: HandleChangeText;

	disabled?: boolean;
	svgLeft?: SvgType;
	svgRight?: SvgType;
	other_attributes?: InputHTMLAttributes<HTMLInputElement>;
}

function Input({
	svgLeft,
	svgRight,
	errorMessage = '',
	handleOnChange,
	name,
	placeholder,
	value,
	disabled,
	other_attributes,
	type,
}: InputProps) {
	const [toggle, setToggle] = useState(false);

	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setToggle(!toggle);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setToggle(!toggle);
		}
	};

	return (
		<div className={`input input__container${name && `--${name}`}`}>
			<label htmlFor={`input__${name}`} className={`input__label ${value ? 'active' : ''}`}>
				{placeholder}
			</label>

			<div className={`${errorMessage ? 'input_error' : 'input_brand'} input__content${name && `--${name}`}`}>
				<span
					style={{
						border: `1px solid ${getBorderColor(errorMessage, value)}`,
					}}
				>
					<span className={`input__svg-left${name && `--${name}`}`}>
						{svgLeft &&
							Svg({
								type: svgLeft,
								height: 16,
								width: 16,
								color: getSvgColor(errorMessage),
							})}
					</span>
					<input
						id={`input__${name}`}
						data-testid='input'
						type={getInputType(type, toggle)}
						placeholder={!value ? placeholder : ''}
						value={value}
						onChange={event => handleOnChange(event)}
						name={name}
						disabled={disabled}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...other_attributes}
					/>
					<span
						className={getClassNameModifier('input__svgTwo', name)}
						onClick={handleOnClick}
						onKeyDown={handleKeyDown}
						role='button'
						tabIndex={0}
					>
						{svgRight &&
							Svg({
								type: svgRight,
								height: 16,
								width: 16,
								color: getSvgColor(errorMessage),
							})}
					</span>
				</span>
			</div>

			<div className={`input__error${name && `--${name}`}`}>
				<div>
					<div className={`input__message${name && `--${name}`}`}>
						<span>{errorMessage}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Input;

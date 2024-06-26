import { InputHTMLAttributes, MouseEvent, useState } from 'react';
import { HandleChangeText } from '../../../interfaces/global';
import Svg from '../icons/Svg';
import { SvgType } from '../icons/svgType';
import { getBorderColor, getClassNameModifier, getInputType, getSvgColor } from './help';

export interface InputProps {
	type?: string;
	id: string;
	placeholder: string;
	value: string | number;
	handleOnChange: HandleChangeText;
	name: string;

	disabled?: boolean;
	className?: string;
	errorMessage: string;
	svgLeft?: SvgType;
	svgRight?: SvgType;
	other_attributes?: InputHTMLAttributes<HTMLInputElement>;
}

function Input({
	id,
	className,
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
		<div className={`input input__container${className && `--${className}`}`}>
			<label htmlFor={`input__${id}`}>{placeholder}</label>

			<div className={`${errorMessage ? 'input_error' : 'input_brand'} input__content${className && `--${className}`}`}>
				<span
					style={{
						border: `1px solid ${getBorderColor(errorMessage, value)}`,
					}}
				>
					<span className={`input__svg-left${className && `--${className}`}`}>
						{svgLeft &&
							Svg({
								type: svgLeft,
								height: 16,
								width: 16,
								color: getSvgColor(errorMessage),
							})}
					</span>
					<input
						id={`input__${id}`}
						data-testid='input'
						type={getInputType(type, toggle)}
						placeholder={placeholder}
						value={value}
						onChange={event => handleOnChange(event)}
						name={name}
						disabled={disabled}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...other_attributes}
					/>
					<span
						className={getClassNameModifier('input__svgTwo', className)}
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

			<div className={`input__error${className && `--${className}`}`}>
				<div>
					<div className={`input__message${className && `--${className}`}`}>
						<span>{errorMessage}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Input;

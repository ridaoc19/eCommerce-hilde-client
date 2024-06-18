import _color from '../../../styles/main/global/_color';
import Svg from '../icons/Svg';
import { ButtonProps, ButtonType } from './button.type';

function Button({
	id,
	type,
	handleClick,
	text,
	value = '',
	disabled = false,
	className = '',
	other_attributes = {},
	svgLeft = null,
	svgRight = null,
}: ButtonProps) {
	return (
		<button
			type='button'
			id={id}
			className={`button button_${type} ${className}`}
			onClick={handleClick}
			value={value}
			disabled={disabled}
			aria-label={`Click para ${id}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...other_attributes}
		>
			{svgLeft && (
				<span className='button__svg-left'>
					{Svg({
						type: svgLeft,
						height: 16,
						width: 16,
						color: [ButtonType.Error, ButtonType.Success, ButtonType.Warning, ButtonType.Information].includes(type)
							? _color['--font-light']
							: undefined,
					})}
				</span>
			)}
			{text && (
				<span className='button__text-container'>
					<div>{text}</div>
				</span>
			)}
			{svgRight && (
				<span className='button__svg-right'>
					{Svg({
						type: svgRight,
						height: 16,
						width: 16,
						color: [ButtonType.Error, ButtonType.Success, ButtonType.Warning, ButtonType.Information].includes(type)
							? _color['--font-light']
							: undefined,
					})}
				</span>
			)}
		</button>
	);
}

export default Button;

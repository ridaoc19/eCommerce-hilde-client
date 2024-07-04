import _color from '../../../styles/main/global/_color';
import Svg from '../icons/Svg';
import Spinner from '../spinner';
import { ButtonProps, ButtonType } from './button.type';

function Button({
	id,
	type,
	handleClick,
	text,
	isLoading = false,
	value = '',
	disabled = false,
	other_attributes = {},
	svgLeft = null,
	svgRight = null,
}: ButtonProps) {
	return (
		<button
			type='button'
			id={`button__${id}`}
			className={`button button_${type}`}
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
							? _color['--base-font-light']
							: undefined,
					})}
				</span>
			)}
			{text && (
				<span className='button__text-container'>
					<div>{isLoading ? <Spinner /> : text}</div>
				</span>
			)}
			{svgRight && (
				<span className='button__svg-right'>
					{Svg({
						type: svgRight,
						height: 16,
						width: 16,
						color: [ButtonType.Error, ButtonType.Success, ButtonType.Warning, ButtonType.Information].includes(type)
							? _color['--base-font-light']
							: undefined,
					})}
				</span>
			)}
		</button>
	);
}

export default Button;

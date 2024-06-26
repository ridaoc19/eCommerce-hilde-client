import Svg from '../../../components/common/icons/Svg';
import { SvgType } from '../../../components/common/icons/svgType';
import Input from '../../../components/common/input/Input';

export default function Login() {
	return (
		<div className='login'>
			<div className='login__logo'>
				<Svg type={SvgType.Logo} />
			</div>
			{['username', 'password'].map(item => (
				<Input
					id={`input__login--${item}`}
					name={item}
					errorMessage=''
					handleOnChange={() => {}}
					value={''}
					placeholder=''
				/>
			))}
		</div>
	);
}

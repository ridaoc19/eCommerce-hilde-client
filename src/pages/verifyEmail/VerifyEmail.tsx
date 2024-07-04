import Button from '../../components/common/button/Button';
import { ButtonType } from '../../components/common/button/button.type';
import Svg from '../../components/common/icons/Svg';
import { SvgType } from '../../components/common/icons/svgType';

function VerifyEmail() {
	// const { id } = useParams();

	return (
		<div className='verify-email-container'>
			<header className='verify-email-title'>
				{Svg({ type: SvgType.Logo, height: 80, width: 80 })}
				<h2>¡Bienvenido!</h2>
				<p>Valida el correo electrónico</p>
			</header>
			<Button id='verify' type={ButtonType.Dark} text='Validar' handleClick={() => {}} />
		</div>
	);
}

export default VerifyEmail;

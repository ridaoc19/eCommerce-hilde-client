import Button from '../../common/button/Button';
import { ButtonType } from '../../common/button/button.type';
import Svg from '../../common/icons/Svg';
import { SvgType } from '../../common/icons/svgType';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='footer__top'>
					<div className='footer__top-left'>
						<div className='footer__top-left-logo'>{Svg({ type: SvgType.LogoTitle, height: 80, width: 80 })}</div>
					</div>

					<div className='footer__top-center'>
						<div className='footer__top-center-container'>
							<div className='footer__top-center-title'>
								<h4>Hilde</h4>
							</div>
							<div className='footer__top-center-content'>
								<Button
									type={ButtonType.Link}
									text='(+57) 312 000 00 00'
									handleClick={() => {}}
									id='phone'
									isLoading={false}
									svgRight={SvgType.Phone}
								/>
								<Button
									type={ButtonType.Link}
									text='hilde.ecommerce@outlook.com'
									handleClick={() => {}}
									id='email'
									isLoading={false}
									svgRight={SvgType.Email}
								/>
								<Button
									type={ButtonType.Link}
									text='Cra 77 No. 48-06'
									handleClick={() => {}}
									id='address'
									isLoading={false}
									svgRight={SvgType.Location}
								/>
								<Button
									type={ButtonType.None}
									text='Lunes - Viernes de 8 AM - 6 PM'
									handleClick={() => {}}
									id='time'
									isLoading={false}
									svgRight={SvgType.Time}
								/>
							</div>
						</div>
					</div>

					<div className='footer__top-right'>
						<div className='footer__top-right-container'>
							<div className='footer__top-right-social-networks-title'>
								<h4>Síguenos</h4>
							</div>
							<div className='footer__top-right-social-networks-icon'>
								{Svg({ type: SvgType.Instagram, height: 20, width: 20, color: 'white' })}
								{Svg({ type: SvgType.Facebook, height: 20, width: 20, color: 'white' })}
								{Svg({ type: SvgType.LinkedIn, height: 20, width: 20, color: 'white' })}
								{Svg({ type: SvgType.Twitter, height: 20, width: 20, color: 'white' })}
								{Svg({ type: SvgType.Snapchat, height: 20, width: 20, color: 'white' })}
								{Svg({ type: SvgType.Messenger, height: 20, width: 20, color: 'white' })}
								{Svg({ type: SvgType.Whatsapp, height: 20, width: 20, color: 'white' })}
							</div>
						</div>
					</div>
				</div>

				<div className='footer__bottom'>
					<div className='footer__bottom-text'>
						<p>El formato de los precios puede verse afectado por las configuraciones y diferencia de navegadores</p>
						<p>© 2023 hilde.com, Todos los derechos reservados.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

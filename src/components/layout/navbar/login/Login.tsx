import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { authState, postLogOut } from '../../../../pages/Auth/authSlice';
import Button from '../../../common/button/Button';
import { ButtonType } from '../../../common/button/button.type';
import Svg from '../../../common/icons/Svg';
import { SvgType } from '../../../common/icons/svgType';

function Login() {
	const navigate = useNavigate();
	const { mediaQuery } = useMediaQuery();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector(authState);
	const [isOpenModalLogin, setIsOpenModalLogin] = useState<boolean>(false);

	return (
		<div className='navbar__login-container'>
			<button
				type='button'
				className='navbar__login-content'
				onClick={event => {
					event.preventDefault();
					if (user && user.email) {
						setIsOpenModalLogin(true);
					} else {
						navigate('/login');
					}
				}}
			>
				<div className='navbar__login-logo'>{Svg({ type: SvgType.User, color: 'white', height: 20, width: 20 })}</div>
				{mediaQuery !== 'phone' && (
					<div className='navbar__login-text'>
						<div>
							<span>{user?.name ? `!Hola¡ ${user.name}` : 'Inicia sesión'}</span>
						</div>
					</div>
				)}
			</button>

			<div
				role='button'
				aria-label='click selected'
				tabIndex={0}
				onKeyDown={() => {}}
				onClick={event => {
					event.preventDefault();
					setIsOpenModalLogin(false);
				}}
				className={`navbar__login-modal ${isOpenModalLogin ? 'isOpenModalLogin' : ''}`}
			>
				<div className='navbar__login-modal-container'>
					<div className='navbar__login-modal-content'>
						{user?.name && (
							<ul>
								<li>
									<Button
										type={ButtonType.Highlighter}
										text='Dashboard'
										id='dashboard'
										handleClick={() => {
											navigate('/dashboard');
										}}
										svgLeft={SvgType.Password}
									/>
								</li>
								<li>
									<Button
										type={ButtonType.Highlighter}
										text='Cerrar sesión'
										id='logOut'
										handleClick={() => {
											dispatch(postLogOut());
										}}
										svgLeft={SvgType.Close}
									/>
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
// 9 de enero 443 323 1023 5038 72
export default Login;

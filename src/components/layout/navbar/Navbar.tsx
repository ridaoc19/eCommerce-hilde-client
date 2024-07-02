import { Link } from 'react-router-dom';
import Svg from '../../common/icons/Svg';
import { SvgType } from '../../common/icons/svgType';

export type HandleClickDiv = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar__sidebar' />

			<div className='navbar__logo'>
				<Link to='/'>{Svg({ type: SvgType.Logo, width: 50, height: 50, color: 'white' })}</Link>
			</div>
			<div className='navbar__login'>
				<Link to='/login'>Login</Link>
			</div>
		</div>
	);
}
export default Navbar;

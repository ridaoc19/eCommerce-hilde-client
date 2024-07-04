import { Link } from 'react-router-dom';
import Svg from '../../common/icons/Svg';
import { SvgType } from '../../common/icons/svgType';
import Sidebar from './sidebar/Sidebar';
import Login from './login/Login';

export type HandleClickDiv = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar__sidebar'>
				<Sidebar />
			</div>

			<div className='navbar__logo'>
				<Link to='/'>{Svg({ type: SvgType.Logo, width: 50, height: 50, color: 'white' })}</Link>
			</div>
			<div className='navbar__login'>
				<Login />
			</div>
		</div>
	);
}
export default Navbar;

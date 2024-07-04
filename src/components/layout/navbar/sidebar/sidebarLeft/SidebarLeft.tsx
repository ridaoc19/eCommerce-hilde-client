import { Dispatch } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../../../common/button/Button';
import { ButtonType } from '../../../../common/button/button.type';
import Svg from '../../../../common/icons/Svg';
import { SvgType } from '../../../../common/icons/svgType';
import SidebarIcon from '../sidebarIcon/SidebarIcon';

export interface SidebarLeftProps {
	isOpenMenu: boolean;
	handleOnClick: (isOpen: boolean) => void;
	setSelectedId: Dispatch<string>;
	data: { id: string; text: string; svgLeft?: SvgType }[];
}

export default function SidebarLeft({ handleOnClick, isOpenMenu, setSelectedId, data }: SidebarLeftProps) {
	const { pathname } = useLocation();

	return (
		<div className='sidebar-left'>
			<div className='sidebar-left__header'>
				<div className='sidebar-left__header--content'>
					<SidebarIcon handleOnClick={handleOnClick} updateIsOpen={isOpenMenu} />
					<div>
						<Link to='/'>{Svg({ type: SvgType.Logo, width: 50, height: 50, color: 'white' })}</Link>
					</div>
				</div>
			</div>

			<div className='sidebar-left__main'>
				{data.map(({ id, text, svgLeft }) => (
					<div
						key={id}
						onClick={() => setSelectedId(id)}
						onMouseEnter={() => (pathname !== '/dashboard' ? setSelectedId(id) : '')}
						onKeyDown={() => setSelectedId(id)}
						role='button'
						tabIndex={0}
						aria-label='selected id'
					>
						<Button
							svgLeft={svgLeft}
							svgRight={SvgType.ArrowRight}
							type={ButtonType.Highlighter}
							text={text}
							handleClick={() => handleOnClick}
							id={text}
						/>
					</div>
				))}
			</div>

			<div className='sidebar-left__footer'>
				{/* <ul>
      <li>Mi cuenta</li>
      <li>Donde estamos</li>
      <li>Atención al cliente</li>
    </ul> */}
			</div>
		</div>
	);
}

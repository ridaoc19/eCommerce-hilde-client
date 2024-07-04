import { KeyboardEvent, useContext, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ComponentDash } from '../../../../hooks/useContext/dashboard/State';
import departments from '../../../../services/api';
import SidebarIcon from './sidebarIcon/SidebarIcon';
import SidebarLeft, { SidebarLeftProps } from './sidebarLeft/SidebarLeft';
import SidebarRight from './sidebarRight/SidebarRight';
import { CreateContext } from '../../../../hooks/useContext/context';

export default function Sidebar() {
	const { pathname } = useLocation();
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [selectedId, setSelectedId] = useState<string>('');
	const {
		dashboard: { setDashboardState },
	} = useContext(CreateContext);

	const dataRight = useMemo(() => {
		if (pathname !== '/dashboard' && selectedId) {
			const filterCategory = departments.find(({ department_id }) => department_id === selectedId)?.categories;
			if (filterCategory) return filterCategory;
			return [];
		}
		if (selectedId) {
			setDashboardState(prevState => ({ ...prevState, component: selectedId as ComponentDash }));
			setIsOpenMenu(false);
		}
		return [];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, selectedId]);

	const dataLeft: SidebarLeftProps['data'] = useMemo(() => {
		if (pathname !== '/dashboard') {
			return departments.map(({ department_id, department }) => ({ id: department_id, text: department }));
		}
		return Object.entries(ComponentDash).map(([text, id]) => ({ id, text: text.replaceAll('_', ' ') }));
	}, [pathname]);

	const handleOnClick = () => {
		document.body.classList.toggle('body-scroll-locked');
		setIsOpenMenu(!isOpenMenu);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleOnClick();
		}
	};

	return (
		<div className='sidebar__container'>
			<SidebarIcon handleOnClick={handleOnClick} updateIsOpen={isOpenMenu} />

			<div
				className={`sidebar__sub-content ${isOpenMenu ? 'is-active' : ''}`}
				onClick={handleOnClick}
				onKeyDown={handleKeyDown}
				role='button'
				aria-label='click selected'
				tabIndex={0}
			>
				<div
					className='sidebar__content'
					onMouseLeave={() => setSelectedId('')}
					onClick={e => e.stopPropagation()}
					onKeyDown={e => e.stopPropagation()}
					role='button'
					aria-label='selected click'
					tabIndex={0}
				>
					<div className='sidebar'>
						<div className={`sidebar__left ${selectedId ? 'hide' : ''}`}>
							<SidebarLeft
								data={dataLeft}
								handleOnClick={handleOnClick}
								isOpenMenu={isOpenMenu}
								setSelectedId={setSelectedId}
							/>
						</div>

						<div className={`sidebar__right ${!selectedId ? 'hide' : ''}`}>
							{dataRight.length > 0 && (
								<SidebarRight
									setSelectedId={setSelectedId}
									data={dataRight}
									handleOnClick={handleOnClick}
									isOpenMenu={isOpenMenu}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import { KeyboardEvent, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarIcon from './sidebarIcon/SidebarIcon';
import SidebarLeft from './sidebarLeft/SidebarLeft';
import SidebarRight from './sidebarRight/SidebarRight';
import departments from '../../../services/api';

export default function Sidebar() {
	const { pathname } = useLocation();
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [selectedId, setSelectedId] = useState<string>('');
	const category = useMemo(() => {
		if (pathname !== '/dashboard' && selectedId) {
			const filterCategory = departments.find(({ department_id }) => department_id === selectedId)?.categories;
			if (filterCategory) {
				return filterCategory;
			}
			return [];
		}
		return [];
	}, [pathname, selectedId]);

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
								data={
									pathname !== '/dashboard'
										? departments.map(({ department_id, department }) => ({ id: department_id, text: department }))
										: []
								}
								handleOnClick={handleOnClick}
								isOpenMenu={isOpenMenu}
								setSelectedId={setSelectedId}
							/>
						</div>

						<div className={`sidebar__right ${!selectedId ? 'hide' : ''}`}>
							{category.length > 0 && (
								<SidebarRight
									setSelectedId={setSelectedId}
									data={category}
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

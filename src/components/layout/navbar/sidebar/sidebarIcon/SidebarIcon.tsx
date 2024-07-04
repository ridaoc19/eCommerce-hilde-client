import { useEffect, useState } from 'react';

interface SidebarIconProps {
	updateIsOpen: boolean;
	handleOnClick: (isOpen: boolean) => void;
}

function SidebarIcon({ updateIsOpen, handleOnClick }: SidebarIconProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsOpen(updateIsOpen);
	}, [updateIsOpen]);

	return (
		<button
			type='button'
			aria-label='button sidebar'
			className={`sidebar__icon ${isOpen ? 'is-active' : ''}`}
			onClick={() => {
				handleOnClick(!isOpen);
				setIsOpen(!isOpen);
			}}
		>
			<div className='_layer -top' />
			<div className='_layer -mid' />
			<div className='_layer -bottom' />
		</button>
	);
}

export default SidebarIcon;

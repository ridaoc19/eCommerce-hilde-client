import { useState, useEffect, useRef } from 'react';
import Svg from '../icons/Svg';
import { SvgType } from '../icons/svgType';

interface SelectProps {
	data: { id: string; value: string }[];
	id: `input__${string}`;
	placeholder: string;
	svgRight: SvgType | null;
}

function Select({ id, data, placeholder, svgRight }: SelectProps) {
	const [search, setSearch] = useState<string>('');
	const [dataLocal, setDataLocal] = useState<SelectProps['data']>([]);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setDataLocal(data.filter(item => item.value.toLowerCase().includes(search.toLowerCase())));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	useEffect(() => {
		if (showDropdown && selectedIndex >= 0) {
			const dropdownItems = document.querySelectorAll('.select__list--dropdown-item');
			if (dropdownItems[selectedIndex]) {
				dropdownItems[selectedIndex].scrollIntoView({
					block: 'nearest',
					behavior: 'smooth',
				});
			}
		}
	}, [selectedIndex, showDropdown, dataLocal]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setSelectedIndex(prevIndex => Math.min(prevIndex + 1, dataLocal.length - 1));
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (selectedIndex >= 0) {
				setSearch(dataLocal[selectedIndex].value);
				setShowDropdown(false);
				inputRef.current?.blur();
			}
		}
	};

	return (
		<div className='select' data-testid='select'>
			<label htmlFor={id} className={`select__label ${showDropdown || search ? 'active' : ''}`}>
				{placeholder}
			</label>
			<div className='select__input'>
				<input
					id={id}
					type='text'
					value={search}
					ref={inputRef}
					onChange={e => {
						setSearch(e.target.value);
						setShowDropdown(true);
						setSelectedIndex(-1);
					}}
					onBlur={() => {
						setTimeout(() => setShowDropdown(false), 100);
					}}
					onFocus={() => setShowDropdown(true)}
					onKeyDown={handleKeyDown}
					autoComplete='off'
				/>
				<button
					type='button'
					aria-label='button icon right'
					className={`select__input--button-right ${showDropdown ? 'open' : ''}`}
					onClick={() => {
						setSearch('');
						setSelectedIndex(-1);
					}}
				>
					{svgRight && <Svg type={svgRight} width={16} height={16} />}
				</button>
			</div>

			<div className='select__list'>
				{showDropdown && dataLocal.length > 0 && (
					<ul className='select__list--dropdown'>
						{dataLocal.map(({ id: itemId, value }, index) => (
							<button
								key={itemId}
								type='button'
								className={`select__list--dropdown-item ${index === selectedIndex ? 'selected' : ''}`}
								onMouseDown={() => {
									setSearch(value);
									setShowDropdown(false);
								}}
							>
								<span>{value}</span>
								<span>{index}</span>
							</button>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default Select;

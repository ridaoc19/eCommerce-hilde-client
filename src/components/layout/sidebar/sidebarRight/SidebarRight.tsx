import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/button/Button';
import { ButtonType } from '../../../common/button/button.type';

interface SidebarRightProps {
	handleOnClick: () => void;
	isOpenMenu: boolean;
	setSelectedId: Dispatch<SetStateAction<string>>;
	data: {
		category_id: string;
		category: string;
		image: string;
		subcategories: {
			subcategory_id: string;
			subcategory: string;
		}[];
	}[];
}

export default function SidebarRight({ handleOnClick, isOpenMenu, data, setSelectedId }: SidebarRightProps) {
	return (
		<div className='sidebar-right'>
			<div className='sidebar-right__header'>
				<h2>
					<Link className='link' onClick={() => handleOnClick()} to={`/list-products/${isOpenMenu}`}>
						department
					</Link>
				</h2>

				<div className='sidebar-right__header--back'>
					<Button
						text='volver'
						handleClick={() => {
							setSelectedId('');
						}}
						isLoading={false}
						id='volver'
						type={ButtonType.Light}
					/>
				</div>
			</div>

			<div className='sidebar-right__main'>
				<div className='sidebar-right__main--cards'>
					{data.map(({ category_id, category, image, subcategories }) => {
						return (
							<div
								className='sidebar-right__main--cards-card'
								key={category_id}
								// ref={node => (node ? itemsRef.current.set(category_id, node) : itemsRef.current.delete(category_id))}
							>
								<Link className='link' to={`/list-products/${category_id}`} onClick={handleOnClick}>
									<div>
										<img src={image} alt={category} />
									</div>
									<h3>{category}</h3>
								</Link>
								<div>
									{subcategories.map(({ subcategory_id, subcategory }) => {
										return (
											<h5 key={subcategory_id}>
												<Link className='link' to={`/list-products/${subcategory_id}`} onClick={handleOnClick}>
													{subcategory}
												</Link>
											</h5>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

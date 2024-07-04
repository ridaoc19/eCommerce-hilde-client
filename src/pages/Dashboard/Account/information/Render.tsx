import Svg from '../../../../components/common/icons/Svg';
import { SvgType } from '../../../../components/common/icons/svgType';
import useAppSelector from '../../../../hooks/useAppSelector';
import { authState } from '../../../Auth/authSlice';

function Render() {
	const { user } = useAppSelector(authState);

	return (
		<div className='account-information__main-render'>
			<div>
				{Svg({ type: SvgType.User, width: 16, height: 16 })}
				<span>
					{user?.name} {user?.lastName}
				</span>
			</div>
			<div>
				{Svg({ type: SvgType.Email, width: 16, height: 16 })}
				<span>{user?.email}</span>
			</div>
			<div>
				{Svg({ type: SvgType.Phone, width: 16, height: 16 })}
				<span>{user?.phone}</span>
			</div>
		</div>
	);
}

export default Render;

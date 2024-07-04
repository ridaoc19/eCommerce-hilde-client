import Svg from '../../../../components/common/icons/Svg';
import { SvgType } from '../../../../components/common/icons/svgType';

function Render() {
	return (
		<div className='account-password__main-render'>
			<div>
				{Svg({ type: SvgType.Password, width: 16, height: 16 })}
				<span>********</span>
			</div>
		</div>
	);
}

export default Render;

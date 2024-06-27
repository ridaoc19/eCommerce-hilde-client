import { ReactNode } from 'react';
import Svg from '../../../../components/common/icons/Svg';
import { SvgType } from '../../../../components/common/icons/svgType';

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className='auth-layout-container'>
			<div className='auth-layout'>
				<header className='auth-layout__logo'>
					<Svg type={SvgType.Logo} width={92} height={87} />
				</header>
				<main className='auth-layout__children'>{children}</main>
			</div>
		</div>
	);
}

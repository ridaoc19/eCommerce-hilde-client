import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar/Navbar';

export namespace ILayout {
	export type LayoutProps = {
		children: ReactNode;
	};
}

function Layout({ children }: ILayout.LayoutProps) {
	const { pathname } = useLocation();

	return (
		<div className='layout'>
			<div className='layout__navbar'>
				<div className='layout__navbar-container'>
					<div className='layout__navbar-content'>
						<Navbar />
					</div>
					{pathname !== '/dashboard' && (
						<div className='layout__navbar-search'>
							<input type='text' placeholder='Buscar' />
						</div>
					)}
				</div>
			</div>
			<div className='layout__children'>
				<div className='layout__children-container'>{children}</div>
			</div>
			<div className='layout__footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;

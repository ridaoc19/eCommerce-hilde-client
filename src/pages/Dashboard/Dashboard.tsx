import { useContext } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import { CreateContext } from '../../hooks/useContext/context';
import Account from './Account/Account';
import { ComponentDash } from '../../hooks/useContext/dashboard/State';
import ProductCreator from './ProductCreator/ProductCreator';
import BulkProductUploader from './BulkProductUploader/BulkProductUploader';
import UserManagement from './UserManagement/UserManagement';

export default function Dashboard() {
	const {
		dashboard: {
			dashboardState: { component },
		},
	} = useContext(CreateContext);

	switch (component) {
		case ComponentDash.Administrar_Usuario:
			return <Account />;
		case 'userManagement':
			return <UserManagement />;
		case 'productCreator':
			return <ProductCreator />;
		case 'bulkProductUploader':
			return <BulkProductUploader />;
		default:
			return <NotFound text={component} />;
	}
}

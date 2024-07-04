import Account from './Account/Account';
import { DashboardProvider } from './contextDash';

export default function Dashboard() {
	return (
		<DashboardProvider>
			<Account />
		</DashboardProvider>
	);
}
